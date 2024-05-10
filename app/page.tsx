import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Inter } from "next/font/google";
import PrivacyPolicyPage from "./privacy_policy/page";
import GPDRpage from "./GPDR/page";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      {/*<Features />*/}

      <AboutSectionOne />
      {/*<PrivacyPolicyPage /> */}
      {/*<GPDRpage/>*/}
      <Services />
      <Blog />
      <Contact />
    </>
  );
}
