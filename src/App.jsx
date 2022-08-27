import {
  Navbar,
  Hero,
  Ability,
  Stats,
  Project,
  Education,
  Contacts,
  Footer,
} from "./components";
import Feedback from "./components/Feedback";
import "./lights.css";

const App = () => {
  return (
    <div className="bg-primary px-[106px]">
      <Navbar />
      <Hero />
      <Stats />
      <Ability />
      <Project />
      <Education />
      <Feedback />
      <Contacts />
      <Footer />
      <div className="light1" />
      <div className="light2" />
      <div className="light3" />
      <div className="light4" />
    </div>
  );
};

export default App;
