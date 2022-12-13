import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const SharedLayout = () => {
	return (
		<>
			<div className="flex">
				<div className="max-w-[210px] fixed">
					<NavigationBar />
				</div>
				<div className="w-full mt-12 md:ml-[210px] md:mt-2">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default SharedLayout;
