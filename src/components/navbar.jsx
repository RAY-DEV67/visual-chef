import { useNavigate } from "react-router-dom";
import Liya from "../assets/liya3.jpg";
import { useState, useEffect, useContext } from "react";
import { Theme, Settheme } from "../App";
import { Link } from "react-router-dom";

export function Navbar() {
  const [showMobile, setshowMobile] = useState(false);
  const [scrolled, setscrolled] = useState();
  const navigate = useNavigate();

  const theme = useContext(Theme);
  const settheme = useContext(Settheme);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setscrolled(true);
      } else {
        setscrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-[100vw] flex flex-col lg:items-center">
      <div
        className={
          theme === "Dark"
            ? `flex py-[1rem] h-[50px] justify-between w-[100vw] px-[1rem] fixed z-10 items-center bg-transparent`
            : theme === "Light"
            ? `flex justify-between px-[1rem] fixed z-10 items-center ${
                scrolled ? "bg-[#e59002] navbar mb-[2rem]" : "bg-[#e59002]"
              }`
            : ""
        }
      >
        
<div className="flex justify-center lg:hidden">
        <a href="https://www.instagram.com/thevisualchef" target="_Blank">
          <svg
            width="20px"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            fill="#000009"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>instagram [#167]</title> <desc>Created with Sketch.</desc>{" "}
              <defs> </defs>{" "}
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                {" "}
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-340.000000, -7439.000000)"
                  fill="#000009"
                >
                  {" "}
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    {" "}
                    <path
                      d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792"
                      id="instagram-[#167]"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/thevisualchef"
          target="_Blank"
          className="mx-[0.5rem]"
        >
          <svg
            width="20px"
            viewBox="0 -2 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            fill="#000009"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>twitter [#154]</title> <desc>Created with Sketch.</desc>{" "}
              <defs> </defs>{" "}
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                {" "}
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-60.000000, -7521.000000)"
                  fill="#000009"
                >
                  {" "}
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    {" "}
                    <path
                      d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
                      id="twitter-[#154]"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </a>
      </div>

      <p className="text-[1.5rem] text-[#000009] font-bold">The Visual Chef</p>

        <div
          onClick={() => {
            setshowMobile(true);
          }}
          className="lg:hidden mr-[1rem]"
        >
          <svg
            width="35px"
            height="35px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="style=linear">
                {" "}
                <g id="menu-strawberry">
                  {" "}
                  <path
                    id="vector"
                    d="M3 6H21"
                    stroke="#000009"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    id="vector_2"
                    d="M5 12H19"
                    stroke="#000009"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    id="vector_3"
                    d="M7 18H17"
                    stroke="#000009"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
        
        <div className="hidden lg:flex lg:mr-[1rem]">
        <Link
            to="/"
            className="nav"
            onClick={() => {
              setshowMobile(false);
            }}
          >
            <p className="text-[1.5vw] font-bold text-[#000009]">Home</p>
          </Link>
          <Link
            to="/PalmOil"
            className="nav"
            onClick={() => {
              setshowMobile(false);
            }}
          >
            <p className="text-[1.5vw] mx-[1rem] font-bold text-[#000009]">Palm Oil</p>
          </Link>
          <Link
            to="/Bubbles"
            className="nav"
            onClick={() => {
              setshowMobile(false);
            }}
          >
            <p className="text-[1.5vw] mx-[1rem] font-bold text-[#000009]">Bubbles</p>
          </Link>
          <Link
            to="/Bisd"
            className="nav"
            onClick={() => {
              setshowMobile(false);
            }}
          >
            <p className="text-[1.5vw] mx-[1rem] font-bold text-[#000009]">Beauty in skin diversity</p>
          </Link>
          <Link
            to="/Smile"
            className="nav"
            onClick={() => {
              setshowMobile(false);
            }}
          >
            <p className="text-[1.5vw] mx-[1rem] font-bold text-[#000009]">Smile</p>
          </Link>
          <Link
            to="/Gele"
            className="nav"
            onClick={() => {
              setshowMobile(false);
            }}
          >
            <p className="text-[1.5vw] mx-[1rem] font-bold text-[#000009]">Gele</p>
          </Link>
          <Link
            to="/Contact"
            className="nav"
            onClick={() => {
              setshowMobile(false);
            }}
          >
            <p className="text-[1.5vw] font-bold text-[#000009]">Contact</p>
          </Link>
        </div>
     

        <div
          className={
            showMobile
              ? `${
                  theme === "Dark"
                    ? "bg-[#000000] landing2"
                    : theme === "Light"
                    ? "bg-white"
                    : ""
                } h-[100vh] top-0 w-[100vw] flex flex-col items-center justify-center ml-[-1rem] fixed show`
              : "bg-[#000009] h-[100vh] no top-0 w-[100vw] flex flex-col items-center justify-center fixed"
          }
        >
          {/* <img src={Liya} alt="Daiverse" className="absolute nav-image"/> */}
          <div
            className={
              showMobile
                ? `${
                    theme === "Dark"
                      ? "overlay-Dark"
                      : theme === "Light"
                      ? "overlay-Light"
                      : ""
                  } h-[100vh] top-0 w-[100vw] flex flex-col items-center justify-center fixed show`
                : "bg-[#323b0a] h-[100vh] no top-0 w-[100vw] flex flex-col items-center justify-center fixed"
            }
          ></div>
          <p
            className="absolute headingfont top-7 nav text-[5vw] left-[85%]"
            onClick={() => {
              setshowMobile(false);
            }}
          >
            X
          </p>
          <Link
            to="/"
            className="nav"
            onClick={() => {
              setshowMobile(false);
            }}
          >
            <p className="text-[6vw] text-[#D3D3D3] headingfont font-bold">
              Home
            </p>
          </Link>
          <Link
            to="/PalmOil"
            className="nav"
            onClick={() => {
              setshowMobile(false);
            }}
          >
            <p className="text-[6vw] text-[#D3D3D3] my-[1rem] headingfont font-bold">
              Palm Oil
            </p>
          </Link>
          <Link
            to="/Bubbles"
            className="nav"
            onClick={() => {
              setshowMobile(false);
            }}
          >
            <p className="text-[6vw] text-[#D3D3D3] my-[1rem] headingfont font-bold">
              Bubbles
            </p>
          </Link>
          <Link
            to="/Bisd"
            className="nav"
            onClick={() => {
              setshowMobile(false);
            }}
          >
            <p className="text-[6vw] text-[#D3D3D3] my-[1rem] headingfont font-bold">
              Beauty In Skin Diversity
            </p>
          </Link>
          <Link
            to="/Smile"
            className="nav"
            onClick={() => {
              setshowMobile(false);
            }}
          >
            <p className="text-[6vw] text-[#D3D3D3] my-[1rem] headingfont font-bold">
              Smile
            </p>
          </Link>
          <Link
            to="/Gele"
            className="nav"
            onClick={() => {
              setshowMobile(false);
            }}
          >
            <p className="text-[6vw] text-[#D3D3D3] my-[1rem] headingfont font-bold">
              Gele
            </p>
          </Link>
          <Link
            to="/Contact"
            className="nav"
            onClick={() => {
              setshowMobile(false);
            }}
          >
            <p className="text-[6vw] text-[#D3D3D3] headingfont font-bold">
              Contact
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
