import {
  ChevronRight,
  Facebook,
  Instagram,
  Search,
  Twitter,
  Youtube,
} from "lucide-react";
import image from "../assets/images/tata-motors-logo.png";

export default function Footer() {
  return (
    <div className="flex flex-col text-white">
      <div className="flex border-t border-b border-white text-white h-14">
        {/* Blue Arrow Section */}
        <div className="flex items-center justify-center bg-blue-600 px-6 font-bold relative">
          KEEP EXPLORING
          {/* Arrow shape */}
          <div className="absolute right-[-20px] w-0 h-0 border-t-[28px] border-t-transparent border-l-[20px] border-l-blue-600 border-b-[28px] border-b-transparent"></div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-1 bg-black">
          <div className="flex-1 flex items-center justify-center gap-2">
            <span>All Vehicles</span>
            <ChevronRight size={16} />
          </div>
          <div className="flex-1 flex items-center justify-center gap-2">
            <span>Profit Calculator</span>
            <ChevronRight size={16} />
          </div>
          <div className="flex-1 flex items-center justify-center gap-2">
            <span>Contact</span>
            <ChevronRight size={16} />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-center  gap-8 p-6 text-white">
          <h1 className="text-4xl font-semibold mb-4">
            Are you looking for something particular?
          </h1>
        </div>
        <div className="flex w-full  border-b-1 pb-8 border-gray-50 rounded-lg overflow-hidden">
          <div className="w-4/5 mx-auto flex justify-between items-center overflow-x-auto border">
            <input
              type="text"
              placeholder="Search"
              className="w-4/5 bg-transparent px-4 py-2 text-white placeholder-gray-400 outline-none"
            />
            <button className=" flex justify-center items-center px-3 py-2 hover:bg-blue-600 transition">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full text-xl ">
        <div className="w-4/5 mx-auto flex justify-between items-center overflow-x-auto border-b-1 border-white">
          <div className="pt-10 pb-10">
            <h5 className="text-lg font-semibold mb-3">Mini Trucks</h5>
            <ul className="flex flex-wrap gap-4 text-gray-300">
              <li>ACE Pro Ev</li>
              <li>ACE Pro Petrol</li>
              <li>ACE Pro Bi-Fuel</li>
              <li>Tata ACE Gold Petrol</li>
              <li>Tata ACE Gold CNG</li>
              <li>Tata ACE Gold CNG Plus</li>
              <li>ACE CNG 2.0</li>
              <li>Tata ACE Gold Diesel</li>
              <li>Tata ACE Ev 1000</li>
              <li>Tata ACE Pro HT+</li>
              <li>Tata ACE Diesel</li>
            </ul>
          </div>
        </div>

        <div className="w-4/5 mx-auto flex justify-between items-center overflow-x-auto border-b-1 border-white">
          <div className="pt-10 pb-10">
            <h5 className="text-lg font-semibold mb-3">Tata Pickups</h5>
            <ul className="flex flex-wrap gap-4 text-gray-300">
              <li>Tata Intra V70</li>
              <li>Tata Intra V50 Gold</li>
              <li>Tata Intra V30 Gold</li>
              <li>Tata Inra V20 Gold</li>
              <li>Tata Intra V20</li>
              <li>Tata Intra V10</li>
              <li>Yodha 2.0</li>
              <li>Yodha 1700/1200</li>
              <li>Yodha Crew Cabin</li>
              <li>Yodha EX</li>
              <li>Winger Cargo</li>
            </ul>
          </div>
        </div>

        <div className="w-4/5 mx-auto flex justify-between items-center overflow-x-auto border-b-1 border-white">
          <div className="pt-10 pb-10">
            <h5 className="text-lg font-semibold mb-3">Quick Links</h5>
            <ul className="flex flex-wrap gap-4 text-gray-300">
              <li>TATA ACE</li>
              <li>Tata Inra</li>
              <li>Tata Yodha </li>
              <li>Tata Pickup</li>
              <li>Tata EV</li>
              <li>EV Charging Stations</li>
              <li>Resources</li>
              <li>Contact</li>
              <li>Dealer Locator</li>
              <li>Profile Calculator</li>
            </ul>
          </div>
        </div>

        <div className="w-4/5 mx-auto flex justify-between items-center overflow-x-auto border-b-1 border-white">
          <div className="pt-10 pb-10">
            <h5 className="text-lg font-semibold mb-3">Commercial Vehicles</h5>
            <ul className="flex flex-wrap gap-4 text-gray-300">
              <li>CV</li>
              <li>Trucks</li>
              <li>Buses And Vans</li>
              <li>Fleet Edge</li>
              <li>Tata OK</li>
              <li>REWIRE</li>
            </ul>
          </div>
        </div>

        <div className="w-4/5 mx-auto flex justify-between items-center overflow-x-auto border-b-1 border-white">
          <div className="pt-10 pb-10">
            <h5 className="text-lg font-semibold mb-3">Service</h5>
            <ul className="flex flex-wrap gap-4 text-gray-300">
              <li>Fleetcare</li>
              <li>Tata Alert</li>
              <li>Tata Zippy</li>
              <li>Tata Kavach</li>
              <li>Tata Motors Genuine Oil</li>
              <li>Sampoorna Seva 2.0</li>
            </ul>
          </div>
        </div>

        <div className="w-4/5 mx-auto flex justify-between items-center overflow-x-auto border-b-1 border-white">
          <div className="pt-10 pb-10">
            <h5 className="text-lg font-semibold mb-3">Spares</h5>
            <ul className="flex flex-wrap gap-4 text-gray-300">
              <li>Tata Genuine Parts</li>
              <li>Tata E-Dukaan</li>
              <li>TATA Profile </li>
              <li>TATA Durafit Parts</li>
            </ul>
          </div>
        </div>

        <div className="w-4/5 mx-auto flex justify-between items-center overflow-x-auto border-b-1 border-white">
          <div className="pt-10 pb-10">
            <h5 className="text-lg font-semibold mb-3">Aggregates</h5>
            <ul className="flex flex-wrap gap-4 text-gray-300">
              <li>TATA Indusrial Engine</li>
              <li>TATA Motors Axle & Trailer Components </li>
              <li>TATA Motors Gensets</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex flex-col justify-center border-b border-white md:flex-row gap-8 p-6 text-white">
          <div className="flex flex-col gap-4 w-full md:w-4/5 mx-auto">
            <div>
              <h1 className="text-4xl font-semibold">
                Are you looking for something particular?
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-900 text-white py-10 ">
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 gap-8">
          <div className="flex items-center justify-center">
            <img src={image} alt="Tata Motors" />
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-2">Get In Touch</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto md:mx-0 mb-3"></div>
            <div className=" flex flex-row gap-4">
              <Facebook />
              <Instagram />
              <Twitter />
              <Youtube />
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 text-gray-400 text-sm">
          <div>© 2025 Tata Motors Limited. All rights reserved.</div>
          <div className="mt-2 md:mt-0 hover:text-white cursor-pointer">
            Privacy Policy
          </div>
        </div>
      </div>
    </div>
  );
}
