import { BiSearchAlt, BiMessageAdd } from "react-icons/bi";
import { HiCursorClick } from "react-icons/hi";

const stepDescriptions = [
	{
		id: 1,
		text: (
			<div>
				<h2 className="text-xl font-bold text-center">1. Search Video</h2>
				<BiSearchAlt className="text-3xl mx-auto my-7" />
				<p>
					The API query includes the terms "travel" and "place" by default. By
					entering more words in the search bar, you can add more. It returns 15
					videos.
				</p>
			</div>
		),
	},
	{
		id: 2,
		text: (
			<div>
				<h2 className="text-xl font-bold text-center">2. Watch Video</h2>
				<HiCursorClick className="text-3xl mx-auto my-7" />
				<p>
					You can view the video by opening a modal by clicking the thumbnail
					image. Simply click the close button to close the modal.
				</p>
			</div>
		),
	},
	{
		id: 3,
		text: (
			<div>
				<h2 className="text-xl font-bold text-center">
					3. Add to Favorite List
				</h2>
				<BiMessageAdd className="text-3xl mx-auto my-7" />
				<p>
					You liked the video? By pressing the add button down below each video
					card, you can save your favourite videos to the "Favourite List".
					Activate the button once more to remove from the list.
				</p>
			</div>
		),
	},
];

export default stepDescriptions;
