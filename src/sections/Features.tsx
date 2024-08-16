"use client";
import { productImg } from "@/assets";
import { DotLottiePlayer } from "@dotlottie/react-player";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const Features = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl tracking-tighter font-medium text-center">
          Elevate your SEO efforts.
        </h2>
        <p className="text-white/70 tracking-tight text-lg md:text-xl max-w-2xl mx-auto text-center mt-5">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>

        <div className="mt-10 flex flex-col gap-3 lg:flex-row">
          {tabs.map((tab) => {
            return (
              <div
                key={tab.title}
                className="border border-white/15 p-2.5 rounded-xl gap-2.5 flex items-center lg:flex-1"
              >
                <div className="border border-white/15 rounded-lg flex items-center justify-center h-12 w-12">
                  <DotLottiePlayer
                    src={tab.icon}
                    className="h-5 w-5"
                    autoplay
                  />
                </div>
                <div className="font-medium">{tab.title}</div>
                {tab.isNew && (
                  <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] font-semibold text-black">
                    new
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{ backgroundImage: `url(${productImg.src})` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
