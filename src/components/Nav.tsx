import Image from "next/image";
import logo from "@/assets/Logo.svg";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="w-full p-4">
      <div className="mx-3 grid grid-cols-1 sm:grid-cols-3 items-center gap-3">

        {/* Logo */}
        <div className="flex justify-center sm:justify-start">
          <Image
            width={120}
            height={120}
            alt="logo"
            src={logo}
            className="cursor-pointer"
          />
        </div>

        {/* Navigation Button */}
        <div className="flex justify-center">
          <ul className="flex gap-8 text-black font-medium">
            {["Home", "About", "Card", "Services"].map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-orange-500 transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <div className="flex justify-center sm:justify-end">
          <Button Sentence="Order Now" />
        </div>
      </div>
    </nav>
  );
}
