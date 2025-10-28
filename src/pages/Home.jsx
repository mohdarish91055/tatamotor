import React from "react";
import { ChevronRight, FileText } from "lucide-react";
import Carousel from "../components/Carousel";
import FAQ from "../components/FAQ";
import faq from "../assets/images/faq.jpeg";
import Cart from "../components/Cart";

export default function Home() {
  return (
    <div className="w-full border">
      <div className="w-4/5 mx-auto flex justify-between items-center overflow-x-auto">
        <p className="flex text-white">
          Home <ChevronRight />
        </p>
      </div>
      <div className="w-4/5 mx-auto flex flex-col md:flex-row gap-8 mt-8 items-stretch">
        <div className="w-1/2 bg-[#252229]">
          <Carousel />
        </div>
        <div className="w-1/2 p-0 border h-full">
          <h1 className="text-4xl font-semibold text-white mb-8">
            Ace Gold Plus
          </h1>
          <p className="text-white mb-12">
            Ace Gold Plus is designed to deliver maximum profit to its customers
            as it operates on Lean NoX Trap technology enabling it to eliminate
            the need for usage of Diesel Exhaust Fluid (DEF) which also
            facilitates in hassle free driving and Greater Peace of Mind for its
            customers. It comes with a turbocharged 2 cylinder 702 CC engine
            delivering 16.17 kW (22HP) max power & max torque of 55 Nm.
          </p>

          <div className="flex text-white  overflow-hidden w-fit mb-8">
            <div className="px-4 py-2 border-r">
              <p>1815 Kg</p>
              <p>GVM</p>
            </div>
            <div className="px-4 py-2 border-r">
              <p>30L</p>
              <p>Fuel Tank</p>
              <p>Capacity</p>
            </div>
            <div className="px-4 py-2">
              <p>702 cc</p>
              <p>Engine</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="bg-[#3080e2] text-white px-4 py-2 rounded ">
              Enquire Now
            </button>
            <button className="border border-[#3080e2] text-white px-4 py-2 rounded ">
              Book Now
            </button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded-full ">
              <FileText size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="text-xl text-white flex flex-row justify-center gap-10 mt-32 pb-2   border-b-2 border-t-white ">
        <div>
          <h2>Overview</h2>
        </div>
        <div>
          <h3>Specifications</h3>
        </div>
        <div>
          <h3>Gallery</h3>
        </div>
      </div>

      <div className="flex flex-col text-white w-4/5 mx-auto flex justify-between items-center overflow-x-auto mt-16 ">
        <div className="">
          <h1 className="text-3xl">
            Earn More with Better Mileage and Better Pickup
          </h1>
        </div>
        <div className="flex flex-row gap-10">
          <div className="flex-1">
            <FAQ />
          </div>
          <div className="flex-1  mt-12 flex justify-center items-center">
            <img src={faq} alt="FAQ" className="h-80 object-contain" />
          </div>
        </div>
        <div className="mt-36">
          <div className="flex flex-row gap-28 text-white text-2xl font-semibold">
            <div>COMPARE VEHICLE</div>
            <div>PROFIT CALCULATOR</div>
            <div>EMI CALCULATOR</div>
          </div>
        </div>

        <div className="mt-36 text-2xl">APPLICATION</div>
        <div className="mt-36 text-2xl">Related Vehicles</div>
        <div className="">
          <Cart />
        </div>
        <div>
          <button className="bg-[#3080e2] text-white px-4 py-2 rounded ">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}
