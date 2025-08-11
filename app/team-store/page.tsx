"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const page = () => {
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

        if (isInView) {
          el.classList.add("in-view");
        } else {
          el.classList.remove("in-view");
        }
      });
    }

    checkInView();

    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkInView();
          ticking = false;
        });
        ticking = true;
      }
    });
    return () => {
      window.removeEventListener("scroll", checkInView);
    };
  }, []);

  const categories = [
    {
      label: "FAMLIFE FLEX",
      image: "/accessories/coming-soon-600x600.jpg",
      link: "/team-store/famlife-flex",
    },
    {
      label: "CO ELITE",
      image: "/team-store/01-CO-ELITE.jpg",
      link: "/team-store/co-elite",
    },
    {
      label: "HYFIELDS HAWKS",
      image: "/team-store/02-HYFIELDS-HAWKS.jpg",
      link: "/team-store/hyfields-hawks",
    },
    {
      label: "BUFFS",
      image: "/team-store/03-BUFFS.jpg",
      link: "/team-store/buffs",
    },
    {
      label: "Mc KINLEY TEC",
      image: "/team-store/04-Mc-KINLEY-TEC.jpg",
      link: "/team-store/mc-kenly-tec",
    },
    {
      label: "Potomac",
      image: "/team-store/05-Potomac.jpg",
      link: "/team-store/protomac",
    },
    {
      label: "AN-Rams",
      image: "/team-store/06-AN-Rams.jpg",
      link: "/fan-store/an-rams",
    },
    {
      label: "Potomacs Wolverines",
      image: "/team-store/07-Potomacs-Wolverines.jpg",
      link: "/fan-store/protomacs-wolveriens",
    },
    {
      label: "AAS EAGLES",
      image: "/team-store/08-AAS-EAGLES.jpg",
      link: "/fan-store/aas-eagles",
    },
    {
      label: "W PANTHERS",
      image: "/team-store/09-W-PANTHERS.jpg",
      link: "/fan-store/w-panthers",
    },
    {
      label: "VA Jags",
      image: "/team-store/10-VA-Jags.jpg",
      link: "/fan-store/va-jags",
    },
  ];
  return (
    <div>
      <div className="px-6 md:px-20 py-[180px] min-h-screen flex flex-wrap gap-10">
        <div className="scroll-animate-left mt-35 max-w-[400px] flex-1">
          <h2 className="text-[36px] font-bold mb-2">FAN STORE</h2>
          <p className="text-[22px] font-bold uppercase text-black mb-1">
            CHOOSE THE SPORTS YOU WANT TO CUSTOMIZE / WEAR
          </p>
          <p className="text-[22px] text-gray-700 mb-6">
            After you make your selection, the uniform of your choice becomes
            the canvas. We encourage creativity here at Prosix sports.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-1 scroll-animate-down">
          {categories.map((item, index) => (
            <Link href={item.link} key={index} className="text-center block">
              <div className="relative w-full h-[250px]">
                <Image
                  src={item.image}
                  alt={item.label}
                  layout="fill"
                  objectFit="cover"
                  className="cursor-pointer grayscale hover:grayscale-0 transition-all duration-300 rounded-lg"
                />
              </div>
              <p className="text-[22px] cursor-pointer text-shadow-2xs text-shadow-amber-400 font-bold uppercase">
                {item.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
