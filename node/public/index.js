const h1 = document.querySelector('h1');

const fetchData = async (random) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${random}`);
  const data = await response.json();
  return data.title;
};

setTimeout(async () => {
  const random = Math.floor(5 * Math.random());
  h1.textContent = await fetchData(random);
}, 3000);
