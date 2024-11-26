import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	threejs,
	c,
	cplusplus,
	mastork,
	pmgsy,
	laHC,
	admindashboard,
	bodyweightblitz,
	whatsapp,
	jobsearch,
	postgresql,
	next,
	python,
	order_it,
	voom,
	visualizer,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Frontend Developer",
		icon: web,
	},
	{
		title: "Software Developer",
		icon: mobile,
	},
	{
		title: "Competitive Programmer",
		icon: creator,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Next JS",
		icon: next,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},

	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "PostgreSQL",
		icon: postgresql,
	},
	{
		name: "C",
		icon: c,
	},
	{
		name: "C++",
		icon: cplusplus,
	},
	{
		name: "Python",
		icon: python,
	},

	// {
	// 	name: "figma",
	// 	icon: figma,
	// },
	// {
	// 	name: "docker",
	// 	icon: docker,
	// },
];

const experiences = [
	{
		title: "Frontend Web Developer",
		company_name: "PMGSY (Public Works Department)",
		icon: pmgsy,
		iconBg: "#E6DEDD",
		date: "April 2022 - June 2022",
		points: [
			"Developing and maintaining web applications using HTML, Bootstrap, and JS and other related technologies.",
			"Collaborating with cross-functional teams including ministry officials, and UI/UX designers to create high-quality product.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Frontend Web Developer",
		company_name: "Mastork Technologies",
		icon: mastork,
		iconBg: "#383E56",
		date: "August 2022 - October 2022",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Software Developer",
		company_name: "Laboratoire Hubert Curien",
		icon: laHC,
		iconBg: "#383E56",
		date: "May 2023 - July 2023",
		points: [
			"Developing and maintaining a library to encode JSON-LD data to CBOR-LD data, using C to save space and time in the transmission of data.",
			"Collaborating with cross-functional teams working on various aspects of the project and constantly communicating with the team to ensure that the project is on track.",
			"Implementing the best algorithms possible to reduce space complexity as much as possible.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Aryansh and the team proved me wrong.",
		name: "Pradeep Agrawal",
		designation: "Director",
		company: "IDSE",
		image: "https://randomuser.me/api/portraits/men/4.jpg",
	},
	{
		testimonial:
			"His work exceeded my expectations.I would definitely recommend him to anyone looking for a web developer.",
		name: "Jatin Khurana",
		designation: "CEO",
		company: "Mastork Technologies",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
];

const projects = [
	{
		name: "Order-It",
		description:
			"A full-stack food ordering platform that allows both food ordering and restaurant managing services. User can search for the city, find the restaurant, filter the items, make payment and place the order and recieve real-time notification on order status.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongo-db",
				color: "pink-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "stripe",
				color: "orange-text-gradient",
			},
		],
		image: order_it,
		source_code_link: "https://github.com/AryanshTripathi/Order-It",
	},
	{
		name: "Voom",
		description:
			"Voom is a versatile meeting platform that allows users to host, schedule, and manage online meetings with ease. Packed with features to enhance virtual collaboration, it offers a seamless experience for both personal and professional use.",
		tags: [
			{
				name: "next",
				color: "blue-text-gradient",
			},
			{
				name: "shadcn",
				color: "pink-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
		],
		image: voom,
		source_code_link: "https://github.com/AryanshTripathi/Voom",
	},
	{
		name: "Visualizer",
		description:
			"Visualizer is an interactive web application that allows users to explore and understand sorting and pathfinding algorithms through animations. The platform is designed to enhance learning by providing customizable options and a visual representation of algorithmic behavior.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
			{
				name: "animation",
				color: "green-text-gradient",
			},
		],
		image: visualizer,
		source_code_link: "https://github.com/AryanshTripathi/Visualizer",
	},
	{
		name: "Bodyweight Blitz",
		description:
			"A web based workout manager app which is a digital tool that helps users set fitness goals, and create personalized workout plans. It is part of the series of projects that I am making to learn Next.js and React-Native.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "firebase",
				color: "pink-text-gradient",
			},
			{
				name: "MUI",
				color: "green-text-gradient",
			},
			{
				name: "react-hook-form",
				color: "orange-text-gradient",
			},
		],
		image: bodyweightblitz,
		source_code_link: "https://github.com/AryanshTripathi/bodyweight-blitz",
	},

	{
		name: "Admin Dashboard",
		description:
			"This Admin Panel includes one Dashboard, Three Pages, Four Apps, and Seven fully functional charts! Made to learn about Syncfusion React Components.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "syncfusion",
				color: "green-text-gradient",
			},
		],
		image: admindashboard,
		source_code_link: "https://github.com/AryanshTripathi/Admin-Dashboard",
	},
	{
		name: "Whatsapp Clone",
		description:
			"Web-based whatsapp clone that is developed with the sole purpose of learning and understanding the working principle of messaging through whatsapp.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "firebase",
				color: "green-text-gradient",
			},
			{
				name: "MUI",
				color: "pink-text-gradient",
			},
		],
		image: whatsapp,
		source_code_link: "https://github.com/AryanshTripathi/Whatsapp-Clone",
	},
	{
		name: "Job Search",
		description:
			"a digital platform that connects job seekers with employers and facilitates the process of finding employment. Users can search for job openings and apply for positions through the app.",
		tags: [
			{
				name: "react native",
				color: "blue-text-gradient",
			},
			{
				name: "expo",
				color: "green-text-gradient",
			},
			{
				name: "axios",
				color: "pink-text-gradient",
			},
		],
		image: jobsearch,
		source_code_link: "https://github.com/AryanshTripathi/job-search",
	},
];

export { services, technologies, experiences, testimonials, projects };
