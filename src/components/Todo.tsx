import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { ITodo } from '../interfaces/ITodo';

/**
 * Todo component
 * @param {number} id
 * @param {boolean} completed
 * @param {string} title
 * @return {JSX.Element}
 * @constructor
 */
const Todo: React.FC<ITodo> = ({ id, completed, title }) => {
	return (
			<ListGroup.Item key={ id } className="d-flex justify-content-between">
				{
					completed ? <s>{ title }</s> : <span>{ title }</span>
				}
				<Link to={ `/${ id }` } className="btn btn-sm btn-secondary">
					Detail
				</Link>
			</ListGroup.Item>
	);
};

export default Todo;
