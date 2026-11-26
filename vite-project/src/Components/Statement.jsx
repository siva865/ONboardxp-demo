
import { IMG } from "../data/Content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Statement() {
  return (
    <section className="relative flex min-h-[650px] w-full items-center overflow-hidden bg-[#080808] px-5 py-24 text-white sm:min-h-[750px] sm:px-10 sm:py-28 lg:min-h-[850px] lg:px-16 lg:py-32">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${IMG.material})`,
        }}
      />

      {/* BACKGROUND OVERLAY */}
      <div className="absolute inset-0 bg-black/65" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px]">

        <div className="max-w-4xl">

          <SectionLabel number="03">
            OUR BELIEF
          </SectionLabel>

          <Reveal>
            <h2 className="mt-8 text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px]">
              Premium is not
              <br />

              what you add.
              <br />

              <em className="font-light text-[#c5a46d]">
                It’s what you
                <br />
                never compromise.
              </em>
            </h2>
          </Reveal>

          <p className="mt-8 max-w-xl text-sm leading-7 text-white/65 sm:mt-10 sm:text-base sm:leading-8">
            In the materials. In the function. In the feeling.
            <br className="hidden sm:block" />
            Every detail says something about the brand behind it.
          </p>

        </div>
      </div>

      {/* BOTTOM INDEX */}
      <span className="absolute bottom-7 right-5 z-10 text-[8px] font-medium tracking-[0.2em] text-white/50 sm:bottom-10 sm:right-10 sm:text-[10px] lg:right-16">
        THE ONBOARD XP POINT OF VIEW
      </span>

    </section>
  );
}
