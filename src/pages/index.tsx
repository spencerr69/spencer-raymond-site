import React, { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import '../styles/index.css';
import favicon from '../images/favicon.png';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { graphql, Link, PageProps } from 'gatsby';
import { links } from '../consts/vars';
import amtpo from '../images/amtpo.jpg';
import { useSiteMetadata } from '../hooks/use-site-metadata';

//head gatsby stuff
export function Head() {
   const { title, description } = useSiteMetadata();
   return (
      <>
         <title>{title}</title>
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
         <meta property="og:title" content={title} />
         <meta property="og:description" content={description} />
         <meta property="og:image" content={'https://spencerraymon.de' + amtpo} />
         {/* <!-- Twitter --> */}
         <meta property="twitter:card" content="summary_large_image" />
         <meta property="twitter:url" content={'https://spencerraymon.de'} />
         <meta property="twitter:title" content={title} />
         <meta property="twitter:description" content={description} />
         <meta property="twitter:image" content={'https://spencerraymon.de' + amtpo}></meta>
         <html lang="en" />
      </>
   );
}

export type Release = {
   title: string;
   UPC: string;
   albumArt: {
      asset: {
         gatsbyImageData: IGatsbyImageData;
         metadata: {
            palette: {
               muted: {
                  background: string;
               };
            };
         };
      };
   };
   link: string;
   releaseDate: string;
};

//for leftList
const ListItem = (props: { children: any; onMouseOver: () => void }) => {
   return (
      <div className="listLink" onMouseOver={props.onMouseOver}>
         {props.children}
      </div>
   );
};

const parseReleaseDate = (input: string): string => {
   const temp = input.split('-');

   return `${temp[0]}/${temp[1]}/${temp[2]}`;
};

//main function
const IndexPage = ({ data }: PageProps<Queries.ReleaseQueryQuery>) => {
   const [isMobile, setIsMobile] = useState(false);
   const [currentSelection, setCurrentSelection] = useState(0);
   const [albumArtworks, setAlbumArtworks] = useState<ReactElement[]>([]);
   const [albumLinks, setAlbumLinks] = useState<ReactElement[]>([]);
   const [albumMetadata, setAlbumMetadata] = useState<{ colour: string; title: string }[]>([]);

   useEffect(() => {
      const mobileMediaQuery = matchMedia('(max-width: 800px)');

      const listener = () => {
         setIsMobile(mobileMediaQuery.matches);
      };

      mobileMediaQuery.addEventListener('change', listener);

      listener();

      return () => mobileMediaQuery.removeEventListener('change', listener);
   }, []);

   const mainRef = useRef<HTMLDivElement>(null);

   const mouseMoveHandle = useCallback(
      (e: any) => {
         if (!mainRef.current) {
            return;
         }

         if (!isMobile) {
            const size = (Math.max(innerWidth, innerHeight) / 50) * -1;
            const pageX = (e.clientX - window.innerWidth / 2) / size,
               pageY = (e.clientY - window.innerHeight / 2) / size;

            mainRef.current.querySelectorAll('.shit').forEach((element) => {
               const scale = +(element.getAttribute('data-parallax-scale') ?? '1');

               (element as HTMLElement).style.transform = `translateX(${pageX * scale}px) translateY(${
                  pageY * scale
               }px)`;
            });
         }
      },
      [isMobile]
   );

   useEffect(() => {
      const releases = data.allSanityRelease.nodes as Release[];

      releases.sort((a, b) => {
         return new Date(a.releaseDate) < new Date(b.releaseDate) ? 1 : -1;
      });

      setAlbumArtworks(
         releases.map((release) => {
            return (
               <GatsbyImage
                  alt={`${release.title}`}
                  image={release.albumArt.asset.gatsbyImageData}
                  key={release.UPC}
                  className={'showImage'}
               />
            );
         })
      );
      setAlbumLinks(
         releases.map((release, i) => {
            return (
               <OutboundLink href={release.link} className="listItem">
                  <ListItem onMouseOver={() => setCurrentSelection(i)} key={release.UPC}>
                     {release.title}
                     <br />
                     <span className="italics listLink">{parseReleaseDate(release.releaseDate)}</span>
                  </ListItem>
               </OutboundLink>
            );
         })
      );
      setAlbumMetadata(
         releases.map((release) => {
            return { colour: release.albumArt.asset.metadata.palette.muted.background, title: release.title };
         })
      );
   }, []);

   return (
      <main ref={mainRef}>
         <div
            className="noisyBG"
            style={{
               backgroundColor: !albumMetadata[currentSelection] ? '#000' : albumMetadata[currentSelection].colour,
            }}
         ></div>
         <div className="splashBG splashContainer" onMouseMove={mouseMoveHandle}>
            <div className="leftList">
               <div className="listContainer shit" data-parallax-scale={0.2}>
                  <div className="titleBar">
                     <h1>Spencer Raymond</h1>
                     <div className="socialLinks">
                        {links.map((link, i) => (
                           <div key={i} className="social">
                              <OutboundLink href={link.url}>{link.name}</OutboundLink>
                           </div>
                        ))}
                        <div className="social">
                           <Link to="/presskit">Press Kit</Link>
                        </div>
                     </div>
                  </div>
                  {albumLinks}
               </div>
            </div>
            {isMobile ? (
               <></>
            ) : (
               <div className="rightShow">
                  <div>
                     <div className="showContainer">
                        <div className="imageDiv shit" data-parallax-scale={1}>
                           {albumArtworks[currentSelection]}
                           <div className="headingDiv shit" data-parallax-scale={2}>
                              <h3 className="showText">
                                 {!albumMetadata[currentSelection] ? '' : albumMetadata[currentSelection].title}
                              </h3>
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

export const query = graphql`
   query ReleaseQuery {
      allSanityRelease {
         nodes {
            title
            releaseDate
            link
            UPC
            albumArt {
               asset {
                  gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 1000, height: 1000)
                  metadata {
                     palette {
                        muted {
                           background
                        }
                     }
                  }
               }
            }
         }
      }
   }
`;

export default IndexPage;
