const data = [
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    gender: 'm'
  },
  {
    firstName: 'Ирина',
    lastName: 'Шевченко',
    gender: 'f'
  },
  {
    firstName: 'Кристина',
    lastName: 'Бу',
    gender: 'f'
  }
];

describe('additional task. reduce method', () => {
  it('get females', () => {
    expect(getFemales(data)).toEqual(['Ирина Шевченко', 'Кристина Бу']);
  });
});
