import Image from "next/image";
import logoFooter from "@/assets/Logofooter.svg";
import Button from "./Button";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="flex flex-col md:mx-12">

        {/* TOP SECTION */}
        <div className="p-12 flex flex-col md:flex-row justify-between gap-10">

          {/* Logo */}
          <div>
            <Image src={logoFooter} alt="logo" />
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

            <div>
              <h2 className="font-semibold mb-3">Mobile app</h2>
              <ul className="space-y-2 text-gray-300">
                <li>Features</li>
                <li>Live Share</li>
                <li>Video Record</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold mb-3">Community</h2>
              <ul className="space-y-2 text-gray-300">
                <li>Features</li>
                <li>Live Share</li>
                <li>Video Record</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold mb-3">Company</h2>
              <ul className="space-y-2 text-gray-300">
                <li>About us</li>
                <li>Contact us</li>
                <li>History</li>
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4">
              <Button Sentence="Register" />
              <Button
                Sentence="Log in"
                Style="bg-white text-orange-500 rounded-lg"
              />
            </div>

          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="border-t border-orange-600 flex flex-col md:flex-row justify-between items-center px-9 py-6">

          <h2 className="text-gray-300">@2025 By Mahmoud Salama</h2>

          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <h2 className="text-xl font-light mr-4">Follow us</h2>

            {/* SOCIAL ICONS */}
            {[
              <Linkedin />,
              <Instagram />,
              <Facebook />,
              <Twitter />,
            ].map((Icon, i) => (
              <button
                key={i}
                className="border border-orange-500 bg-orange-600 p-3 rounded-full"
              >
                {Icon}
              </button>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
