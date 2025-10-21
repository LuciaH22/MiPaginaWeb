let row = true;
function toggleDirection() {
  const container = document.getElementById("flex-container");
  container.style.flexDirection = row ? "column" : "row";
  row = !row;
}
