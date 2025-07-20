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
  FaThumbsUp,
  FaThumbsDown,
  FaShare,
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
  AiOutlineDislike,
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
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

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

  const toggleLike = () => {
    setLiked(!liked);
    if (disliked) setDisliked(false);
  };

  const toggleDislike = () => {
    setDisliked(!disliked);
    if (liked) setLiked(false);
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

  // Mock video data
  const videos = [
    {
      id: 1,
      title: "How to Build a React App in 10 Minutes",
      channel: "CodeWithMe",
      views: "1.2M views",
      time: "2 days ago",
      duration: "10:15",
      image: firstimg,
    },
    {
      id: 2,
      title: "JavaScript Tips Every Developer Should Know",
      channel: "JS Master",
      views: "850K views",
      time: "1 week ago",
      duration: "15:42",
      image: secondimg,
    },
    {
      id: 3,
      title: "Learn CSS Grid in 20 Minutes - Complete Guide",
      channel: "WebDev Simplified",
      views: "2.4M views",
      time: "3 weeks ago",
      duration: "19:28",
      image: thirdimg,
    },
    {
      id: 4,
      title: "Building a YouTube Clone with React",
      channel: "React Masters",
      views: "350K views",
      time: "4 days ago",
      duration: "42:10",
      image: forthimg,
    },
    {
      id: 5,
      title: "TypeScript Crash Course for Beginners",
      channel: "TypeScript Pro",
      views: "560K views",
      time: "2 weeks ago",
      duration: "25:37",
      image: fifthimg,
    },
    {
      id: 3,
      title: "Learn CSS Grid in 20 Minutes - Complete Guide",
      channel: "WebDev Simplified",
      views: "2.4M views",
      time: "3 weeks ago",
      duration: "19:28",
      image: sixthimg,
    },
    {
      id: 4,
      title: "Building a YouTube Clone with React",
      channel: "React Masters",
      views: "350K views",
      time: "4 days ago",
      duration: "42:10",
      image: firstimg,
    },
    {
      id: 5,
      title: "TypeScript Crash Course for Beginners",
      channel: "TypeScript Pro",
      views: "560K views",
      time: "2 weeks ago",
      duration: "25:37",
      image: fifthimg,
    },
    {
      id: 3,
      title: "Learn CSS Grid in 20 Minutes - Complete Guide",
      channel: "WebDev Simplified",
      views: "2.4M views",
      time: "3 weeks ago",
      duration: "19:28",
      image: firstimg,
    },
  ];

  return (
    <>
      <div className="header">
        <nav className="w-full h-20 bg-white fixed top-0 left-0 z-50 flex justify-between items-center px-7">
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

        <div
          className={`first-section ${
            isSmallScreen
              ? `fixed top-20 left-0 h-[calc(100vh-5rem)] w-[70vw] bg-red-400 p-2 overflow-y-auto z-40 transform transition-transform duration-300 ease-in-out ${
                  showSidebar ? "translate-x-0" : "-translate-x-full"
                }`
              : `w-[16vw] bg-red-400 p-2 overflow-y-auto ${
                  showSidebar ? "block" : "hidden"  // Fixed this line
                }`
          }`}
        >
            <ul className="p-2">
              <li className="flex items-center gap-5 leading-10 bg-amber-300 rounded-md pl-2">
                <MdHome className="text-2xl" /> <span>Home</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <SiYoutubeshorts className="text-lg" /> <span>Shorts</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <MdOutlineSubscriptions className="text-lg" />{" "}
                <span>Subscriptions</span>
              </li>
            </ul>
            <hr />
            <ul className="p-2">
              <li className="flex items-center gap-2 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <span>You</span>
                <FaChevronRight />
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <FaClockRotateLeft className="text-lg" /> <span>History</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <CgPlayList className="text-2xl" /> <span>Playlists</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <GoVideo className="text-lg" /> <span>Your videos</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <AiOutlineClockCircle className="text-xl" />{" "}
                <span>Watch later</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <AiOutlineLike className="text-xl" /> <span>Liked videos</span>
              </li>
            </ul>
            <hr />
            <ul className="p-2">
              <li className="flex items-center gap-6 leading-10 pl-2">
                Subscriptions
              </li>
              <li className="flex items-center gap-4 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <img
                  src="../src/assets/images/channels4_profile.jpg"
                  alt=""
                  className="h-7 rounded-3xl"
                />
                <span>YASR TV</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <img
                  src="../src/assets/images/channels4_profile (1).jpg"
                  alt=""
                  className="h-7 rounded-3xl"
                />
                <span>mrnigelng</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <img
                  src="../src/assets/images/mrbeastyoutube_llc_logo.jpeg"
                  alt=""
                  className="h-7 rounded-3xl"
                />
                <span>MrBeast</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <img
                  src="../src/assets/images/unnamed.png"
                  alt=""
                  className="h-7 rounded-3xl"
                />
                <span>TreatEvlar</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-amber-300 rounded-md pl-3">
                <AiOutlineBars /> <span>All subscriptions</span>
              </li>
            </ul>
            <hr />
            <ul className="p-2">
              <li className="flex items-center gap-6 leading-10 pl-2">
                Explore
              </li>
              <li className="flex items-center gap-2 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <RiMeteorLine className="text-xl" /> <span>Trending</span>
              </li>
              <li className="flex items-center gap-2 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <RiShoppingBag4Line className="text-xl" /> <span>Shopping</span>
              </li>
              <li className="flex items-center gap-2 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <IoMusicalNotesOutline className="text-xl" /> <span>Music</span>
              </li>
              <li className="flex items-center gap-2 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <BiMovie className="text-xl" /> <span>Movies</span>
              </li>
              <li className="flex items-center gap-2 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <CiStreamOn className="text-xl" /> <span>Live</span>
              </li>
              <li className="flex items-center gap-2 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <IoGameControllerOutline className="text-xl" />{" "}
                <span>Gaming</span>
              </li>
              <li className="flex items-center gap-2 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <FaRegNewspaper className="text-xl" /> <span>News</span>
              </li>
              <li className="flex items-center gap-2 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <IoTrophyOutline className="text-xl" /> <span>Sports</span>
              </li>
              <li className="flex items-center gap-2 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <RiGraduationCapLine className="text-xl" /> <span>Courses</span>
              </li>
              <li className="flex items-center gap-2 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <TbHanger2 className="text-xl" /> <span>Fashion & Beauty</span>
              </li>
              <li className="flex items-center gap-2 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <MdOutlinePodcasts className="text-xl" /> <span>Podcasts</span>
              </li>
            </ul>
            <hr />
            <ul className="p-2">
              <li className="flex items-center gap-6 leading-10 pl-2">
                More from YouTube
              </li>
              <li className="flex items-center gap-4 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <FaYoutube className="text-xl text-red-600" />
                <span>YASR TV</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <SiYoutubestudio className="text-xl text-red-600" />
                <span>mrnigelng</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <SiYoutubemusic className="text-xl text-red-600" />
                <span>MrBeast</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <SiYoutubekids className="text-xl text-red-600" />
                <span>TreatEvlar</span>
              </li>
            </ul>
            <hr />
            <ul className="p-2">
              <li className="flex items-center gap-5 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <IoSettingsOutline className="text-2xl" /> <span>Settings</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <RiFlagLine className="text-lg" /> <span>Report history</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-amber-300 rounded-md pl-2">
                <AiOutlineQuestionCircle className="text-lg" />{" "}
                <span>Help</span>
              </li>
              <li className="flex items-center gap-6 leading-10 hover:bg-amber-300 rounded-md pl-2">
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
        
      </div>

      <div className="flex-1 overflow-y-auto pl-4 pr-4 mt-25 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-2/3">
              <div className="w-full aspect-video bg-black rounded-xl overflow-hidden">
                <iframe width="840" height="480" src="https://www.youtube.com/embed/cWppAbqm9I8?si=X7C0TBJJhHZZ1vWO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div className="w-full h-full bg-gradient-to-br from-purple-900 to-blue-700 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-5xl mb-4">▶</div>
                    <div className="text-2xl font-bold">
                        Rick Astley - Never Gonna Give You Up
                      </div>
                      <div className="mt-2">1.2B views • Mar 25, 2009</div>
                  </div>
                </div>
              </div>
              {/* Video Title */}
                <h1 className="text-xl font-bold mt-4 text-left">
                  Rick Astley - Never Gonna Give You Up (Official Music Video)
                </h1>
              {/* Video Actions */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4 py-3 border-b border-t">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                        <span className="font-bold text-gray-700">RA</span>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">Rick Astley</div>
                      <div className="text-sm text-gray-600">
                        14.5M subscribers
                      </div>
                    </div>
                    <button className="ml-4 bg-black text-white px-4 py-1 rounded-full text-sm font-medium">
                      Subscribe
                    </button>
                  </div>
                  <div className="flex items-center gap-2 mt-3 sm:mt-0">
                    <div className="flex bg-gray-100 rounded-full overflow-hidden">
                      <button
                        className={`flex items-center gap-1 px-4 py-2 ${
                          liked ? "text-blue-600" : ""
                        }`}
                        onClick={toggleLike}
                      >
                        <FaThumbsUp className="text-lg" />
                        <span>2.3M</span>
                      </button>
                      <div className="border-r border-gray-300 h-6 my-auto"></div>
                      <button
                        className={`px-4 py-2 ${
                          disliked ? "text-blue-600" : ""
                        }`}
                        onClick={toggleDislike}
                      >
                        <FaThumbsDown className="text-lg" />
                      </button>
                    </div>
                    <button className="flex items-center gap-1 bg-gray-100 px-4 py-2 rounded-full">
                      <FaShare className="text-lg" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
                {/* Video Description */}
                <div className="bg-gray-100 p-4 rounded-xl mt-4 text-left">
                  <div className="font-semibold">1.2B views • Mar 25, 2009</div>
                  <p className="mt-3">
                    The official video for "Never Gonna Give You Up" by Rick
                    Astley. The new album 'Are We There Yet?' is out now:
                    download here: https://rickastley.lnk.to/AreWeThereYet
                  </p>
                </div>
                {/* Comments Section */}
                <div className="mt-8">
                  <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-xl font-semibold">3.4K Comments</h2>
                    <div className="flex items-center">
                      <span className="text-sm font-medium">Sort by</span>
                      <span className="text-sm font-medium text-blue-600 ml-1">
                        Top comments
                      </span>
                    </div>
                  </div>
                  {/* Add Comment */}
                  <div className="flex items-start gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full overflow-hidden mt-1">
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                        <span className="font-bold text-gray-700">U</span>
                      </div>
                    </div>
                    <div className="flex-1 border-b border-gray-300 pb-1">
                      <input
                        type="text"
                        placeholder="Add a comment..."
                        className="w-full outline-none bg-transparent"
                      />
                    </div>
                  </div>
                  {/* Comment List */}
                  <div className="space-y-6">
                    {[1, 2, 3].map((comment) => (
                      <div key={comment} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                            <span className="font-bold text-gray-700">J</span>
                          </div>
                        </div>
                        <div className="text-left">
                          <div className="font-medium">John Doe</div>
                          <div className="mt-1">
                            This song never gets old! Classic 80s vibe that
                            always brings back memories.
                          </div>
                          <div className="flex items-center gap-4 mt-2">
                            <AiOutlineLike className="text-gray-600" />
                            <AiOutlineDislike className="text-gray-600" />
                            <span className="text-sm text-gray-600">Reply</span>
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            2 days ago
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
            {/* Suggested Videos */}
              <div className="w-full lg:w-1/3 text-left">
                <div className="sticky top-20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium">Up next</div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span>Autoplay</span>
                      <span className="ml-2">▶</span>
                    </div>
                  </div>
                  {videos.map((video) => (
                    <div
                      key={video.id}
                      className="flex mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                    >
                      <div className="relative w-40 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                        <img src={video.image} alt={video.title} className="w-full h-full object-cover" />
                        <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <div className="ml-3 flex-1 min-w-0">
                        <h3 className="font-medium text-sm line-clamp-2">
                          {video.title}
                        </h3>
                        <div className="text-xs text-gray-600 mt-1">
                          {video.channel}
                        </div>
                        <div className="text-xs text-gray-600">
                          {video.views} • {video.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
