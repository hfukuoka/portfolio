import "../App.css";
import { Skills } from "./Skills";
import { Works } from "./Works";
import { Footer } from "./Footer";
import {
  ActionIcon,
  Flex,
  Stack,
  useMantineColorScheme,
  Image,
} from "@mantine/core";
import { Text } from "@mantine/core";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const Home = (props: any) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <>
      <section id="aboutme">
        <div className="container">
          <h1>Hayato Fukuoka</h1>
          <div style={{ textAlign: "center" }}>
            <h2>About me</h2>
          </div>
          <Flex
            direction={{ base: "column", sm: "row" }}
            gap="xl"
            justify="center"
            align="center"
          >
            <Image
              width={200}
              p="xl"
              radius="xl"
              src="/assets/images/profile.jpg"
              alt="Hayato Fukuoka"
            />
            <Stack
              style={{
                fontSize: "18px",
                marginLeft: "40px",
                overflow: "auto",
              }}
            >
              <Text size="md">
                I'm a 4th year undergraduate student at Tohoku University.
              </Text>
              <Text size="md">
                I became interested in programming through AtCoder.
              </Text>
              <Text size="md">
                Currently, I'm gaining experience mainly in front-end at a
                venture company while researching computer vision using machine
                learning.
              </Text>
            </Stack>
          </Flex>
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
