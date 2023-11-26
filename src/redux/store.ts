import { combineReducers, configureStore } from '@reduxjs/toolkit';
import formReducer from './slice/formSlice';

const rootReducer = combineReducers({
	form: formReducer,
});

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
