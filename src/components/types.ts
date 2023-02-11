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
