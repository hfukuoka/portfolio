import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { FC } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const ThemeChangeButton: FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
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
  );
};
