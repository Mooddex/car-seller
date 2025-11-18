import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
    </div>
  );
}
