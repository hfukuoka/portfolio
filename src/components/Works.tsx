import {
  AspectRatio,
  Card,
  Image,
  Text,
  createStyles,
  Container,
  SimpleGrid,
  Group,
  Anchor,
} from "@mantine/core";
import { TbLink } from "react-icons/tb";
import { data, LinkType } from "./data";

export const Works = () => {
  const useStyles = createStyles((theme) => ({
    card: {
      transition: "transform 100ms ease, box-shadow 100ms ease",

      "&:hover": {
        transform: "scale(1.05)",
        boxShadow: theme.shadows.md,
      },
    },
    title: {
      fontWeight: 600,
    },
  }));

  const { classes } = useStyles();

  const cards = data.map((el, idx) => (
    <Card key={idx} p="md" radius="md" component="a" className={classes.card}>
      <AspectRatio ratio={16 / 9}>
        <Image src={el.images[0]} alt={el.name} />
      </AspectRatio>
      <Group position="apart">
        <Text className={classes.title} mt={5}>
          {el.name}
        </Text>
        <Text
          color="dimmed"
          size="xs"
          weight={500}
          mt="md"
          style={{ marginBottom: "10px", marginLeft: "20px" }}
        >
          {el.date}
        </Text>
      </Group>
      <Group mt="md">
        {el.links.map((link: LinkType) => (
          <Anchor size="xs" href={link.url} target="_blank" key={link.name}>
            <TbLink />
            {link.name}
          </Anchor>
        ))}
      </Group>
    </Card>
  ));

  return (
    <>
      <Container my="xl">
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          {cards}
        </SimpleGrid>
      </Container>
    </>
  );
};
