import Container from "../Components/Container";
import Navbar from "../Components/Navbar";
import FrontEndCard from "../Components/FrontEndCard";
import BackEndCard from "../Components/BackEndCard";

const skills = [
  { id: "001", name: "HTML", icon: "" },
  { id: "002", name: "CSS", icon: "" },
  { id: "003", name: "JS", icon: "" },
  { id: "004", name: "React", icon: "" },
  { id: "005", name: "Redux", icon: "" },
  { id: "006", name: "React router", icon: "" },
  { id: "007", name: "Styled components", icon: "" },
  { id: "008", name: "NodeJS", icon: "" },
  { id: "009", name: "Express", icon: "" },
  { id: "010", name: "Tailwind", icon: "" },
  { id: "011", name: "Sass", icon: "" },
  { id: "012", name: "Firebase", icon: "" },
  { id: "013", name: "NextJS", icon: "" },
];

export default function About() {
  return (
    <div className="flex justify-center pt-4 md:pt-8 pb-4 md:pb-8">
      <Container>
        <Navbar />
        <main>
          <section className="pt-4">
            <div className="font-bold text-center text-ternary">
              <h2>About</h2>
            </div>
            <div className="pt-4 text-center">
              <p>
                The RuhrJS is an annual, community-driven JavaScript conference
                and the first of its kind in the metropolitan Ruhr Area in
                Germany. First held in 2016, the RuhrJS brings together an
                international line-up of renowned speakers with 200 JavaScript
                developers from all over the globe, creating a forum for
                developers to connect with companies and one another.
              </p>
            </div>
          </section>

          <section className="pt-4">
            <div className="font-bold text-center text-ternary">
              <h2>Skills</h2>
            </div>

            <div className="pt-4 ">
              <FrontEndCard />
              <BackEndCard />
            </div>
          </section>
        </main>
      </Container>
    </div>
  );
}
