"use client"
import { useEffect, useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-5 right-5 z-[99999] text-3xl hover:bg-white text-[#00246a]   p-4 rounded-full bg-gray-200 shadow-md"
        >
          <BsArrowUpCircle />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
