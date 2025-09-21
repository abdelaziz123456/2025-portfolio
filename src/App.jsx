import {
  SideNavigator,
  Home,
  Skills,
  Education,
  Experience,
  Projects,
  Contact,
} from "./sections";
import "./App.css";

function App() {
  return (
    <div className="flex bg-[#E5E5E5] ">
      <main className="w-full flex flex-col gap-2 p-4 bg-white h-[100vh] overflow-y-auto scroll-smooth">
        <section id="home" aria-label="Home">
          <Home />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <SideNavigator />
    </div>
  );
}

export default App;
