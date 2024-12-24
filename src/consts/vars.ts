type Link = {
   url: string;
   name: string;
};

type Release = {
   name: string;
   releaseDate: string; //YYYY/MM/DD
   catalogNumber: string; //APXXXX
   artwork: string; //link to artwork
   tracklist: {
      trackName: string;
      trackNo: number;
   }[];
};

export const links: Link[] = [
   {
      url: 'https://bsky.app/profile/spencerraymon.de',
      name: 'Bluesky',
   },
   {
      url: 'https://twitter.com/spencerr69',
      name: 'Twitter',
   },
   {
      url: 'https://instagram.com/spencerr69420',
      name: 'Instagram',
   },
   {
      url: 'https://tiktok.com/@spencerr69420',
      name: 'TikTok',
   },
   {
      url: 'https://spencerr69.bandcamp.com',
      name: 'Bandcamp',
   },
   {
      url: 'https://open.spotify.com/artist/5DwfLPci515faDoJaZDOep',
      name: 'Spotify',
   },
   {
      url: 'https://music.apple.com/us/artist/spencer-raymond/1667133405',
      name: 'Apple Music',
   },
   {
      url: 'https://soundcloud.com/spencerraymond',
      name: 'Soundcloud',
   },
];

export const releases: Release[] = [];
