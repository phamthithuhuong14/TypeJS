{
    const teachers: string[] = [
    "Tú",
    "Thắng",
    "Đạt",
    "Hoàng",
    "Huy",
    "Hoà",
    "Ngọc",
  ];
  
  const myString: string = "Hom nay troi dep qua!";
  console.log(myString.toLowerCase());
  console.log(myString.toLocaleUpperCase());
  
  type user = {
    name: string;
    age: number;
    jobs: string[];
    company: string;
    isMarried: boolean;
    gender: string;
    hobbies: string[];
    address: string;
  };
  
  const myInfor: user = {
    name: "Nguyễn Minh Hoàng",
    age: 32,
    address: "Bắc Giang",
    jobs: ["developer", "teacher", "grab dirver"],
    company: "FPT Software",
    isMarried: true,
    gender: "lgbt+",
    hobbies: ["reading", "music", "movie", "game"],
  };
}