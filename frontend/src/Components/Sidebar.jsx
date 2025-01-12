import React, { useState } from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { LiaHomeSolid } from "react-icons/lia";
import { IoSearch } from "react-icons/io5";
import { VscLibrary } from "react-icons/vsc";
import { MdOutlineLibraryMusic } from "react-icons/md";
// import { LuLibraryBig } from "react-icons/lu";
import { IoLibraryOutline } from "react-icons/io5";

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);

  const location = useLocation();

  const getColor = (path) => {
    return location.pathname === path ? "#F1F1F1" : "#787878";
  };

  return (
    <div
      style={{
        display: "flex",
        // border:"2px solid red",
        flexDirection: "column",
        backgroundColor: "#2C2C2C",
        width: "100%",
       height:"100%"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "black",
          borderRadius: "6px",
          margin: "5px",
        }}
      >
        <img
          style={{ width: "50%", height: "50px" }}
          src="https://i.ytimg.com/vi/704PL_KSLPY/maxresdefault.jpg"
          alt=""
        />
           <div>
      {/* HOME Link */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "0px",
          height: "50px",
        }}
      >
        <Link
          to={"/"}
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <LiaHomeSolid
            style={{
              fontSize: "25px",
              marginLeft: "28px",
              color: getColor("/"),
              cursor: "pointer",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#F1F1F1")}
            onMouseLeave={(e) => (e.target.style.color = getColor("/"))}
          />
          <h3
            style={{
              color: getColor("/"),
              marginLeft: "17px",
              cursor: "pointer",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#F1F1F1")}
            onMouseLeave={(e) => (e.target.style.color = getColor("/"))}
          >
            HOME
          </h3>
        </Link>
      </div>

      {/* SONGS Link */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "0px",
          height: "50px",
        }}
      >
        <Link
          to={"/songs"}
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <IoSearch
            style={{
              fontSize: "25px",
              marginLeft: "28px",
              color: getColor("/songs"),
              cursor: "pointer",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#F1F1F1")}
            onMouseLeave={(e) => (e.target.style.color = getColor("/songs"))}
          />
          <h3
            style={{
              color: getColor("/songs"),
              marginLeft: "17px",
              cursor: "pointer",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#F1F1F1")}
            onMouseLeave={(e) => (e.target.style.color = getColor("/songs"))}
          >
            Song
          </h3>
        </Link>
      </div>
    </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "black",
          borderRadius: "6px",
          margin: "5px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "0px",
            height: "50px",
          }}
        >
          {/* YOUR LIBRARY Link */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "0px",
          height: "50px",
        }}
      >
        <Link
          to={"/myfavorite"}
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <VscLibrary
            style={{
              fontSize: "25px",
              marginLeft: "28px",
              color: getColor("/myfavorite"),
              cursor: "pointer",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#F1F1F1")}
            onMouseLeave={(e) => (e.target.style.color = getColor("/myfavorite"))}
          />
          <h3
            style={{
              color: getColor("/myfavorite"),
              marginLeft: "17px",
              cursor: "pointer",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#F1F1F1")}
            onMouseLeave={(e) => (e.target.style.color = getColor("/myfavorite"))}
          >
            Your Library
          </h3>
        </Link>
      </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "gray",
            borderRadius: "6px",
            margin: "20px",
            paddingTop: "20px",
            paddingBottom: "55px",
          }}
        >
          <h3 style={{ color: "white", height: "30px", margin: "auto" }}>
            Create your first playlist
          </h3>
          <h4 style={{ color: "white", height: "30px", margin: "auto" }}>
            It's easy we will help you
          </h4>
          <button
      style={{
        width: "80%",
        borderRadius: "25px",
        backgroundColor: "#ffffff", // Default background color
        border: "none",
        margin: "20px auto",
        color: "black", // Default text color
        fontWeight: "bold",
        padding: "10px",
        fontSize: "17px",
        display: "block",
        marginTop: "30px",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Smooth zoom effect
        transform: isHovered ? "scale(1.1)" : "scale(1)", // Scale up on hover
        boxShadow: isHovered
          ? "0 6px 12px rgba(0, 0, 0, 0.2)" // Shadow on hover
          : "none", // No shadow by default
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Create Playlist
    </button>
        </div>

        <div
          style={{
            backgroundColor: "black",
            borderRadius: "6px",
            margin: "auto",
            height: "140px",
            marginTop: "50px",
            textAlign: "center",
          }}
        >
          <a
            style={{
              textDecoration: "none",
              color: "#787878",
              marginLeft: "0px",
            }}
            href=""
          >
            Legal
          </a>
          <a
            style={{
              textDecoration: "none",
              color: "#787878",
              marginLeft: "10px",
            }}
            href=""
          >
            Privacy Center
          </a>
          <a
            style={{
              textDecoration: "none",
              color: "#787878",
              marginLeft: "10px",
            }}
            href=""
          >
            Privacy Policy
          </a>
          <a
            style={{
              textDecoration: "none",
              color: "#787878",
              marginLeft: "10px",
            }}
            href=""
          >
            Cookies
          </a>
          <a
            style={{
              textDecoration: "none",
              color: "#787878",
              marginLeft: "10px",
            }}
            href=""
          >
            About App
          </a>
          <a
            style={{
              textDecoration: "none",
              color: "#787878",
              marginLeft: "10px",
            }}
            href=""
          >
            Accessibilty
          </a>
        </div>
      </div>
    </div>
  );
}
