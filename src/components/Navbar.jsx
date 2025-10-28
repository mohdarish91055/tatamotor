import "../components/styles/Navbar.css";
import { Search } from "lucide-react";
import first from "../assets/images/first.png";
import tata from "../assets/images/tata-motors-logo.png";
import tata_one from "../assets/images/tata_one.png";
import { ChevronRight } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full text-white font-sans">
      <div className="flex justify-center items-center bg-[#3080e2] py-1 px-0 gap-4">
        <img src={first} alt="truck" className="mr-2" />
        <a href="#" className="font-medium hover:underline flex items-center">
          New Launch: Tata Ace Pro{" "}
          <span className="ml-1">
            <ChevronRight />
          </span>
        </a>
      </div>

      <div className="container w-4/5 mx-auto ">
        <div className="mx-auto">
          <div className="w-full px-56 pr-0  overflow-x-auto">
            <ul className="flex flex-row flex-nowrap items-center text-sm gap-6 whitespace-nowrap">
              <li>EV Charging Station</li>
              <li>Local Service Network</li>
              <li>Dealer Locator</li>
              <li>1800&nbsp;209&nbsp;7979</li>
              <li>
                <button className="bg-white text-black px-4 py-2 border border-gray-300">
                  Book Now
                </button>
              </li>
              <li>
                <button className="bg-white text-black px-4 py-2 border border-gray-300">
                  Find Your Truck
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between ">
          <div className="flex align-center ">
            <a href="#">
              <img src={tata} />
            </a>
            <div className="ml-3">SMALL COMMERCIAL</div>
          </div>
          <a href="#">
            <img src={tata_one} />
          </a>
        </div>
      </div>

      <nav className="w-full bg-[#212529]">
        <div className="w-4/5 mx-auto flex justify-between items-center overflow-x-auto">
          {/* Left Menu */}
          <ul className="flex flex-row flex-nowrap items-center gap-6 whitespace-nowrap">
            <li>Tata ACE</li>
            <li>Tata Intra</li>
            <li>Tata Yodha</li>
            <li>Tata Pickup</li>
            <li>EV</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>

          {/* Right Buttons */}
          <div className="flex flex-row  flex-nowrap">
            <button className="flex items-center gap-2 px-4  bg-[#252229]">
              Search <Search />
            </button>
            <button className="flex items-center gap-2 px-4  bg-[#307FE2]">
              Better Always <ChevronRight />
            </button>
            <button className="flex items-center gap-2 px-5 py-1 bg-white  text-[#307FE2]">
              Ace Pro Launch <ChevronRight />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
