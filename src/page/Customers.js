import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, getAll } from '../redux/actions/tableActionCreator';

const Customers = () => {
	let dispatch = useDispatch();
	const data = useSelector((state) => state);

	useEffect(() => {
		dispatch(getAll());
		console.log(data);
	}, []);

	return (
		<table>
			<thead>
				<tr>
					<th>id</th>
					<th>Contact Title</th>
					<th>Contact Name</th>
					<th>Company Name</th>
					<th>Delete</th>
				</tr>
			</thead>
			<tbody>
				{data &&
					data.map((tr) => (
						<tr key={tr.id}>
							<td>{tr.id}</td>
							<td>{tr.companyName}</td>
							<td>{tr.contactName}</td>
							<td>{tr.contactTitle}</td>
							<button onClick={() => dispatch(deleteItem(tr))}>Delete</button>
						</tr>
					))}
			</tbody>
		</table>
	);
};

export default Customers;
