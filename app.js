let arr = [];

// Progression 1: create a function and fetch the api using axios
function getData() {
  const getBlog = document.getElementById('blog');

  axios
    .get(
      'https://gnews.io/api/v4/search?q=example&token=20272535ca1f753dbf1a5dae4438eca8&lang=en'
    )
    .then((res) => {
      const listOfArticles = res.data.articles;

      listOfArticles.forEach((article) => {
        const getArticle = document.createElement('div');
        getArticle.setAttribute('id', 'article');
        getArticle.setAttribute('class', 'article');

        const title = document.createElement('h3');
        const content = document.createElement('p');
        const img = document.createElement('img');

        title.innerText = article.title;
        content.innerText = article.content;
        img.setAttribute('src', article.image);

        getArticle.append(title);
        getArticle.append(img);
        getArticle.append(content);

        arr.push(getArticle);
      });

      arr.forEach((ele) => {
        getBlog.append(ele);
      });
    });
}

getData();
