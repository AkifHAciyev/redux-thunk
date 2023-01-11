import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import tableReducer from '../reducers/table.reducer';

const store = createStore(tableReducer, applyMiddleware(thunk));

export default store;
