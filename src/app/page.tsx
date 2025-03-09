import Image from "next/image";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ValuePoints from "@/components/ValuePoints";
import Header from "@/components/Header";
import Placement from "@/components/Placement";
import Alert from "@/components/Alert";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Stats />
      <ValuePoints />
      <Alert />
      <Placement />
    </div>
  );
}
