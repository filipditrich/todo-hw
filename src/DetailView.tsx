import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from './App';
import { useApiWithSuspense } from './common/apiClient';
import { ITodo } from './interfaces/ITodo';

/**
 * Task detail view
 * @return {JSX.Element}
 * @constructor
 */
const DetailView: React.FC = () => {
	// contextual data
	const { data } = useContext(AppContext);
	const { id } = useParams<Record<'id', string>>();
	const { data: detail } = useApiWithSuspense<ITodo>({
		url: `/todos/${ id }`,
		method: 'GET',
	});
	
	/**
	 * Task footer for Detail view
	 * @return {JSX.Element}
	 * @constructor
	 */
	const TaskFooter: React.FC = () => {
		const curr = data.findIndex((task) => task.id === detail.id);
		const prev = curr >= 1 && data[curr - 1];
		const next = curr < data.length - 1 && data[curr + 1];
		
		return (
				<footer className="w-100 d-flex justify-content-between align-items-center">
					{/* prev button */ }
					{
						prev && (
								<Link to={ `/${ prev.id }` } className="btn btn-outline-secondary">
									Previous task
								</Link>
						)
					}
					
					{/* next button */ }
					{
						next && (
								<Link to={ `/${ next.id }` } className={ `btn btn-outline-secondary${ !prev ? ' ml-auto' : '' }` }>
									Next task
								</Link>
						)
					}
				</footer>
		);
	};
	
	return (
			<>
				<header className="d-flex align-items-center mb-3">
					<Link to='/' className="btn btn-sm btn-outline-secondary">
						&lt; Back
					</Link>
					<h2 className="ml-2">Task detail</h2>
				</header>
				<dl>
					<dt>Task ID:</dt>
					<dd>{ detail.id }</dd>
					<dt>Task title:</dt>
					<dd>{ detail.title }</dd>
					<dt>Task completed:</dt>
					<dd>{ detail.completed ? 'Yes' : 'No' }</dd>
				</dl>
				<TaskFooter />
			</>
	);
};

export default DetailView;
