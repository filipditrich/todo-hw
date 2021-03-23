import React from 'react';
import { Container } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { FallbackProps } from 'react-error-boundary';

/**
 * Error fallback UI
 * @param {Error} error
 * @param {(...args: unknown[]) => void} resetErrorBoundary
 * @return {JSX.Element}
 * @constructor
 */
const ErrorFallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
	return (
			<div className="error-overlay">
				<Container className="text-center">
					<h4>An error occurred!</h4>
					<pre>Error code: {error.name}</pre>
					<Button onClick={resetErrorBoundary} variant="primary">
						Reload
					</Button>
				</Container>
			</div>
	);
}

export default ErrorFallback;
