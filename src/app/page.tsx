import AboutUs from "@/components/AboutUs";
import Cars from "@/components/cars";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import LatestCar from "@/components/LatestCar";
import Navbar from "@/components/Nav";
import ProfessionalServices from "@/components/ProfessionalServices";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <ProfessionalServices />
      <LatestCar />
      <Cars />
      <Footer />
    </div>
  );
}
