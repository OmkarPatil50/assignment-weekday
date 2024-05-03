// Importing necessary dependencies and styles
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import "./Sidebar.css";

// Defining the Sidebar component
const Sidebar = ({ isOpen, setIsOpen }) => {
  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Navigation items data
  const navItems = [
    {
      title: "LOOKING FOR A JOB",
      items: [
        {
          display: "My applied jobs",
          icon: <PersonOutlineOutlinedIcon />,
          isNew: false,
        },
        {
          display: "Search jobs",
          icon: <SearchOutlinedIcon />,
          isNew: false,
        },
        {
          display: "Search salary",
          icon: <CurrencyRupeeOutlinedIcon />,
          isNew: true,
        },
        {
          display: "Ask for referral",
          icon: <PersonAddAltIcon />,
          isNew: false,
        },
      ],
    },
    {
      title: "RECOMMEND AND EARN",
      items: [
        {
          display: "Recommend from shortlist",
          icon: <ThumbUpAltOutlinedIcon />,
          isNew: false,
        },
        {
          display: "Recommend to specific company",
          icon: <FactCheckOutlinedIcon />,
          isNew: false,
        },
        {
          display: "Refer this extension",
          icon: <ShareOutlinedIcon />,
          isNew: false,
        },
      ],
    },
  ];

  // Effect hook to set sidebar state based on window size
  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Rendering the Sidebar component
  return (
    <div className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
      {/* Sidebar header */}
      <div className="sidebar-header flex-center">
        {isOpen ? (
          <div className="sidebar-logo-container" onClick={toggleSidebar}>
            <img
              src="https://jobs.weekday.works/_next/static/media/logo.268caeb2.png"
              alt="logo"
              className="sidebar-logo-large"
            />
          </div>
        ) : (
          <div className="sidebar-logo-container" onClick={toggleSidebar}>
            <img
              src="https://jobs.weekday.works/_next/static/media/logo-small.08826abd.png"
              alt="logo"
              className="sidebar-logo"
            />
          </div>
        )}

        <button
          onClick={toggleSidebar}
          className={`${
            !isOpen && "btn-chevron-closed"
          } btn-chevron flex-center`}
        >
          <ChevronLeftIcon />
        </button>
      </div>
      {/* Sidebar navigation */}
      <nav className="sidebar-nav">
        {navItems?.map((navItem, index) => {
          return (
            <div
              key={index}
              className={`sidebar-nav-items-section flex-col ${
                isOpen ? "flex-start" : "flex-center"
              }`}
            >
              <h3 className={`nav-item-title ${!isOpen && "hidden"}`}>
                {navItem?.title}
              </h3>
              {navItem?.items?.map((item, itemIndex) => {
                return (
                  <NavLink
                    key={itemIndex}
                    className="sidebar-nav-item text-decoration-none"
                    to="/"
                  >
                    {item?.icon}
                    <span className={`${!isOpen && "hidden"} nav-item-name`}>
                      {item?.display}
                    </span>
                    {item?.isNew && isOpen && <div className="new">New</div>}
                  </NavLink>
                );
              })}
            </div>
          );
        })}
      </nav>
      {/* Sidebar profile */}
      <div className="sidebar-profile">
        <div className="sidebar-profile-image">
          <img
            src="https://c1.klipartz.com/pngpicture/823/765/sticker-png-login-icon-system-administrator-user-user-profile-icon-design-avatar-face-head.png"
            alt="user"
          />
        </div>
        <div className={isOpen ? "sidebar-profile-text" : "hidden"}>
          <h3>Brooklyn Simmons</h3>
        </div>
      </div>
    </div>
  );
};

// Exporting the Sidebar component
export default Sidebar;
