import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { videoSearchApi } from './apis/videoSearch';
import {
	videosReducer,
	selectVideo,
	addFavList,
	removeFavList,
	resetFavList,
} from './slices/videosSlice';

const store = configureStore({
	reducer: {
		videos: videosReducer,
		[videoSearchApi.reducerPath]: videoSearchApi.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(videoSearchApi.middleware);
	},
});

setupListeners(store.dispatch);

export { store, selectVideo, addFavList, removeFavList, resetFavList };

export { useGetVideoListsQuery } from './apis/videoSearch';
