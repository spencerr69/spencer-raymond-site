import React, { useEffect, useState } from 'react';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import '../styles/index.scss';
import '../styles/presskit.scss';
import favicon from '../images/favicon.png';
import amtpo from '../images/amtpo.jpg';
import { graphql, Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { PortableText } from '@portabletext/react';
import { links } from '../consts/vars';
import { Release } from './index';

const description = 'Electronic Press Kit of Spencer Raymond, an indie-electronic rock artist from Melbourne.';

export function Head() {
   return (
      <>
         <title>Spencer Raymond | Electronic Press Kit</title>
         <meta name="description" content={description} />
         <meta name="keywords" content="pop, music, art, artist, alternative, electronic, country, indie, acoustic" />
         <meta name="robots" content="index, follow" />
         <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
         <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
         <meta name="language" content="English" />
         <meta name="revisit-after" content="50 days" />
         {/*<!-- Open Graph / Facebook -->*/}
         <meta property="og:type" content="website" />
         <meta property="og:url" content={`https://spencerraymon.de`} />
         <meta property="og:title" content={'Spencer Raymond'} />
         <meta property="og:description" content={description} />
         <meta property="og:image" content={'https://spencerraymon.de' + amtpo} />
         {/* <!-- Twitter --> */}
         <meta property="twitter:card" content="summary_large_image" />
         <meta property="twitter:url" content={'https://spencerraymon.de'} />
         <meta property="twitter:title" content={'Spencer Raymond'} />
         <meta property="twitter:description" content={description} />
         <meta property="twitter:image" content={'https://spencerraymon.de' + amtpo}></meta>
      </>
   );
}

const PressKit = ({ data }: { data: any }) => {
   const [bio, setBio] = useState<any[]>([]);
   const [images, setImages] = useState<any[]>([]);

   useEffect(() => {
      setBio(data.sanitySiteSettings._rawBio);

      const releases: Release[] = data.allSanityRelease.nodes;
      releases.sort((a, b) => {
         return new Date(a.releaseDate) < new Date(b.releaseDate) ? 1 : -1;
      });

      setImages(
         [<StaticImage src="../images/selfie.jpg" alt="spencer raymond" />].concat(
            releases.map((release) => {
               return (
                  <GatsbyImage
                     alt={`${release.title}`}
                     image={release.albumArt.asset.gatsbyImageData}
                     key={release.UPC}
                  />
               );
            })
         )
      );
   }, []);

   return (
      <>
         <main style={{ backgroundColor: '#222' }}>
            <div className="splashBGPK splashContainer">
               <div className="epkContainer">
                  <div className="leftEPK">
                     <div className="topSec">
                        <Link to="/" className="hLink">
                           <h1 className="headingPK">Spencer Raymond</h1>
                        </Link>
                        <p className="italics flavour">Indie-Electronic Rock artist from Melbourne, Australia.</p>

                        <div className="socialLinks linksPK">
                           {links.map((link, i) => (
                              <div key={i} className="social">
                                 <OutboundLink href={link.url}>{link.name}</OutboundLink>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div className="bioSec">
                        <PortableText value={bio} onMissingComponent={false} />
                     </div>
                  </div>
                  <div className="rightEPK">
                     <div className="gallery">{images}</div>
                  </div>
               </div>
            </div>
         </main>
      </>
   );
};

export const query = graphql`
   query BioQuery {
      allSanityRelease {
         nodes {
            title
            releaseDate
            UPC
            albumArt {
               asset {
                  gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 1000, height: 1000)
               }
            }
         }
      }

      sanitySiteSettings {
         _rawBio
      }
   }
`;

export default PressKit;
