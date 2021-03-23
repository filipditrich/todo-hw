import React, { createContext } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useApiWithSuspense } from './common/apiClient';
import DetailView from './DetailView';
import { ITodo } from './interfaces/ITodo';
import ListView from './ListView';

/**
 * App context
 * @type {React.Context<{data: ITodo[]}>}
 */
export const AppContext = createContext<{ data: ITodo[] }>({
	data: [],
});

/**
 * Main App
 * @return {JSX.Element}
 * @constructor
 */
const App: React.FC = () => {
	// contextual data
	const { data } = useApiWithSuspense<ITodo[]>({
		url: '/todos',
		method: 'GET',
		// for demo purposes, lets just assume we are authenticated  and our `userId` is 1
		params: {
			userId: 1
		}
	});
	
	return (
			<AppContext.Provider value={{ data }}>
				<Container className="py-5">
					<Router>
						<Route exact path='/:id' component={DetailView} />
						<Route exact path="/" component={ListView} />
					</Router>
				</Container>
			</AppContext.Provider>
	);
};

export default App;
