import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const createStars = () => {
      const width = typeof window !== "undefined" ? window.innerWidth : 1200;
      const height = typeof window !== "undefined" ? window.innerHeight : 800;
      const count = Math.max(70, Math.min(180, Math.floor((width * height) / 7500)));

      const items = [];
      for (let i = 0; i < count; i++) {
        items.push({
          id: i,
          size: Math.random() * 2.5 + 1.2,
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random() * 0.7 + 0.3,
          animationDuration: (Math.random() * 3 + 2).toFixed(2),
          delay: (Math.random() * 4).toFixed(2),
        });
      }
      setStars(items);
    };

    const createMeteors = () => {
      const items = [];
      for (let i = 0; i < 5; i++) {
        items.push({
          id: i,
          size: Math.random() * 1.5 + 1,
          x: Math.random() * 90 + 5,
          y: Math.random() * 25,
          delay: (Math.random() * 10).toFixed(2),
          animationDuration: (Math.random() * 2 + 3).toFixed(2),
        });
      }
      setMeteors(items);
    };

    createStars();
    createMeteors();

    const handleResize = () => {
      createStars();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0 select-none"
      aria-hidden="true"
    >
      {/* Cosmic nebula glow gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(139,92,246,0.2),rgba(0,0,0,0))]" />

      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: `${meteor.size * 60}px`,
            height: `${meteor.size * 2}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};
