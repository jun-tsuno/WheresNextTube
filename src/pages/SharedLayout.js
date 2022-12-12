import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const SharedLayout = () => {
	return (
		<>
			<div className="flex">
				<div className="max-w-[210px] fixed">
					<NavigationBar />
				</div>
				<div className="w-full ml-[210px]">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default SharedLayout;
