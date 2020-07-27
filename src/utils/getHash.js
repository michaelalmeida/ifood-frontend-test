const hash = window.location.hash
    .substring(1)
    .split('&')[0]
    .split('=')[1];
window.location.hash = '';

export default hash;
