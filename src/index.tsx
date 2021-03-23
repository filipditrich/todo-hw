import React from 'react';
import ReactDOM from 'react-dom';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import App from './App';
import ErrorFallback from './components/ErrorFallback';
import LoadingFallback from './components/LoadingFallback';
import './index.scss';

// render app
ReactDOM.render(
		<React.StrictMode>
			<ErrorBoundary fallbackRender={ (props: FallbackProps) => <ErrorFallback { ...props } /> }>
				<React.Suspense fallback={ <LoadingFallback /> }>
					<App />
				</React.Suspense>
			</ErrorBoundary>
		</React.StrictMode>,
		document.getElementById('root')
);
