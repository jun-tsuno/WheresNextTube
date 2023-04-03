import React from "react";
import AboutCard from "../components/AboutCard";
import stepDescriptions from "../data/stepDescription";
import { FaGithub } from "react-icons/fa";
import { SimpleGrid } from "@chakra-ui/react";

const About = () => {
	return (
		<div className="max-w-[900px] mx-auto my-20 md:my-10 p-8">
			<h1 className="text-3xl font-bold italic text-center">
				<span className="text-[#e76f51]">Where's next</span> on Your Journey?
			</h1>
			<section className="mt-10">
				<h2 className="text-2xl font-bold mb-5">About This App</h2>
				<p>
					Thank you for visiting <strong>"Where'sNEXT TUBE"</strong>!<br />I
					enjoy traveling, and I frequently search YouTube videos for new places
					to go. So, I made an app for those who enjoy traveling!! Using this
					app, you can look up travel-related YouTube videos. This app has a
					search feature, and you can add your favorite videos to your video
					list.
				</p>
			</section>
			<section className="my-16">
				<h2 className="text-2xl font-bold mb-5">How to Use?</h2>
				<SimpleGrid
					spacing={4}
					templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
				>
					{stepDescriptions.map((e) => (
						<AboutCard key={e.id} contents={e.text} />
					))}
				</SimpleGrid>
			</section>
			<div className="flex items-center">
				<h3 className="text-xl font-bold mr-5">
					Source code available on GitHub!!
				</h3>
				<a
					href="https://github.com/jun-tsuno/TravelTube.git"
					rel="noreferrer"
					target="_blank"
				>
					<FaGithub className="text-3xl hover:scale-150 hover:cursor-pointer hover:text-[#e76f51]" />
				</a>
			</div>
		</div>
	);
};

export default About;
