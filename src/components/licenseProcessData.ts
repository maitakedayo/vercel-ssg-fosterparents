import { LicenseProcessProps } from 'types/data';

const LicenseProcessesData = async (): Promise<LicenseProcessProps[]> => {
  return [
    {
      title: "Utilizing the Foreign Drivers License Conversion System",
      text: "Learning Examples for Road Tests for Exchanging your Foreign Drivers License for a Japanese License",
      btnText: "Check Example Answers",
    },
    {
      title: "At the Drivers License Center, taking the on-the-spot license examination (general test)",
      text: "Learning Examples for the driving test for ordinary passenger vehicles at the Drivers License Center.",
      btnText: "Check Example Answers",
    },
    {
      title: "飛び込み一発免許試験（一般試験）",
      text: "仮免許技能試験の範例を学ぶ。",
      btnText: "範例を見る",
    },
  ];
};

export default LicenseProcessesData;