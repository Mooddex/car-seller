import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import leftImg from "@/assets/leftImg.png";
import rightImg from "@/assets/rightImg.png";
import middelleImg from "@/assets/middeleImg.png";

export default function LatestCar() {
  return (
    <section className="bg-gray-100">
      <div className="flex flex-col mx-3">
        <div className="m-9">
          <h1 className="text-black font-bold text-5xl mb-6">OUR LATEST CARS</h1>
          <span className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            fugit omni Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio expedita au.
          </span>
        </div>
        <div className="flex justify-end mx-6">
          <button className="border text-orange-400 p-3 mr-3.5">
            <MoveLeft />
          </button>
          <button className="border p-3 bg-orange-400 text-white">
            <MoveRight />
          </button>
        </div>

        <div className="grid grid-cols-3 p-3 m-3 ">

          <div className="relative m-3 ">
            <Image src={leftImg} alt="Car Image" className="object-cover" />
            <div className="absolute inset-0 z-10 text-white bg-black/5 ">
            <h1>Luxgrious Auto Mobile </h1>
            <span className="text-white my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sunt.</span>
            </div>
          </div>
          <div className="m-3">
            <Image src={middelleImg} alt="Car Image" />
          </div>
          <div className="m-3">
            <Image src={rightImg} alt="Car Image" />
          </div>
        </div>
      </div>
    </section>
  );
}
