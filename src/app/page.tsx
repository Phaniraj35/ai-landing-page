import { Features, Header, Hero, LogoTicker, Testimonials } from "@/sections";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
    </div>
  );
}
