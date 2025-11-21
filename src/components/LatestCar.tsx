import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import leftImg from "@/assets/leftImg.png";
import rightImg from "@/assets/rightImg.png";
import middelleImg from "@/assets/middeleImg.png";

export default function LatestCar() {
  return (
    <section className="bg-gray-100">
      <div className="flex flex-col mx-3 ">
        <div className="m-9">
          <h1 className="text-black font-bold text-5xl mb-6">
            OUR LATEST CARS
          </h1>
          <span className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            fugit omni Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio expedita au.
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
          <div className="relative m-3 overflow-hidden rounded-lg">
            <Image
              src={leftImg}
              alt="Car Image"
              className="object-cover w-full h-full"
            />

            {/* TEXT OVERLAY */}
            <div className="absolute top-0 left-0 w-full p-4 bg-black/50 text-white">
              <h1 className="font-bold text-xl">Luxurious Automobile</h1>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                sunt.
              </p>
            </div>
          </div>

          <div className="relative m-3 overflow-hidden rounded-lg">
            <Image
              src={middelleImg}
              alt="Car Image"
              className="object-cover w-full h-full"
            />
            {/* TEXT OVERLAY */}
            <div className="absolute top-0 left-0 w-full p-4 bg-black/50 text-white">
              <h1 className="font-bold text-xl">Luxurious Automobile</h1>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                sunt.
              </p>
            </div>
          </div>
          <div className="m-3 relative rounded-lg overflow-hidden">
            <Image
              src={rightImg}
              alt="Car Image"
              className="object-cover w-full h-full"
            />
            <div className="absolute top-0 left-0 w-full p-4 bg-black/50 text-white">
              <h1 className="font-bold text-xl">Luxurious Automobile</h1>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                sunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
