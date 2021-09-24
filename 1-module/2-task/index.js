/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  //Константин, в зависимости где вставлю выражение name === null, тесты могут упасть из-за length метода
  // (он не применяется с null). это норм или нужно писать по другому?
  if (name === null || name.length < 4 || !name || name.includes(' ')) {
    return false;
  } else {
    return true;
  }
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
