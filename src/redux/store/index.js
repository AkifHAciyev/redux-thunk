import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import tableReducer from '../reducers/table.reducer';
import favoritesReducer from '../reducers/favorite.reducer';

const combineReducer = combineReducers({
	tableReducer,
	favoritesReducer,
});

const store = createStore(combineReducer, applyMiddleware(thunk));

export default store;
