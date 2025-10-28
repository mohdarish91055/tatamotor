import React from "react";
import { FileText } from "lucide-react";
import i1 from "../assets/cart/1.png";
import i2 from "../assets/cart/2.png";
import i3 from "../assets/cart/3.png";
import i4 from "../assets/cart/4.png";

const images = [i1, i2, i3, i4];

const Cart = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-gray-950">
      {images.map((i, index) => (
        <div
          key={index}
          className="bg-black text-white  overflow-hidden shadow-lg"
        >
          {/* Top Image */}
          <div className="relative bg-gray-900">
            <img src={i} alt="Vehicle" className="w-full h-48 object-cover" />
          </div>

          {/* Name */}
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-xl font-semibold">Ace Pro Bi-fuel</h2>
          </div>

          {/* Horizontal List */}
          <div className="flex justify-between text-center py-4 px-4">
            <div>
              <p className="text-lg font-semibold">1535 kg</p>
              <p className="text-xs text-gray-400">GVW</p>
            </div>
            <div>
              <p className="text-lg font-semibold">CNG : 45 Litres</p>
              <p className="text-xs text-gray-400">Fuel Tank</p>
            </div>
            <div>
              <p className="text-lg font-semibold">694cc</p>
              <p className="text-xs text-gray-400">Engine</p>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="flex items-center justify-between px-4 pb-4">
            <button className="bg-[#3080e2] w-full py-2 rounded-lg font-medium ">
              Know More
            </button>
            <button className="ml-3 bg-[#3080e2] p-3 rounded-full ">
              <FileText size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
