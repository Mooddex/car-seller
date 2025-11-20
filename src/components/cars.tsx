import Image from "next/image";
import car1Img from "@/assets/Rectangle 28.png";
import leftImg from "@/assets/leftImg.png"
import car4Img from "@/assets/Rectangle 250.png";
import car5Img from "@/assets/Rectangle 29.png";
import car6Img from "@/assets/Rectangle 30.png";
import car7Img from "@/assets/Rectangle 27.png";


export default function Cars() {
  return (
    <section className=" my-12 p-6 space-y-10">
      {/* first section */}
      <div className="bg-[#F6F6F6] grid grid-cols-2 gap-5">
        {/* 1st division */}
        <div className="">
          <Image src={car7Img} alt="Car Image" />
          <h1 className="my-6 font-bold">sed wa mu</h1>
          <span className="mb-12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            eveniet reprehenderit id commodi officia des quos.
          </span> <br />
          <button className="bg-orange-500 text-white m-14 p-3 ">
            Learn More
          </button>
        </div>
        {/* 2nd division */}
        <div className="">
          <Image src={car1Img} alt="Car Image" />
          <h1 className="my-6 font-bold">sed wa mu</h1>
          <span className="mb-12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            eveniet reprehenderit id commodi officia des quos.
          </span> <br />
          <button className="bg-orange-500 text-white m-14 p-3 ">
            Learn More
          </button>
        </div>
      </div>
      {/* 2nd section*/}
      <div className="bg-[#F6F6F6] grid grid-cols-2 p-6 gap-8">
      <Image src={leftImg} alt="Car Image" />
      <div className="m-12">
        <h1 className="text-orange-400 text-3xl mb-3 ">
          sb inu parae monol
        </h1>
        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum vel velit modi harum quae nisi itaque.
        </span>
        <p className="my-12">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi officiis laboriosam sed reiciendis qui ducimus necessitatibus sint voluptatibus neque fugiat, atque quis sunt! Harum, quia animi ipsam quam voluptates reprehenderit.</p>
      </div>
      </div>
      {/* third division */}
      <div className="bg-[#F6F6F6] grid grid-cols-2 p-6 gap-8">
        <div className="m-12">
        <h1 className="text-orange-400 text-3xl mb-3 ">
          sb inu parae monol
        </h1>
        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum vel velit modi harum quae nisi itaque.
        </span>
        <p className="my-12">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi officiis laboriosam sed reiciendis qui ducimus necessitatibus sint voluptatibus neque fugiat, atque quis sunt! Harum, quia animi ipsam quam voluptates reprehenderit.</p>
      </div>
      <Image src={car4Img} alt="Car Image" />
      <Image src={car5Img} alt="Car Image" />
      <Image src={car6Img} alt="Car Image" />
      </div>
    </section>
  );
}
