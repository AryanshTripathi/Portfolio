import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
	name,
	description,
	image,
	source_code_link,
	index,
	tags,
}) => {
	return (
		<>
			<Tilt
				variants={fadeIn("up", "spring", index * 0.5, 0.75)}
				className="green-pink-gradient p-[1px] rounded-2xl">
				<motion.div
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full">
					<div className="relative h-[229px] w-full">
						<img
							src={image}
							alt={name}
							className="w-full h-full rounded-2xl object-cover"
						/>

						<div className="absolute inset-0 flex justify-end m-3 card_img_hover">
							<div
								className="black-gradient w-10 h-10 rounded-full grid place-items-center cursor-pointer"
								onClick={() => {
									window.open(source_code_link, "_blank");
								}}>
								<img
									src={github}
									alt="Github"
									className="w-1/2 h-1/2 object-contain"
								/>
							</div>
						</div>
					</div>

					<div className="mt-5">
						<h3 className="text-ehite font-bold text-[24px]">{name}</h3>
						<p className="mt-2 text-secondary text-[14px]">{description}</p>
					</div>

					<div className="mt-4 flex flex-wrap gap-2">
						{tags.map((tag, index) => (
							<p key={index} className={`text-[14px] ${tag.color}`}>
								#{tag.name}
							</p>
						))}
					</div>
				</motion.div>
			</Tilt>
		</>
	);
};

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My Works</p>
				<h2 className={styles.sectionHeadText}>Projects.</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
					As a developer, I have had the opportunity to work on a variety of
					personal projects that showcase my skills and interests. Each project
					is unique and reflects my passion for creating meaningful solutions to
					real-world problems. I work on personal projects to explore new
					technologies, improve my skills, and challenge myself to think
					creatively. These projects are an opportunity for me to experiment
					with different approaches and learn from my successes and failures.
					Through my personal projects, I have gained experience in areas of web
					development, and game development. I am proud of my personal projects
					as they demonstrate my ability to create unique and innovative
					solutions. Overall, my personal projects are a testament to my passion
					for coding and my commitment to continued growth as a developer.
				</motion.p>
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={index} {...project} index={index} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "");
