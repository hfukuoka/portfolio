import { Flex, Image, Stack, Text } from "@mantine/core";
import { FC } from "react";

export const AboutMe: FC = () => {
  return (
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
          Currently, I'm gaining experience mainly in front-end at a venture
          company while researching computer vision using machine learning.
        </Text>
      </Stack>
    </Flex>
  );
};
