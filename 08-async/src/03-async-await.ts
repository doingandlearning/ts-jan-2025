async function syncOperation() {
  return "Hello";
}
import fs from "node:fs/promises";

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

async function getNewsForUser(): Promise<NewsArticle[]> {
  try {
    // Read and parse the user data
    const userDataStringPromise = fs.readFile("./src/user.json", "utf8");
    const regionsDataStringPromise = fs.readFile("./src/regions.json", "utf8");
    const newsDataStringPromise = fs.readFile("./src/news.json", "utf8");

    // Anything sync that doesn't need that data!!!

    const [userDataString, regionsDataString, newsDataString] =
      await Promise.all([
        userDataStringPromise,
        regionsDataStringPromise,
        newsDataStringPromise,
      ]);

    // Read and parse the regions data
    let user: User;
    try {
      user = JSON.parse(userDataString);
    } catch (error) {
      console.log(error);
      user = { region: "SE", name: "Not logged in", age: NaN };
    }

    const regions: Regions = JSON.parse(regionsDataString);
    const userRegionNewsIDs = regions[user.region];

    // Read and parse the news data
    const allNews: NewsArticle[] = JSON.parse(newsDataString);

    // Filter out the relevant news articles for the user's region
    const userNews = allNews.filter((article) =>
      userRegionNewsIDs.includes(article.id)
    );
    return userNews;
  } catch (error) {
    console.log(error);
    return []; // Return an empty array in case of an error
  }
}

// Usage
// getNewsForUser().then((news) => {
//   news.forEach((article) => {
//     console.log(article.headline);
//     console.log(article.content);
//     console.log("-----");
//   });
// });

async function run() {
  const news = await getNewsForUser();
  news.forEach((article) => {
    console.log(article.headline);
    console.log(article.content);
    console.log("-----");
  });
}

run();
