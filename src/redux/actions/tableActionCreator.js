import { ADD, DELETE } from './table.action.js';

export const add = (todo) => {
	return {
		type: ADD,
		payload: todo,
	};
};

export const deleteItem = (todo) => {
	return {
		type: DELETE,
		payload: todo,
	};
};

export const getAll = () => {
	return async (dispatch) => {
		fetch('https://northwind.vercel.app/api/customers')
			.then((res) => res.json())
			.then((data) => {
				dispatch({ type: 'GET_ALL_TODOS', payload: data });
			});
	};
};


