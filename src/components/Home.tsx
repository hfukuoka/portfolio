import "../App.css";
import { Skills } from "./Skills";
import { Works } from "./Works";
import { Footer } from "./Footer";
import { ActionIcon, Flex, useMantineColorScheme } from "@mantine/core";
import { Text } from "@mantine/core";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const Home = (props: any) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <>
      <section id="aboutme">
        <div className="container">
          <h1>Hayato Fukuoka</h1>
          <p style={{ textAlign: "center" }}>
            <h2>About me</h2>
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={`/assets/images/profile.jpg`}
              className="profileImage"
              alt=""
              style={{ marginTop: "20px" }}
            />
            <div
              style={{ fontSize: "18px", width: "700px", marginLeft: "40px" }}
            >
              <p>I'm a 4th year undergraduate student at Tohoku University.</p>
              <p>I became interested in programming through AtCoder.</p>
              <p>
                Currently, I'm gaining experience mainly in front-end at a
                venture company while researching computer vision using machine
                learning.
              </p>
            </div>
          </div>
        </div>

        <section id="works" className="container">
          <p style={{ textAlign: "center", paddingTop: "40px" }}>
            <h2 className="section-heading ">Works</h2>
          </p>
          <Works></Works>
        </section>

        <section id="skills" className="container">
          <p style={{ textAlign: "center", paddingTop: "40px" }}>
            <h2>Skills</h2>
          </p>
          <Skills></Skills>
        </section>
        <section id="experience" className="container">
          <p style={{ textAlign: "center", paddingTop: "40px" }}>
            <h2>Experiences</h2>
          </p>
          <Flex style={{ justifyContent: "center" }}>
            <div>
              <div>Internship: Langsmith Co.</div>
              <Text color="dimmed">August 2020 -</Text>
            </div>
          </Flex>
        </section>
        <section>
          <Footer />
        </section>
      </section>
      <ActionIcon
        onClick={() => toggleColorScheme()}
        style={{
          position: "fixed",
          right: "0px",
          bottom: "0px",
          margin: "10px",
        }}
      >
        {colorScheme === "dark" ? (
          <MdLightMode size={20} />
        ) : (
          <MdDarkMode size={20} />
        )}
      </ActionIcon>
    </>
  );
};

export default Home;
