describe('', () => {
  const user1 = { name: "Leo", lastName: "Romero" };
  const user2 = { name: "Leo", lastName: "Romero" };
  const user3 = { name: "Leonardo", lastName: "Romero" };
  const user4 = { name: "Andrea", lastName: "Galvis" };

  it('same elements', () => {
    expect(user1).toEqual(user2)
  });

  it('Diferent element', () => {
    expect(user3).not.toEqual(user4);
  });
});
