import React from 'react';
import '../styles/index.css';

const description =
	'Official Website for Spencer Raymond | Spencer Raymond is an Indie-Pop artist from Melbourne, Australia.';

const IndexPage = () => {
	return (
		<div className='splash-container splash-bg'>
			<h1 className='splash-text'>Spencer Raymond</h1>
			<p className='splash-text'>2024</p>
		</div>
	);
};

export default IndexPage;

export function Head() {
	return (
		<>
			<meta name='description' content={description} />
			<meta name='twitter:card' content='summary' />
			<meta name='twitter:creator' content='spencerr69' />
			<meta name='twitter:title' content='Spencer Raymond' />
			<meta name='twitter:url' content='https://spencerraymon.de/' />
			<meta name='twitter:description' content={description}></meta>
			<title>Spencer Raymond</title>
		</>
	);
}

const filter = (
	<>
		<svg>
			<filter id='noiseFilter'>
				<feTurbulence
					type='fractalNoise'
					baseFrequency='2.3'></feTurbulence>
			</filter>
			<rect width='100%' height='100%' filter='url(#noiseFilter)'></rect>
		</svg>
	</>
);
