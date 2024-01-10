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
    name: "Cyber Agent, Inc.",
    season: "2023/7 ~ now",
    text: "AI VoiceBotの開発",
  },
];

export const skill: Skill[] = [
  { name: "Go" },
  { name: "Java(Spring Boot) " },
  { name: "TypeScript(React, Angular) " },
  { name: "Python3(Algorism, Django)" },
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
    name: "GCP Professional Cloud Architect",
  },
  {
    name: "AWS SAA-02",
  },
  {
    name: "LPIC Lv1",
  },
  {
    name: "HTMLプロフェッショナル Lv1",
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
        name: "ISUCON13 参加",
        link: "https://scrapbox.io/sugar-dev/ISUCON13%E5%8F%82%E5%8A%A0%E8%A8%98%E9%8C%B2_SHISUCON",
      },
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

export const articles: Works[] = [
  {
    title: "AIを活用したChatBot・VoiceBotのシステム概観",
    skill: "",
    imageName: "speaker-aishift-1",
    imageLink:
      "https://speakerdeck.com/cyberagentdevelopers/dui-hua-xing-aipurodakutonojin-tozhan-wang-chatbotvoicebotnokai-fa-ji-shu-wojie-shuo?slide=20",
  },
  {
    title: "ローカルでDrizzle StudioとD1 Driverを使用する際の注意点",
    skill: "",
    imageName: "zenn-drizzle",
    imageLink:
      "https://zenn.dev/king/articles/3d5610429811eb",
  },
  {
    title: "Azure Container Apps + API Managementで構築するAPI Gateway",
    skill: "",
    imageName: "zenn-aca",
    imageLink:
      "https://zenn.dev/aishift/articles/881504222e1e85",
  },
  {
    title: "connect-go から学ぶコード生成",
    skill: "",
    imageName: "zenn-connect-go",
    imageLink:
      "https://zenn.dev/aishift/articles/181bec652a0fc1",
  },
  {
    title: "gRPCとフロントエンド_Connectを添えて",
    skill: "",
    imageName: "speaker-connect",
    imageLink:
      "https://speakerdeck.com/sugarcat7/grpctohurontoento-connectwotian-ete",
  },
  {
    title: "Discord Bot作成を完全に理解する",
    skill: "",
    imageName: "zenn-discord",
    imageLink: "https://zenn.dev/king/articles/4201f4ee821a27",
  },
];
