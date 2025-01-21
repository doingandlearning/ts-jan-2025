import fs from "node:fs";

type User = {
  name: string;
  age: number;
  region: string;
};

type Regions = Record<string, string[]>;

type NewsArticle = {
  id: string;
  headline: string;
  content: string;
};

// Callback Hell!!!
fs.readFile("./src/user.json", "utf-8", (err: Error | null, data: string) => {
  if (err) {
    console.log(err);
    process.exit(2);
  }
  const user: User = JSON.parse(data);
  fs.readFile(
    "./src/regions.json",
    "utf-8",
    (err: Error | null, data: string) => {
      if (err) {
        console.log(err);
        process.exit(2);
      }
      const regions: Regions = JSON.parse(data);
      fs.readFile(
        "./src/news.json",
        "utf-8",
        (err: Error | null, data: string) => {
          if (err) {
            console.log(err);
            process.exit(2);
          }
          const allNews: NewsArticle[] = JSON.parse(data);
          const userRegionNewsIDs = regions[user.region];
          const userNews = allNews.filter((article) =>
            userRegionNewsIDs.includes(article.id)
          );
          userNews.forEach((news) => {
            console.log(news.headline);
            console.log(news.content);
            console.log("-----");
          });
        }
      );
    }
  );
});
