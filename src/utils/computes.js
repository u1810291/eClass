export const copyTxt = (txt) => {
  const t = document.createElement("textarea");
  t.value = txt;
  document.body.appendChild(t);
  t.select();
  document.execCommand("copy");
  document.body.removeChild(t);
  alert(`Copied to clipboard!`);
};
