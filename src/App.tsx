import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  Group,
  MantineProvider,
  Header,
  SimpleGrid,
  NavLink,
  Center,
} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import "./App.css";
import Home from "./components/Home";

function App() {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          primaryColor: "gray",
          fontFamily: "Yu Gothic, 游ゴシック, YuGothic, 游ゴシック体",
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <AppShell
          padding="md"
          navbarOffsetBreakpoint="sm"
          asideOffsetBreakpoint="sm"
          header={
            <Header height={50}>
              <Group position="center">
                <SimpleGrid
                  cols={3}
                  spacing={0}
                  style={{
                    height: 40,
                    marginTop: 0,
                    marginBottom: 0,
                    margin: "5px",
                  }}
                >
                  <AnchorLink
                    href="#aboutme"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <NavLink
                      label={
                        <Center
                          style={{
                            fontFamily:
                              "Yu Gothic, 游ゴシック, YuGothic, 游ゴシック体",
                          }}
                        >
                          About me
                        </Center>
                      }
                      color={colorScheme === "dark" ? "green.5" : "green.9"}
                    ></NavLink>
                  </AnchorLink>
                  <AnchorLink
                    href="#works"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <NavLink
                      label={
                        <Center
                          style={{
                            fontFamily:
                              "Yu Gothic, 游ゴシック, YuGothic, 游ゴシック体",
                          }}
                        >
                          Works
                        </Center>
                      }
                      color={colorScheme === "dark" ? "green.5" : "green.9"}
                    ></NavLink>
                  </AnchorLink>
                  <AnchorLink
                    href="#skills"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <NavLink
                      label={
                        <Center
                          style={{
                            fontFamily:
                              "Yu Gothic, 游ゴシック, YuGothic, 游ゴシック体",
                          }}
                        >
                          Skills
                        </Center>
                      }
                      color={colorScheme === "dark" ? "green.5" : "green.9"}
                    ></NavLink>
                  </AnchorLink>
                </SimpleGrid>
              </Group>
            </Header>
          }
        >
          <Home></Home>
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
