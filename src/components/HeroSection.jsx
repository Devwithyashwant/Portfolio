import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import TechText from "./TechText";
import VariableProximity from "./VariableProximity";

export const HeroSection = () => {
  const proximityContainerRef = useRef(null);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-12"
    >
      <div className="container max-w-5xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Interactive TechText Canvas for Hi, I'm Yashwant K */}
        <div className="w-full h-[150px] sm:h-[220px] md:h-[280px] lg:h-[320px] relative max-w-4xl mx-auto my-2">
          <TechText
            text="Hi, I'm Yashwant K"
            fontWeight={700}
            fontSize={120}
            reveal="letter"
            dashLength={4}
            dashGap={2}
            specks={15}
            intro="none"
            introDuration={2}
            clickKick
            guides={false}
            fontFamily=""
            letterSpacing={-0.03}
            accentColor="#3b82f6"
            reach={200}
            softness={0.7}
            lineStyle="dashed"
            strokeWidth={1.5}
            speed={1}
            bounce={0.4}
            selection
            labels
            color="currentColor"
            align="center"
            draggable
            sweep
          />
        </div>

        <div className="space-y-6 mt-2 w-full">
          {/* Interactive VariableProximity for Tagline */}
          <div
            ref={proximityContainerRef}
            style={{ position: "relative" }}
            className="max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 cursor-default py-2"
          >
            <VariableProximity
              label="I build reliable, scalable software solutions that solve real-world problems. Passionate about software engineering, clean code, system design, and developing high-quality applications."
              className="variable-proximity-demo leading-relaxed tracking-normal"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={proximityContainerRef}
              radius={100}
              falloff="linear"
              smoothing={0.2}
              scale={1}
              lift={0}
              idleWave={false}
              fontSize={18}
              fromColor="rgba(244, 244, 245, 0.72)"
              toColor="#60a5fa"
            />
          </div>

          <div className="pt-3 sm:pt-4 opacity-0 animate-fade-in-delay-4 flex justify-center gap-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
