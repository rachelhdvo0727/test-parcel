//document.querySelector("h1").textContent = "I got a parcel";
const data = [
  {
    i: "half-blood.jpg"
  },
  {
    i: "hallows_1.jpg"
  }
];
data.forEach(d => {
  const t = document.createElement("img");
  t.src = "images/" + d.i;
  document.body.appendChild(t);
});
