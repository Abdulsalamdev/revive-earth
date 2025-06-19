"use client";
import Card from "@/components/Card";
import Image from "next/image";
import { useState } from "react";
import cardData from "@/data/cards.json";
import Link from "next/link";

const CARDS_PER_PAGE = 3;
const CARD_WIDTH = 256; // approx width of each card in px (w-64 = 16rem = 256px)
const CARD_GAP = 16;

export default function Home() {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const maxIndex = cardData.length - CARDS_PER_PAGE;

  const handleNext = () => {
    if (startIndex < maxIndex) {
      setStartIndex(startIndex + CARDS_PER_PAGE);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - CARDS_PER_PAGE);
    }
  };
  // Calculate translateX value based on startIndex
  const translateX = -(startIndex * (CARD_WIDTH + CARD_GAP));
  return (
    <main>
      <section className="hero pt-[30px] pb-[70px] px-[30px]" id="home">
        <nav className="hidden sm:flex justify-center items-center border rounded-[31px] py-[20px] px-[35px] mb-[30px] border-[#8F73F4] gap-[clamp(24px,4.4vw,69px)] w-fit justify-self-center relative">
          <Link href={"#home"} className="text-[#FFFFFF] font-semibold text-[16px]">Home</Link>
          <Link href={"#technology"} className="text-[#FFFFFF] font-normal text-[16px]">
            Technology
          </Link>
          <Image src={"/images/logo.png"} width={100} height={100} alt={""} />
          <Link href={"#news"} className="text-[#FFFFFF] font-normal text-[16px]">News</Link>
          <Link href={"#contact"} className="text-[#FFFFFF] font-normal text-[16px]">
            Contact Us
          </Link>
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
            <p className="text-[#83BC25] text-[24px] font-medium">
              Inovation on Wheels
            </p>
            <p className="text-[#29292B] font-medium text-[clamp(40px,4vw,64px)] pb-[10px]">
              Building The Futures
            </p>
            <p className="text-[#0F0B0B] text-[16px] max-w-[400px] pb-[20px]">
              Transform Your Ride - Retrofit your existing petrol-powered
              vehicle into a sleek, eco-friendly electric machine with our
              cutting-edge revive kits. Say goodbye to emissions and hello to a
              cleaner, greener commute.
            </p>
            <button className="hero-button bg-[#000000]">ORDER NOW</button>
          </div>
          <div>
            <Image
              src={"/images/building.png"}
              width={500}
              height={500}
              alt={""}
            />
          </div>
        </div>
      </section>
      <article className="bg-[#101010] px-[30px] pt-[20px] pb-[10px]" id="technology">
        <p className="text-[#FFFFFF] text-center text-[clamp(45px,6vw,96px)] font-medium">
          CONVERSION KIT
        </p>
        <p className="text-[18px] text-[#F3F8E9] text-center pb-[30px]">
          Revive Earth's Electrifying Innovation: Elevate Any Ride into the
          Future with Our Universal Conversion Kits!
        </p>
        <div className="flex flex-wrap justify-center items-center gap-[30px]">
          <div className="flex flex-col gap-[10px] card">
            <Image src={"/images/flash.png"} width={40} height={40} alt={""} />
            <p className="text-[#FFFFFF] text-[24px] font-medium w-[280px]">
              Cost-efficiency with faster time to market
            </p>
            <p className="text-[#FFFFFF] text-[16px] max-w-[290px]">
              Get up and running quickly with a fully functioning auto parts
              storefront and mobile experience. Transparent pricing and no
              hidden fees mean no surprises. You get the freedom to build the
              solution you want at a budget that’s comfortable for you.
            </p>
          </div>
          <div className="flex flex-col gap-[10px] card">
            <Image src={"/images/flash.png"} width={40} height={40} alt={""} />
            <p className="text-[#FFFFFF] text-[24px] font-medium w-[280px]">
              Made for the complexity of automotive
            </p>
            <p className="text-[#FFFFFF] text-[16px] max-w-[290px]">
              No matter your automotive business model, industry, or vertical,
              we have you covered. Our automotive innovative parts solutions are
              flexible enough to work with the parameters of your business,
              partners, customers, and supply chain.
            </p>
          </div>
          <div className="flex flex-col gap-[10px] card">
            <Image src={"/images/flash.png"} width={40} height={40} alt={""} />
            <p className="text-[#FFFFFF] text-[24px] font-medium w-[280px]">
              24/7 customer support
            </p>
            <p className="text-[#FFFFFF] text-[16px] max-w-[290px]">
              Forget about hard-coded, fragmented or one-size-fits-all solutions
              for complex building use cases. Our key advantage is at the core
              of the product: the architecture, technology and flexibility to
              accommodate, grow and scale your business.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[30px] my-[30px] flex-wrap">
          <Image src={"/images/kit1.png"} width={500} height={400} alt={""} />
          <div className="flex flex-col gap-[20px]">
            <Image src={"/images/kit2.png"} width={300} height={300} alt={""} />
            <Image src={"/images/kit3.png"} width={300} height={300} alt={""} />
          </div>
        </div>
        <div className="flex gap-[30px] justify-center items-center flex-wrap pb-[20px]">
          <p className="text-[#FFFFFF] text-[28px] font-normal">
            Some of the products we’ve converted:
          </p>
          <div className="flex gap-[5px] items-center">
            <Image src={"/images/flash.png"} alt={""} width={30} height={30} />
            <p className="text-[28px] font-medium text-[#FFFFFF] ">
              Electric Minibus
            </p>
          </div>
          <div className="flex gap-[5px] items-center">
            <Image src={"/images/flash.png"} alt={""} width={30} height={30} />
            <p className="text-[28px] font-medium text-[#FFFFFF]">
              Electric Tricyle
            </p>
          </div>
        </div>
      </article>
      <section className="bg-[#FFFFFF] p-[30px]">
        <p className="text-[20px] font-medium text-[#000000] pb-[20px]">
          Battery Sbwapping System
        </p>
        <div className="bg-[#BDBDBD] w-full h-[1px] mb-[20px]"></div>
        <Image
          src={"/images/battery.png"}
          alt={""}
          width={400}
          height={400}
          className="w-full h-auto pb-[30px]"
        />
        <p className="text-[24px] font-medium text-[#83BC25]">
          Why Choose Electric Mobility
        </p>
        <p className="text-[#050404] font-medium text-[clamp(45px,6vw,96px)]">
          GO ELECTRIC
        </p>
        <div className="flex flex-wrap justify-center  gap-[30px]">
          <div className="flex flex-col gap-[10px] card">
            <Image src={"/images/flash.png"} width={40} height={40} alt={""} />
            <p className="text-[24px] font-medium w-[280px] text-[#050404]">
              Indigenous Technology
            </p>
            <p className="text-[16px] max-w-[290px] text-[#0F0B0B]">
              We have a resilient team that is well versed in the area of
              electric mobility and is obsessed with changing the status quo of
              our clime using technology.
            </p>
          </div>
          <div className="flex flex-col gap-[10px] card">
            <Image src={"/images/flash.png"} width={40} height={40} alt={""} />
            <p className="text-[24px] font-medium w-[280px] text-[#050404]">
              Smart technology
            </p>
            <p className="text-[16px] max-w-[290px] text-[#0F0B0B]">
              Our vehicles incorporate smart technologies for driver and road
              safety, such as wireless battery monitor, and GPS connectivity in
              demand. The regenerative braking system maximizes vehicle momentum
              to send power back to the battery instead of wasting it as heat in
              the brake pads.
            </p>
          </div>
          <div className="flex flex-col gap-[10px] card">
            <Image src={"/images/flash.png"} width={40} height={40} alt={""} />
            <p className="text-[24px] font-medium w-[280px] text-[#050404] ">
              Robustness and efficiency
            </p>
            <p className=" text-[16px] max-w-[290px] text-[#0F0B0B]">
              Our swapping network technology ensures that you never really run
              out of power while in motion and up to 95% efficiency is achieved
              by our vehicles while still delivering the desired performance in
              terms of speed.
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center gap-[30px] flex-wrap p-[50px] eletric">
        <Image
          src={"/images/electric2.png"}
          alt=""
          width={450}
          height={400}
          className=""
        />

        <div className="bg-[#1C290F] p-[30px] flex flex-col gap-[15px]">
          <p className="text-[32px] font-medium text-[#E7E7E7] max-w-[420px]">
            Electric Vehicles made for Africa, in Africa, by Africans.
          </p>
          <p className="text-[16px] font-normal text-[#E7E7E7] max-w-[400px]">
            We're firm believers that as electric vehicles become a necessity,
            the demand for functional electricity will soar. This trend will
            extend to all aspects of our society.
          </p>
          <p className="text-[16px] font-normal max-w-[400px] text-[#E7E7E7]">
            The future of mobility lies in portable electric vehicles. They
            offer unparalleled convenience and cost-effectiveness, paving the
            way for robust electric AI cars. In fact, this path is not just
            preferable; it's inevitable.
          </p>
        </div>
      </section>
      <section className="m-[clamp(30px,3.2vw,50px)]">
        <div
          className="flex justify-center flex-wrap
         gap-[50px] xl:justify-around"
        >
          <Image
            src={"/images/vehicle.png"}
            alt={""}
            width={500}
            height={400}
          />
          <div>
            <p className="text-[24px] font-medium text-[#83BC25]">
              Why Consider Electric
            </p>
            <p className="text-[#050404] font-medium text-[clamp(45px,6vw,96px)]">
              VEHICLES
            </p>
            <div className="flex flex-col gap-[30px]">
              <div>
                <div className="flex items-center gap-[10px] mb-[10px]">
                  <Image
                    src={"/images/cleaner.png"}
                    width={30}
                    height={30}
                    alt={""}
                  />
                  <span className="text-[#050404] font-medium text-[24px]">
                    Cleaner
                  </span>
                </div>
                <div className="text-[#0F0B0B] text-[16px] font-light max-w-[480px]">
                  Electric Vehicles drive on Electricity which can be gotten
                  from renewable and sustainable sources like Solar, Hydrogen
                  Fuel, biogas, wind, etc. If only 40% of automobiles can run on
                  electricity, it cuts down the global climate change menace by
                  11.6%. According to UNEP data, 14 million used vehicles were
                  shipped out of European Union, Japan, and the United States
                  between 2015 and 2018 alone, and 90% of the receiving regions
                  have weak/no climate change regulation policies.
                </div>
              </div>
              <div>
                <div className="flex items-center gap-[10px] mb-[10px]">
                  <Image
                    src={"/images/cheaper.png"}
                    width={30}
                    height={30}
                    alt={""}
                  />
                  <span className="text-[#050404] font-medium text-[24px]">
                    Cheaper
                  </span>
                </div>
                <div className="text-[#0F0B0B] text-[16px] font-light max-w-[480px]">
                  The operational cost of a vehicle is cut by 66.7%, and the
                  maintenance cost by 90% if it is powered by electricity. This
                  presents a groundbreaking opportunity for commercial drivers
                  to make more money. Merchants as well can have a better value
                  for their investments in the transport business.
                </div>
              </div>
              <div>
                <div className="flex items-center gap-[10px] mb-[10px]">
                  <Image
                    src={"/images/convenient.png"}
                    width={30}
                    height={30}
                    alt={""}
                  />
                  <span className="text-[#050404] font-medium text-[24px]">
                    Convenient
                  </span>
                </div>
                <div className="text-[#0F0B0B] text-[16px] font-light max-w-[480px]">
                  Electric vehicles are easy, more convenient, and safer to
                  drive. They are far more efficient, and the drivetrain is more
                  effective to accommodate low losses, greater performance, and
                  more responsiveness. The future of driving lies with electric
                  vehicles because it makes the implementation of modern
                  technologies such as AI, and machine learning extremely easy
                  on the vehicle.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* News Section */}
      <section className="pt-[clamp(50px,5vw,80px)] pl-[clamp(30px,3.2vw,50px)] pb-[clamp(30px,3.2vw,50px)] bg-[#1A1A1A]" id="news">
        <div className="flex justify-between gap-[20px] flex-wrap items-center mr-[40px]">
          <p className="text-[#FFFFFB] font-medium text-[clamp(30px,3.2vw,50px)]">
            Our Stories
          </p>
          <div className="flex gap-[30px] items-center">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              <Image src={"/images/left.png"} alt={""} width={30} height={30} />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex >= maxIndex}
              className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              <Image
                src={"/images/right.png"}
                alt={""}
                width={40}
                height={40}
              />
            </button>
          </div>
        </div>
        <div className="overflow-hidden mt-[20px]">
          <div
            className="flex space-x-4"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: "transform 0.5s ease",
              width: `${cardData.length * (CARD_WIDTH + CARD_GAP)}px`,
            }}
          >
            {cardData.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                description={card.description}
                img={card.img}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Contact Us Section */}
      <section className="bg-[#F3F8E9] px-4 md:px-[50px] py-6 md:py-[30px] flex flex-col md:flex-row flex-wrap justify-center items-start gap-6 md:gap-[30px]" id="contact">
        <article className="bg-[#FFFFFF] rounded-[10px] p-[35px] ">
          <p className="text-[#0B0C0E] text-[clamp(40px,4vw,60px)] font-medium">
            CONTACT US
          </p>
          <p className="text-[14px] font-normal text-[#0F0B0B] max-w-[520px] pb-[20px]">
            We accept bulk orders for custom electric vehicles tailored for
            delivery companies and organizations for intra-facility transport.
          </p>
          <form className="flex flex-col gap-[20px]">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your message..."
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-[#1C290F] flex justify-center w-full p-[15px] text-[#FFFFFF] font-semibold text-[16px]">
              Submit
            </button>
          </form>
        </article>
        <Image
          src={"/images/contact.jpg"}
          alt={""}
          width={400}
          height={400}
          className="hidden md:block"
        />
      </section>
      <footer className="flex flex-wrap gap-[40px] justify-between px-[40px] py-[25px] bg-[#2E420D] items-center">
        <article className="flex flex-col gap-[20px]">
          <Image src={"/images/revive.png"} width={60} height={60} alt={""} className="w-[140px] h-auto" />
          <div className="max-w-[378px] text-[#FFFFFF] text-[16px] font-light">
            We retrofit existing gasoline tricycles/minibuses with the electric
            drivetrain. We also assemble/manufacture new, cheap and functional
            electric vehicles, and operate a convenient battery charge/swap
            network.
          </div>
        </article>
        <div className="flex gap-[30px] flex-wrap">
          <div className="flex flex-col text-[#FFFFFB] font-normal text-[18px] gap-[10px]">
            <p className="font-medium">Links</p>
            <p>Home</p>
            <p>Why Us</p>
            <p>Features</p>
          </div>
          <div className="flex flex-col text-[#FFFFFB] font-normal text-[18px] gap-[10px]">
            <p className="font-medium">Company</p>
            <p>Our Team</p>
            <p>Our Stories</p>
            <p>Contact Us</p>
          </div>
        </div>
        <section className="flex flex-col gap-[20px]">
          <div className="p-[10px] rounded-full bg-[#FFFFFF] w-fit self-end">
          <Image src={"/images/arrow.png"} width={50} height={50} alt={""} className="w-auto h-[30px]" />
          </div>
          <p className="font-medium text-[#FFFFFB] text-[20px]">Subscribe to our newsletter</p>
          <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border-b-[2px] text-[#FFFFFB] text-[20px] pb-[10px] border-b-[#FFFFFB] rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder:text-[#FFFFFB]"
            />
            <p className="text-[#FFFFFF] text-[16px] font-normal">Follow RE On Social Media Or just get in touch:</p>
            <div className="flex flex-wrap gap-[15px] justify-center">
              <Image src={"/images/call.png"} alt={""} width={40} height={40} />
              <Image src={"/images/insta.png"} alt={""} width={40} height={40} />
              <Image src={"/images/linkedin.png"} alt={""} width={40} height={40} />
              <Image src={"/images/message.png"} alt={""} width={40} height={40} />
              <Image src={"/images/whatsapp.png"} alt={""} width={40} height={40} />
              <Image src={"/images/youtube.png"} alt={""} width={40} height={40} />
              <Image src={"/images/facebook.png"} alt={""} width={40} height={40} />
              <Image src={"/images/twitter.png"} alt={""} width={40} height={40} />
            </div>
        </section>
      </footer>
    </main>
  );
}
