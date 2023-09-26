interface Config {
    // Notion enviornment variables
    NOTION_API_SECRET: string;
    NOTION_DATABASE_ID: string;

    // Portfolio.v2
    V2_LOGO: string;
    V2_ICON: string;
    V2_NAVBAR_CAREER: string;
    V2_NAVBAR_WEBSITES: string;
    V2_NAVBAR_GAMES: string;
    V2_NAVBAR_MOBILE: string;

    // Portfolio.v3
    V3_BASE_URL: string;

    // Backblaze
    BACKBLAZE_BASE_URL: string;

    // Open Graph
    OG_IMAGE: string;
    OG_DESC: string;
    OG_TITLE: string;
    OG_URL: string;
    OG_AUTHOR: string;
    OG_TYPE: string;
}

const config: Config = {
    // Notion enviornment variables
    NOTION_API_SECRET: import.meta.env.NOTION_API_SECRET || "",
    NOTION_DATABASE_ID: import.meta.env.NOTION_DATABASE_ID || "",

    // Portfolio.v2
    V2_LOGO: "https://i.kalenwallin.com/file/portfoliov2/media/kw.svg",
    V2_ICON: "https://i.kalenwallin.com/file/portfoliov2/media/favicon",
    V2_NAVBAR_CAREER:
        "https://i.kalenwallin.com/file/portfoliov2/media/briefcase-outline.png",
    V2_NAVBAR_WEBSITES:
        "https://i.kalenwallin.com/file/portfoliov2/media/monitor-dashboard.png",
    V2_NAVBAR_GAMES:
        "https://i.kalenwallin.com/file/portfoliov2/media/controller.png",
    V2_NAVBAR_MOBILE:
        "https://i.kalenwallin.com/file/portfoliov2/media/cellphone-text.png",

    // Portfolio.v3
    V3_BASE_URL: "https://v3.kalenwallin.com/",

    // Backblaze
    BACKBLAZE_BASE_URL: "https://i.kalenwallin.com/file/portfoliov2",

    // Open Graph
    OG_IMAGE:
        "https://i.kalenwallin.com/file/portfoliov2/media/portfoliov2.png",
    OG_DESC: "A showcase of my skills through experiences.",
    OG_TITLE: "Portfolio | Kalen Wallin",
    OG_URL: "https://v5.kalenwallin.com",
    OG_AUTHOR: "Kalen Wallin",
    OG_TYPE: "website",
};

export default config;
