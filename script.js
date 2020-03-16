import { gallery as myStuff, settings } from "./module/gallery";
document.querySelector("h1").textContent = settings.meaning;
const data = [
  {
    i: "half-blood.jpg"
  },
  {
    i: "hallows_1.jpg"
  }
];
myStuff(data, document.body);
