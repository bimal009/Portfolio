import { useEffect, useRef } from "react";
import gsap from "gsap";

const GradientCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const innerCursorRef = useRef<HTMLDivElement>(null);
  const cursorVisible = useRef<boolean>(false);
  const cursorPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      cursorPosition.current = { x: e.clientX, y: e.clientY };

      // Show cursor if it was previously hidden
      if (!cursorVisible.current) {
        cursorVisible.current = true;
        gsap.to(cursorRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      }

      // Use GSAP for smoother cursor movement
      gsap.to(cursorRef.current, {
        left: cursorPosition.current.x,
        top: cursorPosition.current.y,
        duration: 0.1,
        ease: "power1.out"
      });
    };

    const onMouseLeave = () => {
      cursorVisible.current = false;
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const onMouseEnter = () => {
      cursorVisible.current = true;
      gsap.to(cursorRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    // Set up the mouse tracking
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Animate the inner cursor continuously
    gsap.to(innerCursorRef.current, {
      scale: 1.2,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-50 opacity-0 hidden lg:flex"
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-blue-500 opacity-70 blur-sm" />
      <div ref={innerCursorRef} className="w-3 h-3 rounded-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};

export default GradientCursor;