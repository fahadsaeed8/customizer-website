"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
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
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkInView();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer
      className="footer-root bg-black text-white py-6 px-6 md:px-20 relative overflow-hidden"
      role="contentinfo"
    >
      {/* texture container */}
      <div className="footer-texture absolute inset-0 pointer-events-none" />

      <div className="footer-content relative z-20">
        {/* Logo */}
        <div className="scroll-animate-down flex justify-center mb-10">
          <Link href="/" aria-label="Go to homepage">
            <Image
              src="/PROSIX-LOGO.png"
              width={250}
              height={250}
              alt="Prosix logo"
              className="invert cursor-pointer"
            />
          </Link>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-gray-700 pt-5 pb-20 text-center md:text-left items-start">
          {/* Left - Opening schedule */}
          <div className="w-full md:w-auto px-6">
            <h3 className="font-bold text-[28px] md:text-[42px] mb-4 text-gray-300">
              OPENING SCHEDULE
            </h3>
            <p className="text-md flex justify-center md:justify-start items-center gap-16">
              <span className="opacity-80">Days</span>
              <span>Mon - Sat</span>
            </p>
            <p className="text-md flex justify-center md:justify-start items-center gap-16 my-3">
              <span className="opacity-80">Time</span>
              <span>08:00 - 18:00</span>
            </p>
            <p className="text-md flex justify-center md:justify-start items-center gap-12">
              <span className="opacity-80">Sunday:</span>
              <span className="text-white">Closed</span>
            </p>
          </div>

          {/* Center - Subscribe */}
          <div className="px-4 md:px-6 w-full md:w-auto flex flex-col items-center">
            <h3 className="text-[32px] md:text-[102px] leading-none tracking-[0.9px] font-extrabold mb-2 text-gray-300">
              SUBSCRIBE
            </h3>
            <p className="text-lg text-center mb-4">To our newsletter for latest updates</p>
            <div className="flex justify-center gap-6 text-xl">
              <a
                href="https://www.facebook.com/prosixsports"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/prosixsports/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/prosixsports"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="youtube"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://x.com/prosixsports/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.pinterest.com/prosixsports/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="pinterest"
              >
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>

          {/* Right - Contact info */}
          <div className="px-4 md:pl-25 w-full md:w-auto text-center md:text-left">
            <h3 className="font-bold text-[28px] leading-none md:text-[42px] mb-4 text-gray-300">
              CONTACT INFO
            </h3>
            <p>
              <a href="mailto:sales@prosix.com" className="footer-contact-link transition-colors">
                sales@prosix.com
              </a>
            </p>
            <p className="mt-2">
              <a href="tel:+19292104402" className="footer-contact-link transition-colors">
                + (929) 210 4402
              </a>
            </p>
            <p className="text-white mt-2 text-xl leading-none">
              19 Holly Cove Ln, Dover Delaware 19901
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="text-center text-xl text-gray-200 mt-6">
          Copyright © 2009 - 2024, All rights reserved by{" "}
          <a href="#" className="text-white font-semibold hover:underline">
            Prosix Sports
          </a>
          .
        </div>
      </div>

      <style jsx>{`
        .footer-contact-link {
          color: #fff;
          text-decoration: none;
        }
        .footer-contact-link:hover {
          color: #be475c;
        }

        /* ensure footer keeps visible area and textures sit behind content */
        .footer-root {
          min-height: 220px;
        }

        /* both side textures use the same mask image (white pattern on transparent).
           left is mirrored so small arrows face right; right stays as-is.
           subtle white tint shows through the mask to reveal the pattern on dark background. */
        .footer-texture::before,
        .footer-texture::after {
          content: "";
          position: absolute;
          top: -12px;
          bottom: -12px;
          width: 36%;
          pointer-events: none;
          z-index: 0;
          background-color: rgba(255, 255, 255, 0.06);
          -webkit-mask-image: url("/footer-texture.png");
          -webkit-mask-repeat: repeat;
          -webkit-mask-size: 420px 420px;
          -webkit-mask-position: top center;
          mask-image: url("/footer-texture.png");
          mask-repeat: repeat;
          mask-size: 420px 420px;
          mask-position: top center;
          background-position: top center;
        }

        /* left: remove left gap (set to 0) and mirror so arrows face right */
        .footer-texture::before {
          left: 0;
          transform: scaleX(-1);
          transform-origin: center;
          -webkit-mask-position: top left;
          mask-position: top left;
        }

        /* right: flush to right so it aligns closely with copyright */
        .footer-texture::after {
          right: 0;
          transform: none;
          -webkit-mask-position: top right;
          mask-position: top right;
        }

        /* larger screens: reduce repetition and slightly narrow side blocks */
        @media (min-width: 1400px) {
          .footer-texture::before,
          .footer-texture::after {
            -webkit-mask-size: 720px 720px;
            mask-size: 720px 720px;
            width: 30%;
            background-color: rgba(255, 255, 255, 0.07);
          }
          .footer-texture::before {
            left: 0;
          }
        }

        /* medium screens */
        @media (min-width: 768px) and (max-width: 1399px) {
          .footer-texture::before,
          .footer-texture::after {
            -webkit-mask-size: 520px 520px;
            mask-size: 520px 520px;
            width: 36%;
            background-color: rgba(255, 255, 255, 0.06);
          }
          .footer-texture::before {
            left: 0;
          }
        }

        /* mobile: full width textures and avoid mirroring to keep crisp */
        @media (max-width: 767px) {
          .footer-texture::before,
          .footer-texture::after {
            width: 100%;
            -webkit-mask-size: 180px 180px;
            mask-size: 180px 180px;
            background-color: rgba(255, 255, 255, 0.05);
            top: -8px;
            bottom: -8px;
          }
          .footer-texture::before {
            left: 0;
            transform: none;
          }
          .footer-texture::after {
            right: 0;
          }
        }

        .footer-content {
          position: relative;
          z-index: 20;
        }
      `}</style>
    </footer>
  );
};

export default Footer;