const RandomIdFunction = () => {
  const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'y', 'x', 'z'];
  const id = [];
  for (let i = 10; i > 0; i--) {
    const randomNumber = Math.floor(Math.random() * 100);
    const randomIndex = Math.floor(Math.random() * alfabeto.length);
    const letter = alfabeto[randomIndex];
    id.push(letter + randomNumber);
  }
  return id.join('');
};

export default RandomIdFunction;
