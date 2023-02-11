export type SkillData = {
  name: string;
  iconName: string;
  experience: string;
  isActive: boolean;
};

export type SkillDatas = {
  language: SkillData[];
  framework: SkillData[];
  developmentTool: SkillData[];
};

export type SkillGroupProps = {
  header: string;
  datas: SkillData[];
};

export type CardProps = {
  data: SkillData;
};
