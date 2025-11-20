import Image from "next/image";
import ProfessionalServicesImg from "@/assets/ProfessionalServicesImg.png";

export default function ProfessionalServices() {
  return (
    <section className="relative w-full h-screen ">
        <Image
    src={ProfessionalServicesImg}
    alt="Background Image Of a Car"
    fill
    className="object-cover"
    priority
  />
      <div className='absolute inset-0 z-10 flex items-end ml-12 my-21 ' >
        <h1 className="text-6xl text-white font-bold ">
          WE ARE PROVIDE PROFESSIONAL <br /> <span className="text-orange-500">CAR SERVICES</span>
        </h1>
      </div>
    </section>
  );
}
