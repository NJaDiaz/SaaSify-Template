import { FAQ } from "@/components/sections/Faq";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";

export default function Home() {
  return (
    <>
    <Hero />
    <Features />
    <Pricing />
    <FAQ />
    </>
  );
}