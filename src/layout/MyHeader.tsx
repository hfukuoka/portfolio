import { Center, Group, Header, NavLink, SimpleGrid } from "@mantine/core";
import { FC } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const MyNavLink = (props: any) => {
  return (
    <AnchorLink
      href={props.href}
      style={{
        textDecoration: "none",
      }}
    >
      <NavLink label={<Center>{props.label}</Center>}></NavLink>
    </AnchorLink>
  );
};

export const MyHeader: FC = () => {
  return (
    <Header height={50}>
      <Group position="center">
        <SimpleGrid
          cols={4}
          spacing={0}
          style={{
            height: 40,
            marginTop: "8px",
          }}
        >
          <MyNavLink href="#aboutme" label="About me" />
          <MyNavLink href="#works" label="Works" />
          <MyNavLink href="#skills" label="Skills" />
          <MyNavLink href="#experiences" label="Experiences" />
        </SimpleGrid>
      </Group>
    </Header>
  );
};
