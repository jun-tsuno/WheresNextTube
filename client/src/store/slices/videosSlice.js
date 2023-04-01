import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	selectedVideo: {
		videoId: '',
		text: '',
		pic: '',
		title: '',
		_id: '',
		userId: '',
	},
	favList: [],
};

const videosSlice = createSlice({
	name: 'videos',
	initialState: initialState,
	reducers: {
		selectVideo(state, action) {
			state.selectedVideo = {
				videoId: action.payload.videoId,
				text: action.payload.text,
				pic: action.payload.pic,
				title: action.payload.title,
			};
		},
		addFavList(state, action) {
			state.favList.push({
				videoId: action.payload.videoId,
				text: action.payload.text,
				pic: action.payload.pic,
				title: action.payload.title,
				_id: action.payload._id,
				userId: action.payload.userId,
			});
		},
		removeFavList(state, action) {
			state.favList = state.favList.filter(
				(item) => item.videoId !== action.payload
			);
		},
		resetFavList(state, _action) {
			state.favList = [];
		},
	},
});

export const { selectVideo, addFavList, removeFavList, resetFavList } =
	videosSlice.actions;
export const videosReducer = videosSlice.reducer;
