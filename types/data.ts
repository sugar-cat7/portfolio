import type {
  About,
  Career,
  Skill,
  Certification,
  Awards,
  Works,
  Other,
} from "./types";

export const careerStudents: Career[] = [
  {
    name: "Works Applications, Inc.",
    season: "2020/12 ~ 2021/2",
    text: "不動産会計システムの開発",
  },
  {
    name: "Stadium, Inc.",
    season: "2021/4 ~ 2021/10",
    text: "インタビューメーカーの開発",
  },
  {
    name: "Sozi, inc.",
    season: "2021/12 ~ 2022/4",
    text: "Pib-Webの開発",
    link: "https://pictureinbottle.com",
  },
];
export const careerSociety: Career[] = [
  {
    name: "Accenture Japan Ltd.",
    season: "2022/5 ~ 2023/6",
    text: "金融領域のシステム開発",
  },
  {
    name: "???",
    season: "2023/7 ~ now",
    text: "AI VoiceBot関連",
  },
];

export const skill: Skill[] = [
  { name: "HTML5", span: "1.5" },
  { name: "CSS3", span: "1.5" },
  { name: "TypeScript(React(Next.js), Angular) ", span: "1.5" },
  { name: "Python3(Algorism, Django)", span: "1.5" },
  { name: "Java(Spring Boot) ", span: "0.5" },
  { name: "Go", span: "0.5" },
];

export const about: About[] = [
  {
    text: "仕事: ソフトウェア開発",
  },
  {
    text: "学歴: 筑波大学大学院 修士(工学)",
  },
  {
    text: "好きなもの: テニス、FPSゲーム、アニメ、Vtuber",
  },
  {
    text: "関心: 競プロ、Web周りのパフォーマンスチューニング、セキュリティ",
  },
];

export const certification: Certification[] = [
  {
    name: "情報処理安全確保支援士",
  },
  {
    name: "基本/応用情報技術者",
  },
  {
    name: "HTMLプロフェッショナル Lv1",
  },
  {
    name: "LPIC Lv1",
  },
  {
    name: "AWS SAA-02",
  },
  {
    name: "ファイナンシャルプランナー3級",
  },
  {
    name: "MOS Excel",
  },
];

export const awards: Awards[] = [
  {
    name: "NYLE HACKATHON IN TSUKUBA 2021 準優勝",
    link: "https://prtimes.jp/main/html/rd/p/000000091.000055900.html",
  },
  {
    name: "JPHACKS2021 決勝進出",
    link: "https://jphacks.com/2021/result/finalist/",
  },
];

export const works: Works[] = [
  {
    title: "すぽじゅーる(ぶいすぽ非公式スケジュール",
    skill: "Next.js / Firebase",
    imageName: "spodule",
    imageLink: "https://www.vspo-schedule.com",
    otherLinks: {
      webpage: "https://twitter.com/vspodule",
    },
  },
  {
    title: "Covid-19 Dashboard",
    skill: "Next.js / Go / AWS Lambda",
    imageName: "covid",
    imageLink:
      "https://github.com/sugar-cat7/covid19-dashboard/blob/main/Goacademy.pdf",
    otherLinks: {
      github:
        "https://github.com/sugar-cat7/covid19-dashboard/blob/main/Goacademy.pdf",
    },
  },
  {
    title: "スマート募金",
    skill: "React / Flask / Arduino",
    imageName: "smartbokin",
    imageLink: "https://github.com/jphacks/C_2105",
    otherLinks: {
      github: "https://github.com/jphacks/C_2105",
    },
  },
  {
    title: "人数管理アプリ",
    skill: "React / Ruby on Rails",
    imageName: "reservation",
    imageLink: "https://github.com/sugar-cat7/ReservationApp-front",
    otherLinks: {
      github: "https://github.com/sugar-cat7/ReservationApp-front",
    },
  },
  {
    title: "かんたん経路くん",
    skill: "LIFF / Firebase / React",
    imageName: "keiro",
    imageLink: "https://github.com/sugar-cat7/MobilityApp",
    otherLinks: {
      github: "https://github.com/sugar-cat7/MobilityApp",
    },
  },
];

export const other: Other[] = [
  {
    year: "2023",
    content: [
      {
        name: "転職(Sier→事業会社)",
      },
    ],
  },
  {
    year: "2022",
    content: [
      {
        name: "Go Academy第2期参加",
        link: "https://www.cyberagent.co.jp/news/detail/id=28026",
      },
      {
        name: "ISUCON12 参加",
        link: "https://scrapbox.io/sugar-dev/ISUCON12%E4%BA%88%E9%81%B8%E5%8F%82%E5%8A%A0%E8%A8%98",
      },
      {
        name: "大学院修了→Sier(Application Developer)就職",
      },
    ],
  },
  {
    year: "2021",
    content: [
      {
        name: "JPHACKS2021 決勝進出",
        link: "https://jphacks.com/2021/result/finalist/",
      },
      {
        name: "NYLE HACKATHON IN TSUKUBA 2021 準優勝",
        link: "https://prtimes.jp/main/html/rd/p/000000091.000055900.html",
      },
      {
        name: "実験力学会 参加",
      },
    ],
  },
];
