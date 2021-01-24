import Container from "../Components/Container";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Container>
        <Navbar />
      </Container>
    </div>
  );
}
