let displayNews = document.getElementById("displayNews");
let articles = news.articles;

let displaySources = document.getElementById("displaySources");
let articleSource = sauces.sources;

// console.log(sources);
let mainSource = articleSource.map(function (source) {
  let showSource = `<div id ="container-2">
    <h3>${source.name}</h3>
    <p>${source.description}</p>
    <p><a href="${source.url}">Read More</a></p>
    </div>`;
  return showSource;
});

displaySources.innerHTML = mainSource.join("");

let sortedArticles = articles.map(function (article) {
  let showArticle = `<div id ="container-1">
    <h3>${article.author ?? ""}</h3>
    <h4>${article.title ?? ""}</h4>
    <h5>${article.description ?? ""}</h5>
    <p><a href="${article.url}">Read More</a></p>
    <img src="${article.urlToImage}"></img>
    <h6>${article.publishedAt}</h6>
    </div>`;
  return showArticle;
});
console.log(sortedArticles);

displayNews.innerHTML = sortedArticles.join("");
