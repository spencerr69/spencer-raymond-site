declare module '*.png' {
	const value: any;
	export = value;
}

declare module '*.jpg' {
	const value: any;
	export = value;
}

declare module '*.json' {
	const value: Release[];
	export default value;
}

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
