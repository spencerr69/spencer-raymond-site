import React from 'react';
import '../styles/index.css';

const IndexPage = () => {
	return (
		<div className='splash-container'>
			<h1 className='splash-text'>Spencer Raymond</h1>
			<p className='splash-text'>coming soon</p>
		</div>
	);
};

export default IndexPage;

export function Head() {
	return (
		<>
			<meta
				name='description'
				content='Official Website for Spencer Raymond | Spencer Raymond is a Pop act from Melbourne, Australia.'
			/>
			<meta name='twitter:card' content='summary' />
			<meta name='twitter:site' content='spencerr69' />
			<meta name='twitter:title' content='Spencer Raymond' />
			<meta
				name='twitter:description'
				content='Official Website for Spencer Raymond | Spencer Raymond is a Pop act from Melbourne, Australia.'></meta>
			<title>Spencer Raymond</title>
		</>
	);
}
