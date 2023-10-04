import React from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";
import Dummy from "../Components/dummy";
import Add from "../Components/signupad";
import Browser from "../Components/browser";

import Songs from "./Songs";
import Cookies from "js-cookie";
import Player from "./Player";

import "../Pages/css/home.css";

export default function Home() {
  const token = Cookies.get("login_token");
  console.log(token, "Token");
  return (
    <>
      <div id="main">
        <div id="sidebar" style={{ height: "100%" }}>
          <Sidebar />
        </div>

        <div id="navbar">
          <Navbar />
        </div>
      </div>
      
      <div id="browse">
        <Browser />

        {/* <Songs/> */}
        {/* <Dummy/> */}
      </div>
      <Footer />
      <div
        id="player"
        style={{
          position: "fixed",
          marginLeft: "0px",
          bottom: 0,
          width: "100%",
        }}
      >
        {token ? (
          <Player
            index={0}
            songs={[
              {
                title: "Lute Gaye",
                audio:
                  "https://pagalworld4u.in/download/get.php?id=Lut%20Gaye%20Song%20Jubin%20Nautiyal.mp3",
                avatar:
                  "https://pagalworld4u.in/wp-content/uploads/2021/12/Lut-Gaye-Song-Download-Mp3-Jubin-Nautiyal.jpg",
                id: 10,
                artist: "Jubin Nautiyal",
                genre: "Classical",
                language: "Hindi",
              }
            ]}
          />
        ) : (
          // ""
          <Add />
        )}
      </div>
    </>
  );
}
