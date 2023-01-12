const tableReducer = (state = [], action) => {
	switch (action.type) {
		case 'DELETE':
			return state.filter((i) => i.id !== action.payload.id);
		case 'GET_ALL_TODOS':
			return [...action.payload];
		default:
			return state;
	}
};

export default tableReducer;
