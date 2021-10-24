/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement('table');
    this.elem.insertAdjacentHTML('afterbegin', `
       <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>
    `);

    let tableBody = rows.map(array => {
      return Object.values(array).map(itemTh => {
        return `<th>${itemTh}</th>`;
      }).join('').concat(`<th><button>X</button></th>`);
    }).map(itemTr => `<tr>${itemTr}</tr>`).join('');
    
    this.elem.insertAdjacentHTML('beforeend', `<tbody>${tableBody}</tbody>`);

    this.elem.addEventListener('click', event => {
      event.target.tagName !== 'BUTTON' || event.target.closest('tr').remove();
    });
  }
}
