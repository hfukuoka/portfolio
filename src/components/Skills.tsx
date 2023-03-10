import { FC, useRef, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CardProps, SkillGroupProps } from "../data/types";
import { skillDatas } from "../data/data";
import { Container, Flex } from "@mantine/core";

const Card = ({ data }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [opened, setOpend] = useState(false);

  const handleMouseEnter = () => {
    setOpend(true);
    cardRef.current!.classList.add("active");
  };

  const handleMouseLeave = () => {
    setOpend(false);
    cardRef.current!.classList.remove("active");
  };

  return (
    <div
      ref={cardRef}
      css={styles.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={`/assets/images/skill/${data.iconName}.png`}
        width={80}
        height={80}
        alt=""
      />
      {opened && (
        <div css={styles.detail}>
          <div css={styles.text}>{data.name}</div>
          <div css={styles.subText}>{data.experience}</div>
        </div>
      )}
    </div>
  );
};

const SkillGroup = (props: SkillGroupProps) => {
  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h3>{props.header}</h3>
      </div>
      <div css={styles.skillImageContainer}>
        {props.datas.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </Container>
  );
};

export const Skills: FC = () => {
  return (
    <Flex justify="center" direction="column">
      <SkillGroup header="Programming Language" datas={skillDatas.language} />
      <SkillGroup header="Framework" datas={skillDatas.framework} />
      <SkillGroup
        header="Development Tool"
        datas={skillDatas.developmentTool}
      />
    </Flex>
  );
};

const styles = {
  skillImageContainer: css`
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    grid-gap: 20px;
  `,
  container: css`
    position: relative;
    width: 80px;
    height: 80px;
    display: grid;
    transition: all 0.5s;
    img {
      transition: all 0.5s;
    }

    &.active {
      width: 200px;
      img {
        transform: scale(1.2);
      }
    }
  `,

  detail: css`
    position: absolute;
    left: 100px;
    display: grid;
  `,
  text: css`
    padding-left: 5px;
    white-space: nowrap;
  `,
  subText: css`
    padding-left: 5px;
    white-space: nowrap;
    color: #7d7d7d;
  `,
};
