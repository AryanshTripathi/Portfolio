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
	figma,
	docker,
	threejs,
	c,
	cplusplus,
	meta,
	mastork,
	pmgsy,
	laHC,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	admindashboard,
	bodyweightblitz,
	whatsapp,
	jobsearch,
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
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Native Developer",
		icon: mobile,
	},
	{
		title: "Competitive Programmer",
		icon: creator,
	},
	// {
	// 	title: "Backend Developer",
	// 	icon: backend,
	// },
	// {
	// 	title: "Content Creator",
	// 	icon: creator,
	// },
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
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	// {
	// 	name: "MongoDB",
	// 	icon: mongodb,
	// },
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "C",
		icon: c,
	},
	{
		name: "C++",
		icon: cplusplus,
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
	// {
	// 	name: "Car Rent",
	// 	description:
	// 		"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
	// 	tags: [
	// 		{
	// 			name: "react",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "mongodb",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "tailwind",
	// 			color: "pink-text-gradient",
	// 		},
	// 	],
	// 	image: carrent,
	// 	source_code_link: "https://github.com/",
	// },
	// {
	// 	name: "Job IT",
	// 	description:
	// 		"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
	// 	tags: [
	// 		{
	// 			name: "react",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "restapi",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "scss",
	// 			color: "pink-text-gradient",
	// 		},
	// 	],
	// 	image: jobit,
	// 	source_code_link: "https://github.com/",
	// },
	// {
	// 	name: "Trip Guide",
	// 	description:
	// 		"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
	// 	tags: [
	// 		{
	// 			name: "nextjs",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "supabase",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "css",
	// 			color: "pink-text-gradient",
	// 		},
	// 	],
	// 	image: tripguide,
	// 	source_code_link: "https://github.com/",
	// },
];

export { services, technologies, experiences, testimonials, projects };
