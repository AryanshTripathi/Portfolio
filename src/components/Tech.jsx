import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../style";
import { textVariant } from "../utils/motion";

const Tech = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Technologies I have learned</p>
				<h2 className={styles.sectionHeadText}>Tech Stack.</h2>
			</motion.div>
			<div className="flex flex-wrap justify-center gap-10 mt-5">
				{technologies.map((tech, index) => (
					<div className="w-28 h-28" key={tech.name}>
						<BallCanvas icon={tech.icon} />
					</div>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Tech, "");
