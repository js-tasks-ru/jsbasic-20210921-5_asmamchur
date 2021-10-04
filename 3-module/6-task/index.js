function getFemales(users) {
  return users.reduce((females, item) => {
    if (item.gender == 'f') {
      females.push(`${item.firstName} ${item.lastName}`);
    }
    return females;
  }, []);
}
