import Main from "./Main";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <div id="home"><Main /></div>
      <div id="about"><About /></div>
      <div id="service"><Service /></div>
      <div id="contact"><Contact /></div>
    </>
  );
}

export default Home;