function toggleText() {
  const button = document.querySelector('.toggle-text-button');
  button.addEventListener('click', () => {
    const text = document.querySelector('#text');
    text.hidden ? text.hidden = false : text.hidden = true;
  });
}
