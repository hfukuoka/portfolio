// Button.stories.js|jsx

import { MantineProvider } from "@mantine/core";
import React from "react";

import { Works } from "./Works";

export default {
  title: "Works",
  component: Works,
};

export const Primary = () => (
  <MantineProvider>
    <Works />
  </MantineProvider>
);
