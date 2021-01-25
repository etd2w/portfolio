import Container from "../Components/Container";
import Navbar from "../Components/Navbar";
import ProjectCard from "../Components/ProjectCard";

const projects = [
  {
    id: "001",
    name: "Zdog UI",
    desc: "A simple 3D editor",
    links: {
      live: "#",
      source: "#",
    },
    tools: ["React", "Styled components"],
  },
  {
    id: "002",
    name: "Portfolio",
    desc: "My portfolio",
    links: {
      live: "#",
      source: "#",
    },
    tools: ["Next.js", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <div className="flex justify-center py-4 md:py-8">
      <Container>
        <Navbar />

        <main className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 pt-8">
          {projects.map(project => (
            <ProjectCard
              name={project.name}
              desc={project.desc}
              links={project.links}
              key={project.id}
            />
          ))}
        </main>
      </Container>
    </div>
  );
}
