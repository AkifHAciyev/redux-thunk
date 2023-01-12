import { toast } from 'react-toastify';
import { ADD, DELETE } from '../actions/table.action';

const tableReducer = (state = [], action) => {
	switch (action.type) {
		case ADD:
			if (state.filter((q) => q.id === action.payload.id)) {
				toast.success('Added to favorites list', { autoClose: 1000 });
				return [...state, action.payload];
			} else {
				toast.error('Deleted from favorites list', { autoClose: 1000 });
				return [...state.filter((q) => q.id !== action.payload.id)];
			}
		case DELETE:
			return state.filter((i) => i.id !== action.payload.id);
		case 'GET_ALL_TODOS':
			return [...action.payload];
		case 'DELETE_ALL':
			return [];
		default:
			return state;
	}
};

export default tableReducer;
