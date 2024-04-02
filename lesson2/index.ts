// ! Sử dụng ":" để khai báo cores type: string, number, boolean, array, object

const myMessage: string = "Xin chao ca lop! Rat vui duoc day cac em!";

const myAge: number = 30;

const isMarried: boolean = false;

const mySkills: string[] = ["HTML", "CSS", "JS", "React", "NodeJS", "MongoDB"]; // Array of string

const myJobs: Array<string> = ["developer", "teacher", "grab dirver"]; // Generic array type

const myEducation: {
  school: string;
  major: string;
  graduatedYear: number;
  GPA: number;
} = {
  school: "FPOLY",
  major: "IT",
  graduatedYear: 2024,
  GPA: 3.5,
};