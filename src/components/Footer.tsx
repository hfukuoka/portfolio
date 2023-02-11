import { createStyles, Group, Button } from "@mantine/core";
import { SiGithub, SiGmail, SiTwitter } from "react-icons/si";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 50,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Group position="apart" className={classes.inner}>
        <Group spacing="sm">
          <Button
            variant="subtle"
            component="a"
            href="https://github.com/hfukuoka"
            compact
            color="dark"
          >
            <SiGithub size="20" />
          </Button>
          <Button
            variant="subtle"
            component="a"
            href="https://twitter.com/HaFu421"
            compact
            color="blue"
          >
            <SiTwitter size="20" />
          </Button>
          <Button
            variant="subtle"
            component="a"
            href="mailto:hayato.fukuoka.q2@dc.tohoku.ac.jp"
            compact
            color="red"
          >
            <SiGmail size="20" />
          </Button>
        </Group>
      </Group>
    </div>
  );
}
