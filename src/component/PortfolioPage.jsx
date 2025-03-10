import React, { useEffect, useState } from "react";

function PortfolioPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects))
      .catch((e) => console.error("Error fetching data:", e));
  }, []);

  return (
    <main className="container mx-auto pt-14 px-6 flex justify-center items-center flex-col h-auto">
      <div className="tit flex flex-col justify-center items-center w-full h-40">
        <h6 className="text-xl text-center text-[var(--main-color)] pb-4 tracking-widest font-bold">Our Projects</h6>
        <h1 className="text-5xl text-center font-bold text-[var(--secondary-color)] pb-4 max-[700px]:text-2xl">Discover Our Work</h1>
        <p className="text-[var(--secondary-color)] mb-12 text-base max-[700px]:text-sm">Explore our latest projects and innovations.</p>
      </div>
      <div className="project grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15">
        {projects.map((project) => (
          <div key={project.id} className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <img
              className="w-full h-56 object-cover"
              src={project.photo} 
              alt={project.title}
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 py-2 px-4  transition-all bg-[var(--secondary-color)]  items-center text-[var(--secondary2-color)] rounded-md  hover:bg-[var(--main-color)] hover:text-[var(--secondary2-color)]  duration-300 cursor-pointer "
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default PortfolioPage;
