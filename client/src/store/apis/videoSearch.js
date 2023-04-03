import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const videoSearchApi = createApi({
	reducerPath: "videoSearchApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://www.googleapis.com/youtube/v3/search",
	}),
	endpoints(builder) {
		return {
			getVideoLists: builder.query({
				query: (searchTerm) => {
					return {
						method: "GET",
						url: `?part=snippet&type=video&maxResults=15&order=relevance&key=${process.env.REACT_APP_API_KEY}&q=${searchTerm}`,
					};
				},
			}),
		};
	},
});

export const { useGetVideoListsQuery } = videoSearchApi;
export { videoSearchApi };
