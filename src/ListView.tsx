import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { AppContext } from './App';
import Todo from './components/Todo';

const ListView: React.FC = () => {
	// extract data form context
	const { data } = useContext(AppContext);
	
	return (
			<>
				<h2>Your tasks:</h2>
				<ListGroup>
					{
						data.map((todo) => <Todo key={ todo.id } { ...todo } />)
					}
				</ListGroup>
			</>
	);
};

export default ListView;
