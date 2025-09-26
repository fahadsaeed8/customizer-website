"use client";

import Image from "next/image";

interface Brand {
  id: number;
  name: string;
  logo: string;
}

const brands: Brand[] = [
  { id: 1, name: "Adidas", logo: "/brand (1).png" },
  { id: 2, name: "Nike", logo: "/brand (2).png" },
  { id: 3, name: "Puma", logo: "/brand (3).png" },
  { id: 4, name: "Chanel", logo: "/brand (4).png" },
  { id: 5, name: "LV", logo: "/brand (5).png" },
  { id: 6, name: "Gucci", logo: "/brand (6).png" },
  { id: 7, name: "Fendi", logo: "/brand (7).png" },
  { id: 8, name: "Versace", logo: "/brand (8).png" },
  { id: 9, name: "Under Armour", logo: "/brand (9).png" },
  { id: 10, name: "Reebok", logo: "/brand (10).png" },
  { id: 11, name: "Reeboks", logo: "/brand (11).png" },
  { id: 12, name: "Reebokss", logo: "/brand (12).png" },
  { id: 13, name: "Reebokss", logo: "/brand (13).png" },
  { id: 14, name: "Reebo", logo: "/brand (14).png" },
  { id: 15, name: "Reeb", logo: "/brand (15).png" },
  { id: 16, name: "Ree", logo: "/brand (16).png" },
  { id: 17, name: "Re", logo: "/brand (17).png" },
  { id: 18, name: "R", logo: "/brand (18).png" },
  { id: 19, name: "gucc", logo: "/brand (19).png" },
  { id: 20, name: "guccii", logo: "/brand (20).png" },
  { id: 21, name: "guci", logo: "/brand (21).png" },
  { id: 22, name: "guciee", logo: "/brand (22).png" },
  { id: 23, name: "gucieee", logo: "/brand (23).png" },
  { id: 24, name: "gucieee", logo: "/brand (24).png" },
  { id: 25, name: "gucieeee", logo: "/brand (25).png" },
  { id: 216, name: "gucieeeee", logo: "/brand (26).png" },
  // 👉 Add the rest of the logos in this array
];

export default function BrandSection() {
  return (
    <section className="py-10 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-8">
          Our Brand Partners
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center bg-white p-8">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={100}
                className="object-contain max-h-18"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
