import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAll, deleteFav } from '../redux/actions/favoritesActionCreator';

const Favorite = () => {
	let favorite = useSelector((state) => state.favoritesReducer);

	let dispatch = useDispatch();

	return (
		<table>
			<thead>
				<tr>
					<th>id</th>
					<th>Contact Title</th>
					<th>Contact Name</th>
					<th>Company Name</th>
					<th>Delete from favorite</th>
					<th>
						<button onClick={() => dispatch(deleteAll())}>Delete All</button>
					</th>
				</tr>
			</thead>
			<tbody>
				{favorite &&
					favorite.map((tr) => (
						<tr key={tr.id}>
							<td>{tr.id}</td>
							<td>{tr.companyName}</td>
							<td>{tr.contactName}</td>
							<td>{tr.contactTitle}</td>
							<td>
								<button onClick={() => dispatch(deleteFav(tr))}>Favorites</button>
							</td>
						</tr>
					))}
			</tbody>
		</table>
	);
};

export default Favorite;
