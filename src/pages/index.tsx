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
	return <title>Spencer Raymond</title>;
}
