const dragons = [
  "Fire Dragon",
  "Water Dragon",
  "Earth Dragon",
  "Air Dragon",
  "Lightning Dragon",
  "Dark Dragon",
  "Metal Dragon",
  "Ice Dragon",
  "Wind Dragon",
  "Light Dragon",
  "Shadow Dragon",
];

function generateDragon() {
  const randomIndex = Math.floor(Math.random() * dragons.length);
  const dragon = dragons[randomIndex];
  document.getElementById("dragon").textContent = dragon;
}
