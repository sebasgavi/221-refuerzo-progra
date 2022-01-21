export const createBtn = (label: string, action: () => void) => {
  const btn = document.createElement('button');
  document.body.appendChild(btn);
  btn.innerText = label;

  btn.addEventListener('click', action);
}