import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { videoSearchApi } from "./apis/videoSearch";

const store = configureStore({
	reducer: {
		[videoSearchApi.reducerPath]: videoSearchApi.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(videoSearchApi.middleware);
	},
});

setupListeners(store.dispatch);

export { store };

export { useGetVideoListsQuery } from "./apis/videoSearch";
