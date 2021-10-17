function highlight(table) {
  for (let tr of table.querySelectorAll('tbody > tr')) {
    tr.lastElementChild.getAttribute('data-available') === 'true' ? tr.classList.add('available') : tr.classList.add('unavailable');
    tr.lastElementChild.hasAttribute('data-available') || (tr.hidden = true);
    tr.children[tr.children.length - 2].textContent === 'm' ? tr.classList.add('male') : tr.classList.add('female');
    tr.children[1].textContent >= 18 || tr.setAttribute('style', "text-decoration: line-through");
  }

}
