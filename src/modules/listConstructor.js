export default function listElementConstructor(score, even = null) {
  const li = document.createElement('li');
  li.classList.add('item');
  if (even !== null) { li.classList.add('even'); }
  li.textContent = `${score.name} : ${score.number}`;
  return li;
}
