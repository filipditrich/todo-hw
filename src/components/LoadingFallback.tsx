import React from "react";
import { Container, Spinner } from 'react-bootstrap';

/**
 * Loading fallback UI
 * @return {JSX.Element}
 * @constructor
 */
const LoadingFallback: React.FC = () => {
	return (
			<div className="loading-overlay">
				<Container className="d-flex flex-column align-items-center">
					<Spinner animation="grow" />
					<span className="mt-3">Loading...</span>
				</Container>
			</div>
	);
}

export default LoadingFallback;
