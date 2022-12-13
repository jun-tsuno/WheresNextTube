import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	selectedVideo: {
		id: "",
		text: "",
		pic: "",
		title: "",
	},
	favList: [],
};

const videosSlice = createSlice({
	name: "videos",
	initialState: initialState,
	reducers: {
		selectVideo(state, action) {
			state.selectedVideo = {
				id: action.payload.id,
				text: action.payload.text,
				pic: action.payload.pic,
				title: action.payload.title,
			};
		},
		addFavList(state, action) {
			state.favList.push({
				id: action.payload.id,
				text: action.payload.text,
				pic: action.payload.pic,
				title: action.payload.title,
			});
		},
	},
});

export const { selectVideo, addFavList } = videosSlice.actions;
export const videosReducer = videosSlice.reducer;
