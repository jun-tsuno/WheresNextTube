import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const SharedLayout = () => {
	return (
		<>
			<div className="flex">
				<div className="max-w-[210px]">
					<NavigationBar />
				</div>
				<div className="w-full">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default SharedLayout;
