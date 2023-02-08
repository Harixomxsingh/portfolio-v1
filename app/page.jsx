import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import HeroSection from "@/components/heroSection/HeroSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main id="/" className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
    </main>
  );
}
