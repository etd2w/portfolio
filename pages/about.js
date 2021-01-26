import Container from "../Components/Container";
import Navbar from "../Components/Navbar";
import FrontEndCard from "../Components/FrontEndCard";
import BackEndCard from "../Components/BackEndCard";

export default function About() {
  return (
    <div className="flex justify-center pt-4 md:pt-8 pb-4 md:pb-8">
      <Container>
        <Navbar />
        <main className="md:grid md:grid-cols-2 md:gap-x-4 pt-4">
          <section className="pt-4">
            <div className="font-bold text-ternary">
              <h2 className="text-2xl">About</h2>
            </div>
            <div className="pt-4">
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
            <div className="font-bold text-ternary">
              <h2 className="text-2xl">Skills</h2>
            </div>

            <div className="pt-4">
              <FrontEndCard />
              <BackEndCard />
            </div>
          </section>
        </main>
      </Container>
    </div>
  );
}
