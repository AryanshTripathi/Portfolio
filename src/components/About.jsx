import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center">
					<img src={icon} alt={title} className="w-16 h-16 object-contain" />
					<h3 className="text-white text-[24px] text-center font-bold">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-2 text-secondary text-[17px] leading-[30px]">
				A passionate Software Developer and final-year student pursuing an
				Integrated Dual Degree at IIT BHU, with a CGPA of{" "}
				<span className="font-semibold text-gray-300 italic">8.51.</span> With
				excellent proficiency in{" "}
				<span className="font-semibold text-gray-300 italic capitalize">
					HTML, CSS & JavaScript
				</span>
				, I specialize in{" "}
				<span className="font-semibold text-gray-300 italic capitalize">
					Full-Stack Development
				</span>{" "}
				with expertise in{" "}
				<span className="font-semibold text-gray-300 italic">
					React.js, Next.js, TypeScript, Tailwind
				</span>{" "}
				and backend technologies like{" "}
				<span className="font-semibold text-gray-300 italic">
					Node JS, PostgreSQL and MongoDB.
				</span>{" "}
				I've honed my skills in problem-solving, achieving{" "}
				<span className="font-semibold text-gray-300 italic">
					Specialist rank on Codeforces
				</span>{" "}
				and solving 800+ challenges on platforms like LeetCode and GFG. I've
				also contributed to cutting-edge research,{" "}
				<span className="font-semibold text-gray-300 italic">
					co-authoring a paper on CBOR-LD
				</span>{" "}
				compact data representation in the Web of Things. Whether it's building
				efficient solutions or tackling complex algorithms, I'm always eager to
				create, learn, and grow. Let's connect to collaborate or explore
				exciting opportunities!
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
