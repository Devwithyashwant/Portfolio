import ProfileCard from "./ProfileCard";

export const AboutSection = () => {
  const handleContactClick = () => {
    const el = document.querySelector("#contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "#contact";
    }
  };

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Bio Description */}
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold">
              Passionate Software Engineer & Developer
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              With a strong foundation in software engineering, I specialize
              in building reliable, scalable, and high-performance applications
              that solve real-world problems.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about clean code, sound system design, and creating
              intuitive digital solutions while continually expanding my technical
              horizons.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="#projects"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Interactive ProfileCard with User's Photo */}
          <div className="flex justify-center items-center py-4">
            <ProfileCard
              name="Yashwant K"
              title="Software Engineer"
              handle="Devwithyashwant"
              status="Online"
              statusColor="#22c55e"
              contactText="Contact"
              avatarUrl="/assets/aistudio/IMG_9868_1f826e5e.JPG"
              miniAvatarUrl="/assets/aistudio/IMG_9868_1f826e5e.JPG"
              holo={0.8}
              glare={0.5}
              tiltStrength={12}
              parallax={8}
              radius={16}
              enableTilt
              intro
              showUserInfo
              enableMobileTilt={false}
              theme="dark"
              onContactClick={handleContactClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
