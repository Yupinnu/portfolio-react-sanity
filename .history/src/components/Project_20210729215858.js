import React, { useEffect, useState } from 'react';
import sanityClient from "../client.js";

export default function Project() {
	const [projectData, setProjectData] = useState(null);

	useEffect(() => {
		sanityClient.fetch(`*[_type == "project"]{
			title,
			date,
			place,
			description,
			projectType,
			link,
			git,
			tags
		}`).then((data) => setProjectData(data))
		.catch((e) => console.log(e));
	}, []);
	return (
		<main className="bg-gray-100 min-h-screen p-12">
			<section className="container mx-auto">
				<h1 className="text-5xl flex justify-center">Projects</h1><br></br>
				<h2 className="text-lg text-gray-600 flex justify-center mb-12">
					Here are some of my current projects.
				</h2>
				<section className="grid grid-cols-2 gap-8">
					{projectData &&
						projectData.map((project, index) => (
							<article className="relative rounded-lg shadow-xl bg-white p-16">
								<h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700" key={index}>
									<a
										href={project.link}
										alt={project.title}
										target="_blank"
										rel="noopener noreferrer"
									>
										{project.title}
									</a>
								</h3>
								<div className="text-gray-500 text-xs space-x-4" >
									<span>
										<strong className="font-bold">Finished on</strong>:{" "}
										{new Date(project.date).toLocaleDateString()}
									</span>
									<span>
										<strong className="font-bold">Company</strong>:{" "}
										{project.place}
									</span>
									<span>
										<strong className="font-bold">Type</strong>:{" "}
										{project.projectType}
									</span>
									<p className="my-6 text-lg text-gray-700 leading-relaxed">
										{project.description}
									</p>
									<a
										href={project.link}
										rel="noopener noreferrer"
										target="_blank"
										className="text-gray-500 font-bold hover:underline hover:text-gray-400 text-xl"
									>
										View the Project{" "}
										<span role="img" aria-label="right pointer">
											????????
										</span>
									</a>
									<a
										href={project.git}
										rel="noopener noreferrer"
										target="_blank"
										className="text-gray-500 font-bold hover:underline hover:text-gray-400 text-xl"
									>
										View the Code{" "}
										<span role="img" aria-label="right pointer">
											????????
										</span>
									</a>
								</div>
							</article>
						))}
				</section>
			</section>
		</main>
	);
}
