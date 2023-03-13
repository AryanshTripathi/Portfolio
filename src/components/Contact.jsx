import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				"service_3cuulua",
				"template_rpszq1k",
				{
					from_name: form.name,
					to_name: "Aryansh",
					from_email: form.email,
					to_email: "tripathi.aryansh.2002@gmail.com",
					message: form.message,
				},
				"3VJhBMUsRwoLLHUvf"
			)
			.then(
				() => {
					setLoading(false);
					alert("Thank you for contacting me. I will get back to you soon.");
					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					console.log(error);
					alert("Something went wrong. Please try again later.");
				}
			);
	};

	return (
		<div className="xl:mt-12 max-h-1/2 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl min-w-7xl">
				<p className={styles.sectionSubText}>Get in touch</p>
				<h3 className={styles.sectionHeadText}>Contact.</h3>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-4 flex flex-col gap-8">
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your name:</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="What's your name"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-mendium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your email:</span>
						<input
							type="text"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="What's your email"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-mendium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your message:</span>
						<textarea
							rows="4"
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="What do you want to say"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-mendium"
						/>
					</label>

					<div className="grid w-full place-items-center">
						<button
							type="submit"
							className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
							{loading ? "Sending..." : "Send"}
						</button>
					</div>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
