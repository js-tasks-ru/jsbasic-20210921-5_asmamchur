function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  friends.forEach(item => {
    let li = document.createElement('li');
    li.innerHTML = `${Object.values(item)[0]} ${Object.values(item)[1]}`;
    ul.append(li);
  });
  return ul;
}
