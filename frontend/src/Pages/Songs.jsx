import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";
import Dummy from "../Components/dummy";
import Add from "../Components/signupad";
import Browser from "../Components/browser";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./Songs.css";
import Player from "./Player";
import Cookies from "js-cookie";
import { useSearchParams } from "react-router-dom";

export default function Songs() {
  const token = Cookies.get("login_token");
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);
  const [hoveredSong, setHoveredSong] = useState(null);
  const [liked, setLiked] = useState(false);

  const [index, setIndex] = useState(0);
  let URL = `http://localhost:8080/songs/`;
  const fetchSongs = () => {
    axios.get(URL).then((res) => setSongs(res.data.data));
  };
  useEffect(() => {
    fetchSongs();
  }, []);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <>
      <>
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ width: "23%", position: "fixed" }}>
            <Sidebar />
          </div>

          <div
            style={{
              left: "23%",
              width: "77%",
              position: "fixed",
              zIndex: "2",
            }}
          >
            <Navbar />
          </div>
          {/* <=====================Display data====================> */}
          <Box
            marginLeft={"23%"}
            marginTop={"70px"}
            padding={"5px"}
            backgroundColor={"#2C2C2C"}
            zIndex={"0"}
          >
            <SimpleGrid columns={4} spacing={10}>
              {songs.length > 0 ? (
                songs.map((ele, index) => (
                  <Box className="hover" marginBottom={2}>
                    <Box
                      backgroundColor={"black"}
                      color={"white"}
                      // marginBottom={2}
                      borderRadius={"10px"}
                      height={280}
                    >
                      <Image
                        src={ele.avatar}
                        alt={ele.title}
                        borderTopRadius={"10px"}
                        width={400}
                        height={200}
                      />
                       

                      <Heading size={"md"} paddingLeft={2}>
                        {ele.title}
                      </Heading>
                      <Text paddingLeft={2}>{ele.artist}</Text>
                    </Box>

                    <Box >
                      <Button
                        className="hover-button"
                        borderRadius={"50%"}
                        display={"none"}
                        marginTop={"-150px"}
                        marginLeft={"150px"}
                        position={"absolute"}
                        backgroundColor="green"
                        color={"black"}
                        onClick={() => setIndex(index)}
                      >
                        <FontAwesomeIcon icon={faPlay} />
                      </Button>
                      <Button
                        className={`like-button ${liked ? "liked" : ""}`
                      }
                      // borderRadius={"50%"}
                        // display={"none"}
                        marginTop={"-280px"}
                        marginRight={"150px"}
                        position={"absolute"}
                        backgroundColor="transparent"
                        // color={"white"}
                        onClick={toggleLike}
                      >
                        <FontAwesomeIcon icon={faHeart}  />
                        Like
                      </Button>
                     
                    </Box>
                  </Box>
                ))
              ) : (
                <Box></Box>
              )}
            </SimpleGrid>
          </Box>
        </div>

        <Footer />
        <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
          {token ? (
            <Player index={index} />
          ) : (
            // ""
            <Add />
          )}
        </div>
      </>
    </>
  );
}
