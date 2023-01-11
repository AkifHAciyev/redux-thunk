import { ADD, DELETE } from '../actions/table.action';

const tableReducer = (state = [], action) => {
	switch (action.type) {
		case ADD:
			return [...state, { id: new Date().toISOString(), text: action.payload }];
		case DELETE:
			return state.filter((i) => i.id !== action.payload.id);
		case 'GET_ALL_TODOS':
			return [...action.payload];
		default:
			return state;
	}
};

export default tableReducer;
