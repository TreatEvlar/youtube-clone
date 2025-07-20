import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  FaBars,
  FaMicrophone,
  FaChevronLeft,
  FaChevronRight,
  FaRegNewspaper,
  FaYoutube,
  FaAngleRight,
  FaRegUserCircle,
} from "react-icons/fa";
import {
  IoSearch,
  IoMusicalNotesOutline,
  IoGameControllerOutline,
  IoTrophyOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { FaPlus, FaClockRotateLeft } from "react-icons/fa6";
import { TbBell, TbHanger2 } from "react-icons/tb";
import {
  MdHome,
  MdOutlineSubscriptions,
  MdOutlinePodcasts,
  MdOutlineCopyright,
} from "react-icons/md";
import {
  SiYoutubeshorts,
  SiYoutubestudio,
  SiYoutubemusic,
  SiYoutubekids,
} from "react-icons/si";
import { CgPlayList } from "react-icons/cg";
import { GoVideo } from "react-icons/go";
import {
  AiOutlineClockCircle,
  AiOutlineLike,
  AiOutlineBars,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import {
  RiMeteorLine,
  RiShoppingBag4Line,
  RiGraduationCapLine,
  RiFlagLine,
  RiFeedbackLine,
} from "react-icons/ri";
import { BiMovie } from "react-icons/bi";
import { CiStreamOn } from "react-icons/ci";
import firstimg from "./assets/images/4552-3840x2160-desktop-4k-bugatti-wallpaper-image.jpg";
import secondimg from "./assets/images/channels4_profile (1).jpg";
import thirdimg from "./assets/images/channels4_profile.jpg";
import forthimg from "./assets/images/images.png";
import fifthimg from "./assets/images/mrbeastyoutube_llc_logo.jpeg";
import sixthimg from "./assets/images/unnamed.png";

function App() {
  const scrollRef = useRef(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isInputSmall, setIsInputSmall] = useState(false);
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 726);
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);
  

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollLeft = el.scrollLeft;
    const scrollWidth = el.scrollWidth;
    const clientWidth = el.clientWidth;

    setShowLeftBtn(scrollLeft > 0);
    setShowRightBtn(scrollLeft + clientWidth < scrollWidth - 1); // ← Fix: buffer of 1px
  };

  // Change breakpoint from 1024 to 1313
  useEffect(() => {
    const checkScreenSize = () => {
      setIsInputSmall(window.innerWidth <= 865);
      setIsSmallScreen(window.innerWidth <= 1313);
      setIsSidebarHidden(window.innerWidth < 791);
      setIsMobileView(window.innerWidth <= 726);
      // Optionally close sidebar if hidden
      if (window.innerWidth < 791) setShowSidebar(false);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleUpdate = () => {
      const scrollLeft = el.scrollLeft;
      const scrollWidth = el.scrollWidth;
      const clientWidth = el.clientWidth;

      setShowLeftBtn(scrollLeft > 0);
      setShowRightBtn(scrollLeft + clientWidth < scrollWidth - 1);
    };

    el.addEventListener("scroll", handleUpdate);
    window.addEventListener("resize", handleUpdate);
    handleUpdate(); // Initial check

    return () => {
      el.removeEventListener("scroll", handleUpdate);
      window.removeEventListener("resize", handleUpdate);
    };
  }, []);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  const categories = [
    "All",
    "Mixes",
    "Live",
    "Shorts",
    "Music",
    "Gaming",
    "News",
    "Javascript",
    "React",
    "Node.js",
    "CSS",
    "HTML",
    "Python",
    "Java",
    "PHP",
    "Ruby",
    "Go",
    "Swift",
    "TypeScript",
    "SQL",
    "Rust",
    "Scala",
    "Perl",
    "C#",
    "C++",
    "C",
    "Assembly",
  ];

  return (
    <>
      <div className="header">
        <nav className="w-full h-20 fixed top-0 left-0 z-50 flex justify-between items-center px-7">
          <div className="div-left flex items-center gap-4">
            <div
              className="hamburger cursor-pointer"
              onClick={() => setShowSidebar((prev) => !prev)}
            >
              <FaBars className="text-xl" />
            </div>
            <div className="logo flex items-center gap-2">
              <img
                src="../src/assets/images/images.png"
                alt=""
                className="h-6"
              />
              <span className="text-lg font-bold tracking-tighter">
                YouTube <sup className="font-normal">IN</sup>
              </span>
            </div>
          </div>
          <div className="div-centre flex items-center gap-2">
            {!isMobileView && (
              <>
                <div
                  className={`search-bar flex items-center justify-between border border-gray-400 rounded-2xl pl-2 ${
                    isInputSmall ? "w-[30vw]" : "w-[40vw]"
                  } transition-all duration-300`}
                >
                  <input
                    type="text"
                    placeholder="Search"
                    className={`outline-none p-1 ${
                      isInputSmall ? "w-[90px]" : "w-[400px]"
                    }`}
                  />
                  <div className="bg-gray-200 w-12 p-2 rounded-r-2xl cursor-pointer flex items-center justify-center">
                    <IoSearch className="text-gray-700" />
                  </div>
                </div>
                <div className="search-bar-mic w-8 h-8 ml-2 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer">
                  <FaMicrophone />
                </div>
              </>
            )}
          </div>
          <div className="div-right flex items-center gap-4">
            {isMobileView && (
              <IoSearch
                className="text-2xl cursor-pointer"
                onClick={() => setShowSearchOverlay(true)}
              />
            )}

            <span className="flex items-center gap-1 bg-gray-100 p-1 px-4 rounded-full cursor-pointer hover:bg-gray-200">
              <FaPlus /> Create
            </span>

            {!isMobileView && <TbBell className="text-2xl" />}

            <img
              src="../src/assets/images/4552-3840x2160-desktop-4k-bugatti-wallpaper-image.jpg"
              alt=""
              className="h-8 w-8 rounded-full object-cover"
            />
          </div>
        </nav>
      </div>
      <div className="main pt-20 flex h-[calc(100vh-0px)] left-0 top-0 fixed overflow-x-hidden">
        {!isSidebarHidden && (
          <div
            className={`sidebar ${
              isSmallScreen ? "block w-[8vw]" : showSidebar ? "block" : "hidden"
            } w-[5vw]`}
          >
            <ul className="flex flex-col p-2 gap-2">
              <li className="flex items-center flex-col gap-2 p-2 rounded-xl hover:bg-gray-200">
                <MdHome className="text-2xl" />{" "}
                <span className="text-[10px] font-bold">Home</span>
              </li>
              <li className="flex items-center flex-col gap-2 p-2 rounded-xl hover:bg-gray-200">
                <SiYoutubeshorts className="text-2xl" />{" "}
                <span className="text-[10px] font-bold">Shorts</span>
              </li>
              <li className="flex items-center flex-col gap-2 p-2 rounded-xl hover:bg-gray-200">
                <MdOutlineSubscriptions className="text-2xl" />{" "}
                <span className="text-[10px] font-bold">Subscriptions</span>
              </li>
              <li className="flex items-center flex-col gap-2 p-2 rounded-xl hover:bg-gray-200">
                <FaRegUserCircle className="text-2xl" />{" "}
                <span className="text-[10px] font-bold">You</span>
              </li>
            </ul>
          </div>
        )}

        <div
            className={`first-section ${
              isSmallScreen
                ? `fixed top-20 left-0 h-[calc(100vh-5rem)] w-[70vw] bg-red-400 p-2 overflow-y-auto z-40 transform transition-transform duration-300 ease-in-out ${
                    showSidebar ? "translate-x-0" : "-translate-x-full"
                  }`
                : `w-[16vw]  p-2 overflow-y-auto ${
                    showSidebar ? "hidden" : "block"
                  }`
            }`}
          >
            <ul className="p-2">
              <li className="flex items-center gap-5 leading-10 bg-gray-200 rounded-md pl-2">
                <MdHome className="text-2xl" /> <span>Home</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <SiYoutubeshorts className="text-lg" /> <span>Shorts</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <MdOutlineSubscriptions className="text-lg" />{" "}
                <span>Subscriptions</span>
              </li>
            </ul>
            <hr />
            <ul className="p-2">
              <li className="flex items-center gap-2 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <span>You</span>
                <FaChevronRight />
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <FaClockRotateLeft className="text-lg" /> <span>History</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <CgPlayList className="text-2xl" /> <span>Playlists</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <GoVideo className="text-lg" /> <span>Your videos</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <AiOutlineClockCircle className="text-xl" />{" "}
                <span>Watch later</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <AiOutlineLike className="text-xl" /> <span>Liked videos</span>
              </li>
            </ul>
            <hr />
            <ul className="p-2">
              <li className="flex items-center gap-6 leading-10 pl-2">
                Subscriptions
              </li>
              <li className="flex items-center gap-4 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <img
                  src="../src/assets/images/channels4_profile.jpg"
                  alt=""
                  className="h-7 rounded-3xl"
                />
                <span>YASR TV</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <img
                  src="../src/assets/images/channels4_profile (1).jpg"
                  alt=""
                  className="h-7 rounded-3xl"
                />
                <span>mrnigelng</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <img
                  src="../src/assets/images/mrbeastyoutube_llc_logo.jpeg"
                  alt=""
                  className="h-7 rounded-3xl"
                />
                <span>MrBeast</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <img
                  src="../src/assets/images/unnamed.png"
                  alt=""
                  className="h-7 rounded-3xl"
                />
                <span>TreatEvlar</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-gray-200 rounded-md pl-3">
                <AiOutlineBars /> <span>All subscriptions</span>
              </li>
            </ul>
            <hr />
            <ul className="p-2">
              <li className="flex items-center gap-6 leading-10 pl-2">
                Explore
              </li>
              <li className="flex items-center gap-2 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <RiMeteorLine className="text-xl" /> <span>Trending</span>
              </li>
              <li className="flex items-center gap-2 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <RiShoppingBag4Line className="text-xl" /> <span>Shopping</span>
              </li>
              <li className="flex items-center gap-2 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <IoMusicalNotesOutline className="text-xl" /> <span>Music</span>
              </li>
              <li className="flex items-center gap-2 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <BiMovie className="text-xl" /> <span>Movies</span>
              </li>
              <li className="flex items-center gap-2 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <CiStreamOn className="text-xl" /> <span>Live</span>
              </li>
              <li className="flex items-center gap-2 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <IoGameControllerOutline className="text-xl" />{" "}
                <span>Gaming</span>
              </li>
              <li className="flex items-center gap-2 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <FaRegNewspaper className="text-xl" /> <span>News</span>
              </li>
              <li className="flex items-center gap-2 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <IoTrophyOutline className="text-xl" /> <span>Sports</span>
              </li>
              <li className="flex items-center gap-2 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <RiGraduationCapLine className="text-xl" /> <span>Courses</span>
              </li>
              <li className="flex items-center gap-2 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <TbHanger2 className="text-xl" /> <span>Fashion & Beauty</span>
              </li>
              <li className="flex items-center gap-2 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <MdOutlinePodcasts className="text-xl" /> <span>Podcasts</span>
              </li>
            </ul>
            <hr />
            <ul className="p-2">
              <li className="flex items-center gap-6 leading-10 pl-2">
                More from YouTube
              </li>
              <li className="flex items-center gap-4 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <FaYoutube className="text-xl text-red-600" />
                <span>YASR TV</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <SiYoutubestudio className="text-xl text-red-600" />
                <span>mrnigelng</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <SiYoutubemusic className="text-xl text-red-600" />
                <span>MrBeast</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <SiYoutubekids className="text-xl text-red-600" />
                <span>TreatEvlar</span>
              </li>
            </ul>
            <hr />
            <ul className="p-2">
              <li className="flex items-center gap-5 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <IoSettingsOutline className="text-2xl" /> <span>Settings</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <RiFlagLine className="text-lg" /> <span>Report history</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <AiOutlineQuestionCircle className="text-lg" />{" "}
                <span>Help</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-gray-200 rounded-md pl-2">
                <RiFeedbackLine className="text-lg" />{" "}
                <span>Send feedback</span>
              </li>
            </ul>
            <hr />
            <span className="block text-sm text-left px-4 mt-4">
              About Press Copyright <br /> Contact us Creators Advertise
              Developers <br />
              <br /> Terms Privacy Policy & Safety How YouTube works Test new
              features
            </span>
            <span className="flex items-center text-sm m-3">
              <MdOutlineCopyright /> &nbsp;2025 Google LLC
            </span>
          </div>
        

        <div
          className={`second-section ${
            isSidebarHidden
              ? "w-screen" // <-- changed from w-full to w-screen
              : isSmallScreen
              ? "w-[92vw]"
              : showSidebar
              ? "w-[95vw]"
              : "w-[84vw]"
          }  overflow-y-auto`}
        >
          <div className="relative  p-4">
            {showLeftBtn && (
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full"
                onClick={scrollLeft}
              >
                <FaChevronLeft />
              </button>
            )}
            <ul
              ref={scrollRef}
              className="flex items-center gap-4 overflow-x-auto scrollbar-hide scroll-smooth list-none"
            >
              {categories.map((item, index) => (
                <li
                  key={index}
                  className="px-3 py-1 bg-gray-200 rounded-xl whitespace-nowrap"
                >
                  {item}
                </li>
              ))}
            </ul>

            {showRightBtn && (
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full"
                onClick={scrollRight}
              >
                <FaChevronRight />
              </button>
            )}
          </div>
          <div className="video-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            {[...Array(9)].map((_, index) => (
              <Link to="/watch/dQw4w9WgXcQ" key={index} className="video-card flex flex-col">
                <div className="relative pb-[56.25%]">
                  <img
                    src={firstimg}
                    alt="Video thumbnail"
                    className="absolute inset-0 w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="flex mt-4">
                  <img
                    src={firstimg}
                    alt="Channel icon"
                    className="h-10 w-10 rounded-full object-cover mr-3"
                  />
                  <div className="flex flex-col text-left min-w-0">
                    <span className="font-medium line-clamp-2 text-base text-black">
                      Keep Going [AMV]
                    </span>
                    <span className="text-sm text-gray-600 mt-1">
                      TreatEvlar
                    </span>
                    <span className="text-sm text-gray-600">
                      158K views · 1 month ago
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {showSearchOverlay && isMobileView && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-[9999] p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <button
              className="text-xl"
              onClick={() => setShowSearchOverlay(false)}
            >
              <FaChevronLeft />
            </button>
            <input
              autoFocus
              type="text"
              placeholder="Search"
              className="flex-1 border-b border-gray-400 outline-none text-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
