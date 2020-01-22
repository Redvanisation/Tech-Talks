const ntc = document.querySelector('.notice');
const alr = document.querySelector('.alert');

const hide = () => (
  setTimeout(() => {
    if (ntc) ntc.classList.toggle('hidden');
    if (alr) alr.classList.toggle('hidden');
  }, 2000)
);

const fetchData = (url, method) => (
  fetch(url)
    .then((res) => res.json())
    .then((data) => method(data))
);

export { hide, fetchData };
