const API_KEY = 'YOUR_NEWS_API_KEY';
const newsDiv = document.getElementById('news');

async function fetchNews() {
  const res = await fetch(`https://newsapi.org/v2/top-headlines?category=technology&apiKey=${API_KEY}`);
  const data = await res.json();
  data.articles.slice(0, 10).forEach(article => {
    const div = document.createElement('div');
    div.className = 'bg-white p-4 rounded shadow';
    div.innerHTML = `
      <h2 class="font-bold">${article.title}</h2>
      <p class="text-sm">${article.description || ''}</p>
      <a href="${article.url}" target="_blank" class="text-blue-600">Read more</a>
    `;
    newsDiv.appendChild(div);
  });
}

fetchNews();
