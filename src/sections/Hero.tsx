import { starsBgImg } from "@/assets";
import GradientBtn from "@/components/GradientBtn";

const Hero = () => {
  return (
    <section
      className="h-[492px] md:h-[800px] flex items-center relative overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{ backgroundImage: `url(${starsBgImg.src})` }}
    >
      {/* overlay purple background effect */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div> */}

      {/* overlay planet graphic */}
      <div className="absolute h-64 w-64 md:h-96 md:w-96 rounded-full bg-purple-500 border border-white/20 top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 inset-0 -z-[1] bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>

      {/* ring of satellites */}
      <div className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <div className="absolute h-2 w-2 top-1/2 left-0 rounded-full bg-white -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 top-0 left-1/2 rounded-full bg-white -translate-x-1/2 -translate-y-1/2"></div>

        <div className="absolute h-5 w-5 top-1/2 left-full rounded-full border border-white -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </div>

      {/* dotted ring  */}
      <div className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px]  border rounded-full top-1/2 border-white/20 border-dotted left-1/2 -translate-y-1/2 -translate-x-1/2"></div>

      {/* outer ring big */}
      <div className="absolute h-[544px] opacity-20 w-[544px] md:h-[980px] md:w-[980px]  border rounded-full top-1/2 border-white left-1/2 -translate-y-1/2 -translate-x-1/2">
        <div className="absolute h-2 w-2 top-1/2 left-0 rounded-full bg-white -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 top-1/2 left-full rounded-full bg-white -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container flex justify-center flex-col items-center gap-5 text-center mt-16 z-10">
        <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
          AI SEO
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto">
          Elevate your site&apos;s visibility with AI, where smart technology
          meets user-friendly SEO tools.
        </p>
        <GradientBtn>Join Waitlist</GradientBtn>
      </div>
    </section>
  );
};

export default Hero;
