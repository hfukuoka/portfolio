import "../App.scss";
import { Skills } from "../components/Skills";
import { Works } from "../components/Works";
import { Footer } from "./Footer";
import { Flex } from "@mantine/core";
import { Text } from "@mantine/core";
import { AboutMe } from "../components/AboutMe";
import { ThemeChangeButton } from "../components/ThemeChangeButton";

export const Home = () => {
  return (
    <>
      <section id="aboutme">
        <div className="container">
          <h1>Hayato Fukuoka</h1>
          <div style={{ textAlign: "center" }}>
            <h2>About me</h2>
          </div>
          <AboutMe />
        </div>

        <section id="works" className="container">
          <div style={{ textAlign: "center", paddingTop: "40px" }}>
            <h2 className="section-heading ">Works</h2>
          </div>
          <Works></Works>
        </section>

        <section id="skills" className="container">
          <div style={{ textAlign: "center", paddingTop: "40px" }}>
            <h2>Skills</h2>
          </div>
          <Skills></Skills>
        </section>
        <section id="experiences" className="container">
          <div style={{ textAlign: "center", paddingTop: "40px" }}>
            <h2>Experiences</h2>
          </div>
          <Flex style={{ justifyContent: "center" }}>
            <div>
              <div>Internship : Langsmith Co.</div>
              <Text color="dimmed">August 2020 -</Text>
            </div>
          </Flex>
        </section>
        <section>
          <Footer />
        </section>
        <ThemeChangeButton />
      </section>
    </>
  );
};

export default Home;
