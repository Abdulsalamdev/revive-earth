"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main>
      <section className="hero pt-[30px] pb-[70px] px-[30px]">
        <nav className="hidden sm:flex justify-center items-center border rounded-[31px] py-[20px] px-[35px] mb-[30px] border-[#8F73F4] gap-[clamp(24px,4.4vw,69px)] w-fit justify-self-center relative">
          <span className="text-[#FFFFFF] font-semibold text-[16px]">Home</span>
          <span className="text-[#FFFFFF] font-normal text-[16px]">
            Technology
          </span>
          <Image src={"/images/logo.png"} width={100} height={100} alt={""} />
          <span className="text-[#FFFFFF] font-normal text-[16px]">News</span>
          <span className="text-[#FFFFFF] font-normal text-[16px]">
            Contact Us
          </span>
        </nav>
        <div className="flex sm:hidden justify-between ">
          <Image src={"/images/logo.png"} width={100} height={100} alt={""} />
          <button
            className="relative w-8 h-8 flex flex-col justify-between items-center p-1 z-50"
            onClick={() => setOpen(!open)}
          >
            <span
              className={`block h-[2px] w-full bg-white transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-[10px]" : ""
              }`}
            ></span>
            <span
              className={`block h-[2px] w-full bg-white transition duration-300 ease-in-out ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-[2px] w-full bg-white transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-[10px]" : ""
              }`}
            ></span>
          </button>
          <div
            onClick={() => setOpen(false)}
            className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
              open ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div
              className={`fixed top-0 right-0 h-full w-[70%] 	bg-gradient-to-b from-[#A3EA56] to-[#4C9A2A] z-50 p-8 flex flex-col gap-8 shadow-lg transition-transform duration-300 ease-in-out ${
                open ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <nav className="flex flex-col gap-6 mt-10 transition-all duration-500 delay-200 transform">
                <a
                  href="#"
                  className={`text-white text-lg font-semibold opacity-0 translate-x-8 ${
                    open
                      ? "opacity-100 translate-x-0 transition-all duration-500"
                      : ""
                  }`}
                >
                  Home
                </a>
                <a
                  href="#"
                  className={`text-white text-lg font-medium opacity-0 translate-x-8 ${
                    open
                      ? "opacity-100 translate-x-0 transition-all duration-500 delay-100"
                      : ""
                  }`}
                >
                  Technology
                </a>
                <a
                  href="#"
                  className={`text-white text-lg font-medium opacity-0 translate-x-8 ${
                    open
                      ? "opacity-100 translate-x-0 transition-all duration-500 delay-200"
                      : ""
                  }`}
                >
                  News
                </a>
                <a
                  href="#"
                  className={`text-white text-lg font-medium opacity-0 translate-x-8 ${
                    open
                      ? "opacity-100 translate-x-0 transition-all duration-500 delay-300"
                      : ""
                  }`}
                >
                  Contact Us
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-[20px] pt-[30px]">
          <p className="text-[#FFFFFF] font-medium text-[clamp(45px,6vw,96px)] text-center max-w-[940px] hero-title">
            The Future is Here,Revive Earth!
          </p>
          <p className="text-[#FFFFFF] text-[16px] text-center max-w-[750px] pb-[10px]">
            Transforming petrol-powered tricycles/minbuses into eco-friendly
            electric vechicles. Plus, pioneering affordable and efficient EV
            manufacturing
          </p>
          <div className="flex flex-col sm:flex-row  gap-[15px]">
            <button className="hero-button border border-solid border-[#FFFFFF]">
              Our products{" "}
            </button>
            <button className="bg-[#0F0B0B] text-[#FFFFFF] hero-button">
              Buy Now
            </button>
          </div>
        </div>
      </section>
      <section className="px-[clamp(10px,3.2vw,50px)] pt-[15px] pb-[35px]">
        <p className="text-[#0F0B0B] font-medium text-[16px] text-center">
          In Partnership With
        </p>
        <div className="hidden md:flex justify-center items-center gap-[70px]  w-fit justify-self-center">
          <Image src={"/images/fund.png"} width={100} height={100} alt={""} />
          <Image src={"/images/royal.png"} width={100} height={100} alt={""} />
          <Image
            src={"/images/hardware.png"}
            width={100}
            height={100}
            alt={""}
          />
          <Image src={"/images/badge.png"} width={100} height={100} alt={""} />
        </div>
        <div className="px-[30px] flex justify-center gap-[40px] flex-wrap items-center">
          <div>
            <p className="text-[#83BC25] text-[24px] font-medium">Inovation on Wheels</p>
            <p className="text-[#29292B] font-medium text-[clamp(40px,4vw,64px)] pb-[10px]">Building The Futures</p>
            <p className="text-[#0F0B0B] text-[16px] max-w-[400px] pb-[20px]">
              Transform Your Ride - Retrofit your existing petrol-powered
              vehicle into a sleek, eco-friendly electric machine with our
              cutting-edge revive kits. Say goodbye to emissions and hello to a
              cleaner, greener commute.
            </p>
            <button className="hero-button bg-[#000000]">ORDER NOW</button>
          </div>
          <div>
          <Image src={"/images/building.png"} width={500} height={500} alt={""} />
          </div>
        </div>
      </section>
    </main>
  );
}
