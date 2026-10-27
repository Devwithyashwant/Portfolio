import { cn } from "@/lib/utils";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import GooeyNav from "./GooeyNav";
import OptionWheel from "./OptionWheel";

const navItems = [
  { label: "Home", href: "#hero", name: "Home" },
  { label: "About", href: "#about", name: "About" },
  { label: "Skills", href: "#skills", name: "Skills" },
  { label: "Projects", href: "#projects", name: "Projects" },
  { label: "Contact", href: "#contact", name: "Contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedMobileIndex, setSelectedMobileIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Prevent background scroll when phone menu is open
  useEffect(() => {
    if (isMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalTouchAction = document.body.style.touchAction;

      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
      };
    }
  }, [isMenuOpen]);

  // Synchronize active section with scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = ["hero", "about", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPos >= el.offsetTop) {
          setActiveIndex(i);
          setSelectedMobileIndex(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNav = (index) => {
    const item = navItems[index];
    if (item) {
      setIsMenuOpen(false);
      setActiveIndex(index);
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.hash = item.href;
      }
    }
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-2.5 bg-background/80 backdrop-blur-md shadow-xs" : "py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Brand */}
        <a
          className="text-lg sm:text-xl font-bold flex items-center shrink-0"
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            setActiveIndex(0);
            document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="relative z-10 text-glow">
            <span className="text-foreground">Yashwant</span>{" "}
            <span className="text-blue-500 font-extrabold">K</span>{" "}
            <span className="text-primary font-medium text-base sm:text-lg">Portfolio</span>
          </span>
        </a>

        {/* Desktop GooeyNav */}
        <div className="hidden md:flex items-center">
          <GooeyNav
            items={navItems}
            activeIndex={activeIndex}
            theme="dark"
            size="md"
            frame
            particleCount={15}
            spread={56}
            animationTime={600}
            timeVariance={300}
            gooeyness={0.5}
            wobble={0.5}
            hoverEffect
            onChange={(index, item) => {
              setActiveIndex(index);
              const el = document.querySelector(item.href);
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              } else {
                window.location.hash = item.href;
              }
            }}
          />
        </div>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50 rounded-lg hover:bg-card/50 transition-colors"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile OptionWheel menu overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-between py-10 sm:py-16 px-4 sm:px-6 touch-none overscroll-contain",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
          onTouchMove={(e) => e.stopPropagation()}
        >
          {/* Wheel header label */}
          <div className="text-center pt-2">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold">Navigation</p>
            <p className="text-xs text-muted-foreground mt-1">Flick or drag the wheel to explore</p>
          </div>

          {/* 3D OptionWheel */}
          <div
            className="w-full h-[280px] sm:h-[340px] md:h-[360px] relative flex items-center justify-center my-auto touch-none"
            onTouchMove={(e) => e.stopPropagation()}
          >
            {isMenuOpen && (
              <OptionWheel
                items={navItems.map((item) => item.name)}
                defaultSelected={selectedMobileIndex}
                textColor="#71717a"
                activeColor="#3b82f6"
                side="left"
                fontSize={2.5}
                spacing={1.35}
                curve={1}
                tilt={6}
                blur={2}
                fade={0.25}
                smoothing={180}
                inset={50}
                loop={false}
                draggable
                soundUrl="/assets/sounds/click-soft.mp3"
                soundVolume={0.5}
                onChange={(index) => setSelectedMobileIndex(index)}
                onItemClick={(index) => handleMobileNav(index)}
              />
            )}
          </div>

          {/* Confirm / Go to Section Action */}
          <div className="w-full max-w-xs flex flex-col items-center gap-2.5 pb-2">
            <button
              onClick={() => handleMobileNav(selectedMobileIndex)}
              className="cosmic-button w-full flex items-center justify-center gap-2 py-3 sm:py-3.5 text-sm sm:text-base shadow-[0_0_20px_rgba(59,130,246,0.5)] font-semibold"
            >
              Go to {navItems[selectedMobileIndex]?.name || "Section"} <ArrowRight size={18} />
            </button>
            <p className="text-[11px] text-muted-foreground">Tactile dial with instant navigation</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
