import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/index.css";
import "../styles/presskit.css";
import favicon from "../images/favicon.png";
import DB from "../images/deepBreaths.jpg";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";

const description =
  "Electronic Press Kit of Spencer Raymond, an indie-electronic rock artist from Melbourne.";

export function Head() {
  return (
    <>
      <title>Spencer Raymond | Electronic Press Kit</title>
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

const PressKit = () => {
  return (
    <>
      <main>
        <div className="splashBGPK splashContainer">
          <div className="epkContainer">
            <div className="leftEPK">
              <div className="topSec">
                <Link to="/" className="hLink">
                  <h1 className="headingPK">Spencer Raymond</h1>
                </Link>
                <p className="italics flavour">
                  Indie-Electronic Rock artist from Melbourne, Australia.
                </p>

                <p className="socialLinks linksPK">
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
                  </OutboundLink>
                </p>
              </div>
              <div className="bioSec">
                <p>
                  Home-grown in Melbourne, Australia, indie-electronic rock
                  artist Spencer Raymond emerges as a captivating force within
                  contemporary music. With a soul-stirring blend of
                  introspective lyricism and evocative soundscapes, Spencer
                  crafts sonic narratives that resonate with raw authenticity
                  and profound emotional depth. <br />
                  Drawing from his own lived experiences and keen observations
                  of the human condition, Spencer has cultivated a distinctive
                  musical voice that speaks directly to the hearts and minds of
                  listeners worldwide. His compositions serve as poignant
                  reflections on the tumultuous journey through young adulthood,
                  offering a nuanced exploration of love, loss, and
                  self-discovery. <br />
                  At the core of Spencer's artistry lies his uncanny ability to
                  lay bare the complexities of relationships with fearless
                  vulnerability and unapologetic honesty. Through his evocative
                  singles, "DESERVE IT" and "Deep Breaths," Spencer fearlessly
                  confronts themes of abuse and insecurity, inviting audiences
                  to confront the darker corners of the human psyche while
                  simultaneously offering a beacon of hope and resilience.
                  <br />
                  With each haunting melody and poignant verse, Spencer invites
                  listeners on a transformative journey of introspection and
                  catharsis, challenging them to confront their own fears and
                  insecurities with courage and grace. His music serves as a
                  mirror to the soul, reflecting the universal struggles and
                  triumphs that define the human experience. <br />
                  As anticipation mounts for his forthcoming album release in
                  late 2024, Spencer remains steadfast in his commitment to
                  pushing artistic boundaries and forging a deeper connection
                  with his audience. With his unyielding passion for
                  storytelling and his unwavering dedication to his craft,
                  Spencer Raymond stands poised to leave an indelible mark on
                  the world of music, inspiring countless souls to embrace their
                  truth and find solace in the power of his melodies.
                </p>
              </div>
            </div>
            <div className="rightEPK">
              <div className="gallery">
                <StaticImage
                  className="galleryImg"
                  src="../images/selfie.jpg"
                  alt="Spencer Raymond"
                  placeholder="blurred"
                  width={3000}
                  height={3000}
                />
                <StaticImage
                  className="galleryImg"
                  src="../images/sorry16.jpg"
                  alt="Sorry Sixteen Artwork"
                  placeholder="blurred"
                  width={3000}
                  height={3000}
                />
                <OutboundLink href="https://ffm.to/srdeepbreaths">
                  <StaticImage
                    className="galleryImg"
                    src="../images/deepBreaths.jpg"
                    alt="Deep Breaths Artwork"
                    placeholder="blurred"
                    width={3000}
                    height={3000}
                  />
                </OutboundLink>
                <OutboundLink href="https://ffm.to/srdeserveit">
                  <StaticImage
                    className="galleryImg"
                    src="../images/deserveIt.png"
                    alt="DESERVE IT Artwork"
                    placeholder="blurred"
                    width={3000}
                    height={3000}
                  />
                </OutboundLink>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PressKit;
