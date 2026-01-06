"use client";
import Sidebar from "@/components/common/Sidebar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import SubcategoryPasswordModal from "@/components/SubcategoryPasswordModal";
import Link from "next/link";
import React, { useEffect, useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  getAllProductsAPI,
  getCategoryCustomizersAPI,
  getSubcategoryByIdAPI,
  verifySubcategoryPasswordAPI,
} from "@/services/api";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";

const transformApiProductToProductCard = (apiProduct: any) => {
  if (!apiProduct) {
    return null;
  }

  const mainImage =
    (apiProduct.other_images &&
      Array.isArray(apiProduct.other_images) &&
      apiProduct.other_images[0]?.image) ||
    apiProduct.white_front ||
    apiProduct.image ||
    "/fallback-image.jpg";

  const cleanUrl = (url: string) => {
    if (!url || typeof url !== "string") return "/fallback-image.jpg";
    if (url.includes("https://prosix.onlinehttps://prosix.online")) {
      return url.replace(
        "https://prosix.onlinehttps://prosix.online",
        "https://prosix.online"
      );
    }
    return url;
  };

  return {
    name: apiProduct.title || "Unnamed Product",
    imageSrc: cleanUrl(mainImage),
    inStock: true,
    colors: ["black", "white"],
    popularity: Math.floor(Math.random() * 30) + 1,
    rating: Math.floor(Math.random() * 5) + 1,
    latest: Math.floor(Math.random() * 30) + 1,
    price: parseFloat(apiProduct.price) || 0,
    apiData: apiProduct,
  };
};

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryId = searchParams.get("id");
  const subcategoryId = searchParams.get("subcategoryId");

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [stockFilter, setStockFilter] = useState<boolean | null>(null);
  const [colorFilters, setColorFilters] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("default");
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [subcategoryData, setSubcategoryData] = useState<{
    id: number;
    name: string;
    have_password: boolean;
  } | null>(null);
  const [isPasswordVerified, setIsPasswordVerified] = useState(false);

  // Check if subcategoryId exists and if it requires password
  // Priority: subcategoryId > categoryId (for password check)
  const checkId = subcategoryId || categoryId;

  const { data: subcategoryCheckData, isLoading: isLoadingSubcategory } =
    useQuery({
      queryKey: ["subcategoryCheck", checkId],
      queryFn: () => {
        if (!checkId) return null;
        return getSubcategoryByIdAPI(checkId);
      },
      enabled: !!checkId,
      retry: false,
    });

  // Check password verification status
  useEffect(() => {
    if (subcategoryCheckData && checkId) {
      const subcategory =
        subcategoryCheckData?.response?.data ||
        subcategoryCheckData?.data ||
        subcategoryCheckData;

      if (subcategory && subcategory.have_password) {
        // Check if password is already verified in this session
        const verifiedSubcategories = JSON.parse(
          sessionStorage.getItem("verifiedSubcategories") || "[]"
        );

        const idToCheck = subcategoryId
          ? Number(subcategoryId)
          : Number(checkId);

        if (!verifiedSubcategories.includes(idToCheck)) {
          // Password not verified, show modal
          setSubcategoryData({
            id: subcategory.id,
            name: subcategory.name,
            have_password: subcategory.have_password,
          });
          setPasswordModalOpen(true);
        } else {
          setIsPasswordVerified(true);
        }
      } else {
        setIsPasswordVerified(true);
      }
    } else if (!checkId) {
      setIsPasswordVerified(true);
    }
  }, [subcategoryCheckData, checkId, subcategoryId]);

  // API call with React Query - use category API if categoryId exists
  const { data, isLoading, isError, error } = useQuery({
    queryKey: categoryId ? ["categoryCustomizers", categoryId] : ["products"],
    queryFn: () => {
      if (categoryId) {
        return getCategoryCustomizersAPI(categoryId);
      }
      return getAllProductsAPI();
    },
    enabled: !!categoryId ? isPasswordVerified : true, // Only fetch if password is verified or no categoryId
  });

  console.log("product api", data);
  console.log("categoryId from URL:", categoryId);

  // Transform API data
  const allProducts = useMemo(() => {
    // Handle different response structures
    const results =
      data?.results ||
      data?.response?.data?.results ||
      data?.data?.results ||
      [];
    if (!Array.isArray(results)) return [];

    return results
      .map(transformApiProductToProductCard)
      .filter((product) => product !== null); // Filter out null products
  }, [data]);

  // Filtering
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product: any) => {
      if (stockFilter !== null && product.inStock !== stockFilter) return false;
      if (
        colorFilters.length > 0 &&
        !colorFilters.some((c) => product.colors.includes(c))
      )
        return false;
      return true;
    });
  }, [allProducts, stockFilter, colorFilters]);

  // Sorting
  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      switch (sortOption) {
        case "popularity":
          return b.popularity - a.popularity;
        case "rating":
          return b.rating - a.rating;
        case "latest":
          return b.latest - a.latest;
        case "low-high":
          return a.price - b.price;
        case "high-low":
          return b.price - a.price;
        default:
          return 0;
      }
    });
  }, [filteredProducts, sortOption]);

  // Pagination calculation
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = useMemo(() => {
    return sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  }, [sortedProducts, indexOfFirstProduct, indexOfLastProduct]);

  console.log("current products", currentProducts);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [stockFilter, colorFilters, sortOption]);

  // Scroll animation effect
  useEffect(() => {
    const animateElements = document.querySelectorAll(
      ".scroll-animate-up, .scroll-animate-down, .scroll-animate-left, .scroll-animate-right"
    );

    function checkInView() {
      animateElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInView =
          rect.top <=
            (window.innerHeight || document.documentElement.clientHeight) *
              0.75 && rect.bottom >= 0;
        if (isInView) el.classList.add("in-view");
        else el.classList.remove("in-view");
      });
    }

    checkInView();
    let ticking = false;
    const handler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkInView();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []); // Empty dependency array - run once on mount

  // Handle password verification
  const handlePasswordVerify = async (password: string) => {
    if (!subcategoryData) return;

    try {
      // Use subcategoryId if available, otherwise use subcategoryData.id
      const idToVerify = subcategoryId
        ? Number(subcategoryId)
        : subcategoryData.id;
      const response = await verifySubcategoryPasswordAPI(idToVerify, password);

      if (response?.response?.is_valid === true) {
        // Store verified subcategory ID in sessionStorage
        const verifiedSubcategories = JSON.parse(
          sessionStorage.getItem("verifiedSubcategories") || "[]"
        );
        if (!verifiedSubcategories.includes(idToVerify)) {
          verifiedSubcategories.push(idToVerify);
          sessionStorage.setItem(
            "verifiedSubcategories",
            JSON.stringify(verifiedSubcategories)
          );
        }

        toast.success("Password verified successfully!");
        setPasswordModalOpen(false);
        setIsPasswordVerified(true);
        setSubcategoryData(null);
      } else {
        toast.error(response?.response?.message || "Invalid password");
      }
    } catch (err: any) {
      const errorMessage =
        err?.response?.data?.response?.message ||
        err?.message ||
        "Failed to verify password";
      toast.error(errorMessage);
    }
  };

  const handlePasswordModalClose = () => {
    // If user closes modal without verifying, redirect to home
    router.push("/");
  };

  // Show password modal if required
  if (passwordModalOpen && subcategoryData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <SubcategoryPasswordModal
          isOpen={passwordModalOpen}
          onClose={handlePasswordModalClose}
          subcategoryId={subcategoryData.id}
          subcategoryName={subcategoryData.name}
          redirectLink={`/products?id=${categoryId}${
            subcategoryId ? `&subcategoryId=${subcategoryId}` : ""
          }`}
          onPasswordVerify={handlePasswordVerify}
        />
      </div>
    );
  }

  // Loading state - now hooks are all called before any returns
  if (isLoading || isLoadingSubcategory) {
    return (
      <div className="min-h-screen px-6 py-[190px] flex justify-center items-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500 mb-4"></div>
          <p className="text-lg">Products loading...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="min-h-screen px-6 py-[190px] flex justify-center items-center">
        <div className="text-center">
          <p className="text-red-500 text-lg">
            Error loading products: {(error as Error).message}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="min-h-screen px-6 py-[190px]">
        <h1 className="text-[20px] text-black mb-2">
          <Link href="/" className="hover:text-red-500">
            Home
          </Link>{" "}
          |{" "}
          <Link href="/team-wear" className="hover:text-red-500">
            TEAM WEAR
          </Link>{" "}
          | <span className="text-gray-700">American Football</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar
            onStockFilterChange={setStockFilter}
            onColorFilterChange={setColorFilters}
          />

          <div className="w-full">
            <h2 className="text-[26px] font-medium mb-2">American Football</h2>

            <div className="flex justify-between items-center mb-4">
              <p className="text-2xl">
                Showing {indexOfFirstProduct + 1}–
                {Math.min(indexOfLastProduct, sortedProducts.length)} of{" "}
                {sortedProducts.length} results
                {data && ` (Total in API: ${data.count})`}
              </p>

              {sortedProducts.length > 0 && (
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border border-gray-400 rounded p-1 w-[15%] text-sm text-left cursor-pointer"
                >
                  <option value="default">Default sorting</option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="rating">Sort by average rating</option>
                  <option value="latest">Sort by latest</option>
                  <option value="low-high">Sort by price: low to high</option>
                  <option value="high-low">Sort by price: high to low</option>
                </select>
              )}
            </div>

            {sortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No products found with the selected filters.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {currentProducts.map((product) => (
                    <ProductCard
                      key={`${product.name}-${product.apiData?.id}`}
                      {...product}
                      product={product}
                    />
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="flex justify-center mt-6 text-sm space-x-3">
                    {Array.from({ length: totalPages }, (_, index) => (
                      <button
                        key={index + 1}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-3 py-1 cursor-pointer border rounded ${
                          currentPage === index + 1
                            ? "bg-red-500 text-white"
                            : "hover:text-red-600"
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
