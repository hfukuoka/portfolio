import { Group, ThemeIcon } from "@mantine/core";
import {
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTypescript,
  SiStreamlit,
  SiFastapi,
  SiDocker,
  SiFirebase,
} from "react-icons/si";

interface SkillIconsProps {
  skills: string[];
}

export const SkillIcons = ({ skills }: SkillIconsProps) => {
  const toIcon = (skill: string) => {
    switch (skill) {
      case "Docker":
        return <SiDocker />;
      case "React":
        return <SiReact />;
      case "Python":
        return <SiPython />;
      case "Streamlit":
        return <SiStreamlit />;
      case "FastAPI":
        return <SiFastapi />;
      case "TypeScript":
        return <SiTypescript />;
      case "Next.js":
        return <SiNextdotjs />;
      case "Firebase":
        return <SiFirebase />;
    }
  };
  return (
    <Group position="center" spacing="xs">
      {skills.map((skill: string) => (
        <ThemeIcon
          variant="light"
          key={skill}
          style={{ backgroundColor: "transparent" }}
        >
          {toIcon(skill)}
        </ThemeIcon>
      ))}
    </Group>
  );
};
