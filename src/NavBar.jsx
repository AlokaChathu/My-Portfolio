import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLogo from "../src/Images/logo.png";
import MenuLogo from "../src/Images/menu.svg";
import CloseLogo from "../src/Images/close.svg";
import HomeIcon from "../src/Images/home2.svg";

const NavBar = () => {
  const [showBackToHome, setShowBackToHome] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMenuClick = () => {
    console.log("Menu clicked");
    const sideBar = document.getElementById("sideBar");
    if (sideBar) sideBar.style.display = "none";
  };

  const getSideBar = () => {
    const sideBar = document.getElementById("sideBar");
    if (sideBar) sideBar.style.display = "flex";
  };

  useEffect(() => {
    const homeSection = document.getElementById("home");
    if (!homeSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowBackToHome(!entry.isIntersecting);
      },
      {
        threshold: 0.5, 
      }
    );

    observer.observe(homeSection);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      
      {showBackToHome && (
        <button
          className=" fixed bottom-5 right-10 bg-gray-800/30 text-xl text-white px-5 py-1 rounded-4xl cursor-pointer z-[998]"
          onClick={() => scrollToSection("navbar")}
        >
          <img src={HomeIcon} className="h-6 w-6 rounded-2xl text-white" />
        </button>
      )}

      <div className="b h-20 w-full flex flex-row px-12 py-2 mt-7" id="navbar">
        <div className="h-full w-1/3">
          <img src={MainLogo} className="h-full pl-25 max-md:pl-0" />
        </div>

        <div
          className="flex flex-row h-full justify-evenly items-center w-2/3 bg-gray-900 max-md:hidden
          text-white font-bold lg:text-[17px] md:text-[16px] sm:text-[12px] text-[12px] rounded-4xl "
        >
          <button className="cursor-pointer" onClick={() => scrollToSection("home")}>
            Home
          </button>
          <button className="cursor-pointer" onClick={() => scrollToSection("aboutMe")}>
            AboutMe
          </button>
          <button className="cursor-pointer" onClick={() => scrollToSection("skills")}>
            Skills
          </button>
          <button className="cursor-pointer" onClick={() => scrollToSection("projects")}>
            Projects
          </button>
        </div>

        <div className="h-full w-20 max-md:flex hidden justify-center items-center cursor-pointer m-auto mr-0">
          <img src={MenuLogo} id="hambergerMenu" onClick={getSideBar} />
        </div>
      </div>

      <div
        id="sideBar"
        className="z-999 flex flex-col h-[100vh] min-w-[400px] fixed top-0 right-0 bg-white/70 shadow-xl backdrop-blur-md hidden"
      >
        <div className="flex justify-end mr-10 mt-5" id="close_munu" onClick={handleMenuClick}>
          <img src={CloseLogo} />
        </div>

        <button
          onClick={() => {
            scrollToSection("home");
            handleMenuClick();
          }}
          className="text-[20px] py-5 hover:bg-white/30 cursor-pointer font-medium text-gray-700 mt-10"
        >
          Home
        </button>
        <button
          onClick={() => {
            scrollToSection("aboutMe");
            handleMenuClick();
          }}
          className="text-[20px] py-5 hover:bg-white/30 cursor-pointer font-medium text-gray-700"
        >
          AboutMe
        </button>
        <button
          onClick={() => {
            scrollToSection("skills");
            handleMenuClick();
          }}
          className="text-[20px] py-5 hover:bg-white/30 cursor-pointer font-medium text-gray-700"
        >
          Skills
        </button>
        <button
          onClick={() => {
            scrollToSection("projects");
            handleMenuClick();
          }}
          className="text-[20px] py-5 hover:bg-white/30 cursor-pointer font-medium text-gray-700"
        >
          Projects
        </button>
      </div>
    </>
  );
};

export default NavBar;
