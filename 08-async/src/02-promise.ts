// Contract that a value will given at some point.
type User = {
  name: string;
  age: number;
  region: string;
};

type Regions = {
  [key: string]: string[];
};

type NewsArticle = {
  id: string;
  headline: string;
  content: string;
};
// Promise - pending/unsettled
// - rejected (settled)
// - resolved (settled)
import fs from "node:fs/promises";

// let user: User;
// let regions: Regions;
// let allNews: NewsArticle[];

// fs.readFile("./src/user.json", "utf-8")
//   .then((data) => {
//     user = JSON.parse(data);
//     return fs.readFile("./src/regions.json", "utf-8");
//   })
//   .then((data) => {
//     regions = JSON.parse(data);
//     return fs.readFile("./src/news.json", "utf-8");
//   })
//   .then((data) => {
//     allNews = JSON.parse(data);
//     const userRegionNewsIDs = regions[user.region];
//     const userNews = allNews.filter((article) =>
//       userRegionNewsIDs.includes(article.id)
//     );
//     userNews.forEach((news) => {
//       console.log(news.headline);
//       console.log(news.content);
//       console.log("-----");
//     });
//   });

// Promise.all([
//   fs.readFile("./src/user.json", "utf-8"),
//   fs.readFile("./src/regions.json", "utf-8"),
//   fs.readFile("./src/news.json", "utf-8"),
// ])
//   .then((data) => {
//     const user: User = JSON.parse(data[0]);
//     const regions: Regions = JSON.parse(data[1]);
//     const allNews: NewsArticle[] = JSON.parse(data[2]);
//     const userRegionNewsIDs = regions[user.region];
//     const userNews = allNews.filter((article) =>
//       userRegionNewsIDs.includes(article.id)
//     );
//     userNews.forEach((news) => {
//       console.log(news.headline);
//       console.log(news.content);
//       console.log("-----");
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

Promise.allSettled([
  fs.readFile("./src/user1.json", "utf-8"),
  fs.readFile("./src/regions.json", "utf-8"),
  fs.readFile("./src/news.json", "utf-8"),
]).then((data) => console.log(data));
