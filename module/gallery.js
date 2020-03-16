export function gallery(data, parent) {
  data.forEach(d => {
    const t = document.createElement("img");
    t.src = "images/" + d.i;
    parent.appendChild(t);
  });
}

export const settings = {
  meaning: 42,
  author: "me"
};
