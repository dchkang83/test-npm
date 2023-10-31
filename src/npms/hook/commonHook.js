export const useClickBgColor = (e) => {
  const {
    target: { value }
  } = e;

  document.body.style.background = value;
}