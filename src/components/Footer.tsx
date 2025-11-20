import Image from "next/image";
import logoFooter from "@/assets/Logofooter.svg";
import Button from "./Button";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="flex flex-col">
        <div className="bg-black p-12 text-white flex justify-between">
          <div>
            <Image src={logoFooter} alt="logo" />
          </div>
          <div className="grid grid-cols-4 ">
            <div>
              <h2>Mobile app</h2>
              <ul>
                <li>Features</li>
                <li>Live Share</li>
                <li>Video Record</li>
              </ul>
            </div>
            <div>
              <h2>Community</h2>
              <ul>
                <li>Features</li>
                <li>Live Share</li>
                <li>Video Record</li>
              </ul>
            </div>
            <div>
              <h2>Company</h2>
              <ul>
                <li>About us</li>
                <li>Contact us</li>
                <li>history</li>
              </ul>
            </div>
            <div className="flex flex-col gap-5 ml-6 ">
              <Button Sentence="Register" />
              <Button Sentence="Log in" Style="bg-white text-orange-500 " />
            </div>
          </div>
        </div>
        {/* under line */}
        <div className=" border-t border-orange-600 flex justify-between m-4 p-9 text-white">
            <h2 className="text-white">@2025 By Mahmoud Salama</h2>
        <div className="flex gap-3 text-3xl items-center">
            <h2 className=" mr-6 text-2xl font-light">Follow us</h2>
            <button className="border border-orange-500 bg-orange-600 p-3 rounded-3xl">
                <Linkedin  />
            </button>
            <button className="border border-orange-500 bg-orange-600 p-3 rounded-3xl">
                <Instagram />
            </button>
            <button className="border border-orange-500 bg-orange-600 p-3 rounded-3xl">
                <Facebook />
            </button>
            <button className="border border-orange-500 bg-orange-600 p-3 rounded-3xl">
            <Twitter />
            </button>
            
            
            

        </div>
        </div>
      </div>
    </footer>
  );
}
