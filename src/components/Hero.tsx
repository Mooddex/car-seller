import Button from "./Button";
import Image from "next/image";
import bgImage from "@/assets/Section2bg.png";

export default function HeroSection() {
  return (
    <section className="relative w-full h-100vh  flex items-center p-35">
      {/* Background Image */}
      <Image
        alt="Car"
        src={bgImage}
        fill
        className="object-cover"
      />

      
      {/* Content */}
      <div className="relative w-50%   text-white ">
        <h1 className="text-4xl font-bold  ">
          Purchase Your <br />
          <span className="text-orange-500">Perfect</span> Car
        </h1>

        <div className="mt-6 py-2">
          <h3 className="text-3xl text-white font-bold">
            Over 1000+ New Cars Available Here
          </h3>

          <p className="text-white font-bold max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolorem necessitatibus labo
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <Button Sentence="Explore More"  />
          <Button Sentence="See Cars" Style="bg-transparent border-orange-500 border-2 " />
        </div>
      </div>
    </section>
  );
}
