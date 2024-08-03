import React, { useEffect, useRef, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/index.css";
import favicon from "../images/favicon.png";
import DB from "../images/deepBreaths.jpg";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { Link } from "gatsby";
import { links } from "./links";

const description =
   "Official Website for Spencer Raymond | Spencer Raymond is an Indie-Electronic Rock artist from Melbourne, Australia.";

export function Head() {
   return (
      <>
         <title>Spencer Raymond</title>
         <meta name="description" content={description} />
         <meta name="keywords" content="pop, music, art, artist, alternative, electronic, country, indie, acoustic" />
         <meta name="robots" content="index, follow" />
         <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
         <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
         <meta name="language" content="English" />
         <meta name="revisit-nafter" content="50 days" />
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
         <meta property="twitter:image" content={"https://spencerraymon.de" + DB}></meta>
      </>
   );
}

const ListItem = (props: { children: any; onMouseOver: () => void }) => {
   return (
      <div className="listItem" onMouseOver={props.onMouseOver}>
         {props.children}
      </div>
   );
   5;
};

const IndexPage = () => {
   const [currentSelection, setCurrentSelection] = useState(0);

   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const mobileMediaQuery = matchMedia("(max-width: 800px)");

      const listener = () => {
         setIsMobile(mobileMediaQuery.matches);
      };

      mobileMediaQuery.addEventListener("change", listener);
      return () => mobileMediaQuery.removeEventListener("change", listener);
   }, []);

   const shit = useRef<HTMLDivElement>(null);

   const mouseMoveHandle = (e: any) => {
      if (!shit.current) {
         return;
      }

      if (!isMobile) {
         const size = Math.max(innerWidth, innerHeight) / 50;
         const pageX = (e.clientX - window.innerWidth / 2) / size,
            pageY = (e.clientY - window.innerHeight / 2) / size;

         shit.current.querySelectorAll(".shit").forEach((element) => {
            const scale = +(element.getAttribute("data-parallax-scale") ?? "1");

            (element as HTMLElement).style.transform = `translateX(${pageX * scale}px) translateY(${pageY * scale}px)`;
         });

         console.log("owo");
      }
   };

   return (
      <main ref={shit}>
         <div className="splashBG splashContainer" onMouseMove={mouseMoveHandle}>
            <div className="leftList">
               <div className="listContainer shit">
                  <div className="titleBar">
                     <h1>Spencer Raymond</h1>
                     <p className="socialLinks">
                        {links.map((link, i) => (
                           <div key={i} className="social">
                              <OutboundLink href={link.url}>{link.name}</OutboundLink>
                           </div>
                        ))}
                        <div className="social">
                           <Link to="/presskit">Press Kit</Link>
                        </div>
                     </p>
                  </div>

                  <ListItem onMouseOver={() => setCurrentSelection(1)}>
                     <OutboundLink className="listLink" href="https://ffm.to/amtpo">
                        A Moment To Pivot On
                        <br />
                        <span className="italics listLink">19th of July, 2024</span>
                     </OutboundLink>
                  </ListItem>
                  <ListItem onMouseOver={() => setCurrentSelection(0)}>
                     <OutboundLink
                        className="listLink"
                        href="https://release.studio/deep-breaths-the-music-and-the-misery-remix"
                     >
                        Deep Breaths (The Music and The Misery Remix)
                        <br />
                        <span className="italics listLink">15th of March, 2024</span>
                     </OutboundLink>
                  </ListItem>
               </div>
            </div>
            {isMobile ? (
               <></>
            ) : (
               <div className="rightShow">
                  <div>
                     <div className="showContainer">
                        <div style={{ display: "block" }}>
                           <div className="headingDiv shit" data-parallax-scale={0}>
                              {currentSelection == 1 ? (
                                 <h3 className="showText">A Moment To Pivot On</h3>
                              ) : (
                                 currentSelection == 0 && (
                                    <h3 className="showText">Deep Breaths (The Music and The Misery Remix)</h3>
                                 )
                              )}

                              <div className="imageDiv shit">
                                 {currentSelection == 1 ? (
                                    <StaticImage
                                       src="../images/amtpo.jpg"
                                       alt="AMTPO Artwork"
                                       placeholder="blurred"
                                       width={1000}
                                       height={1000}
                                       className="showImage"
                                       layout="constrained"
                                       imgStyle={{ zIndex: -1 }}
                                    />
                                 ) : (
                                    currentSelection == 0 && (
                                       <StaticImage
                                          src="../images/dbtmam.jpg"
                                          alt="Deep Breaths (The Music And The Misery Remix) Artwork"
                                          placeholder="blurred"
                                          width={1000}
                                          height={1000}
                                          className="showImage"
                                          layout="constrained"
                                          imgStyle={{ zIndex: -1 }}
                                       />
                                    )
                                 )}
                              </div>
                           </div>
                        </div>
                        {/* <div
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
              </div> */}
                        {/* <div
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
                </div> */}
                     </div>
                  </div>
               </div>
            )}
         </div>
      </main>
   );
};

export default IndexPage;
