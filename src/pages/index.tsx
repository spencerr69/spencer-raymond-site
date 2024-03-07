import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/index.css";
import favicon from "../images/favicon.png";
import DB from "../images/deepBreaths.jpg";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { Link } from "gatsby";

const description =
  "Official Website for Spencer Raymond | Spencer Raymond is an Indie-Electronic Rock artist from Melbourne, Australia.";

export function Head() {
  return (
    <>
      <title>Spencer Raymond</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="pop, music, art, artist, alternative, electronic, country, indie, acoustic"
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="50 days" />
      {/*<!-- Open Graph / Facebook -->*/}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://spencerraymon.de`} />
      <meta property="og:title" content={"Spencer Raymond"} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={"https://spencerraymon.de" + DB} />
      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={"https://spencerraymon.de"} />
      <meta property="twitter:title" content={"Spencer Raymond"} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content={"https://spencerraymon.de" + DB}
      ></meta>
    </>
  );
}

const ListItem = (props: {
  itemID: number;
  children: any;
  stateFunc: Function;
}) => {
  return (
    <div
      className="listItem"
      onMouseOver={() => {
        props.stateFunc(props.itemID);
        console.log("changed to " + props.itemID);
      }}
    >
      {props.children}
    </div>
  );
  5;
};

const IndexPage = () => {
  const [currentSelection, setCurrentSelection] = useState(0);
  const [width, setWindowWidth] = useState(0);

  React.useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const responsive = {
    isMobile: width < 800,
  };

  const deepBreathsRefs: any = {
    layerOne: React.useRef(null),
    layerTwo: React.useRef(null),
  };
  const deserveItRefs: any = {
    layerOne: React.useRef(null),
    layerTwo: React.useRef(null),
  };

  const mouseMoveHandle = (e: any) => {
    if (!responsive.isMobile) {
      var pageX = e.clientX - window.innerWidth / 2,
        pageY = e.clientY - window.innerHeight / 2;

      deepBreathsRefs.layerOne.current.style.transform =
        "translateX(-" +
        (2.5 + pageX / 200) +
        "%) translateY(-" +
        (2.5 + pageY / 200) +
        "%)";
      deepBreathsRefs.layerTwo.current.style.transform =
        "translateX(-" +
        (2.5 + pageX / 500) +
        "%) translateY(-" +
        (2.5 + pageY / 500) +
        "%)";
      deserveItRefs.layerOne.current.style.transform =
        "translateX(-" +
        (2.5 + pageX / 200) +
        "%) translateY(-" +
        (2.5 + pageY / 200) +
        "%)";
      deserveItRefs.layerTwo.current.style.transform =
        "translateX(-" +
        (2.5 + pageX / 500) +
        "%) translateY(-" +
        (2.5 + pageY / 500) +
        "%)";

      layerFour.current.style.transform =
        "translateX(-" +
        (2.5 + pageX / 1000) +
        "%) translateY(-" +
        (2.5 + pageY / 1000) +
        "%)";
    }
  };

  let layerFour: any = React.useRef(null);

  return (
    <main>
      <div
        className="splashBG splashContainer"
        onMouseMove={(e) => mouseMoveHandle(e)}
      >
        <div className="leftList">
          <div className="listContainer" id="layer-4" ref={layerFour}>
            <div className="titleBar">
              <h1>Spencer Raymond</h1>
              <p className="socialLinks">
                <OutboundLink
                  href="https://twitter.com/spencerr69"
                  className="social"
                >
                  Twitter
                </OutboundLink>{" "}
                |{" "}
                <OutboundLink
                  href="https://instagram.com/spencerr69420"
                  className="social"
                >
                  Instagram
                </OutboundLink>{" "}
                |{" "}
                <OutboundLink
                  href="https://tiktok.com/@spencerr69420"
                  className="social"
                >
                  TikTok
                </OutboundLink>{" "}
                |{" "}
                <OutboundLink
                  href="https://spencerr69.bandcamp.com"
                  className="social"
                >
                  Bandcamp
                </OutboundLink>{" "}
                |{" "}
                <OutboundLink
                  href="https://open.spotify.com/artist/5DwfLPci515faDoJaZDOep"
                  className="social"
                >
                  Spotify
                </OutboundLink>{" "}
                |{" "}
                <OutboundLink
                  href="https://music.apple.com/us/artist/spencer-raymond/1667133405"
                  className="social"
                >
                  Apple Music
                </OutboundLink>{" "}
                |{" "}
                <Link to="/presskit" className="social">
                  Press Kit
                </Link>
              </p>
            </div>

            <ListItem itemID={1} stateFunc={setCurrentSelection}>
              <OutboundLink
                className="listLink"
                href="https://ffm.to/srdeepbreaths"
              >
                Deep Breaths
                <br />
                <span className="italics listLink">5th of January, 2024</span>
              </OutboundLink>
            </ListItem>
            <ListItem itemID={0} stateFunc={setCurrentSelection}>
              <OutboundLink
                className="listLink"
                href="https://ffm.to/srdeserveit"
              >
                DESERVE IT
                <br />
                <span className="italics listLink">3rd of February, 2023</span>
              </OutboundLink>
            </ListItem>
          </div>
        </div>
        {responsive.isMobile ? (
          <></>
        ) : (
          <div className="rightShow">
            <div>
              <div className="showContainer">
                <div
                  style={{
                    display: currentSelection == 1 ? "block" : "none",
                  }}
                >
                  <h3
                    id="layer-1"
                    ref={deepBreathsRefs.layerOne}
                    className="showText"
                  >
                    Deep Breaths
                  </h3>
                  <div ref={deepBreathsRefs.layerTwo}>
                    <StaticImage
                      src="../images/deepBreaths.jpg"
                      alt="Deep Breaths Artwork"
                      placeholder="blurred"
                      width={1000}
                      height={1000}
                      className="showImage"
                      layout="constrained"
                      imgStyle={{ zIndex: 0 }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: currentSelection == 0 ? "block" : "none",
                  }}
                >
                  <h3
                    id="layer-1"
                    className="showText"
                    ref={deserveItRefs.layerOne}
                  >
                    DESERVE IT
                  </h3>
                  <div ref={deserveItRefs.layerTwo}>
                    <StaticImage
                      src="../images/deserveIt.png"
                      alt="DESERVE IT Artwork"
                      placeholder="blurred"
                      width={1000}
                      height={1000}
                      className="showImage"
                      imgStyle={{ zIndex: 0 }}
                      id="layer-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default IndexPage;
