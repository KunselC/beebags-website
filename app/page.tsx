import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { Product } from "@/components/sections/Product";
import { Craft } from "@/components/sections/Craft";
import { Gallery } from "@/components/sections/Gallery";
import { Proof } from "@/components/sections/Proof";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Story />
      <Product />
      <Craft />
      <Gallery />
      <Proof />
      <Contact />
    </main>
  );
}
