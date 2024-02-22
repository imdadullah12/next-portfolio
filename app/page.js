import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NavbarItem from "./components/NavbarItem";
import Quotes from "./components/Quotes";
import Video from "./components/Video";
import Information from "./components/Information";

export default function Home() {
  return (
    <div className="parent min-h-screen items-start flex justify-between">
      <div className="w-full">
        <Navbar />
        <Hero />
        <NavbarItem />
        <Quotes />
        <Video />
        <Information />
      </div>
      <div className="w-[120px] z-50 py-8 bg-white text-black flex items-center gap-3 text-5xl font-bold text-nowrap" style={{ writingMode: 'vertical-rl' }}
      >
        <h1>DEVELOPER</h1>
        <h1>WEB DESIGNER</h1>
        <h1>SOFTWARE DEVELOPER</h1>
        <h1>FREELANCHER</h1>
        <h1>DEVELOPER</h1>
        <h1>WEB DESIGNER</h1>
        <h1>SOFTWARE DEVELOPER</h1>
        <h1>FREELANCHER</h1>
        <h1>DEVELOPER</h1>
        <h1>WEB DESIGNER</h1>
        <h1>SOFTWARE DEVELOPER</h1>
        <h1>FREELANCHER</h1>
      </div>
    </div>
  );
}
