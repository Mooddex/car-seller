import Image from "next/image";
import logo from "@/assets/Logo.svg";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="w-full py-4 shadow-sm bg-white">
      <div className="grid grid-cols-3 items-center m-2.5 mx-auto">

        {/* Logo */}
        <div className="flex items-center pl-14">
          <Image
            width={120}
            height={120}
            alt="logo"
            src={logo}
            className="cursor-pointer"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center">
          <ul className="flex gap-8 text-black font-medium">
            <li className="cursor-pointer hover:text-orange-500 transition">Home</li>
            <li className="cursor-pointer hover:text-orange-500 transition">About</li>
            <li className="cursor-pointer hover:text-orange-500 transition">Card</li>
            <li className="cursor-pointer hover:text-orange-500 transition">Services</li>
          </ul>
        </div>

        {/* Action Button */}
        <div className="flex justify-end pr-13">
          <Button Sentence={"Order Now"} Style="" />
        </div>
      </div>
    </nav>
  );
}
