function addToFavorites(e) {
  // Get the id of the item that was clicked.
  var id = e.target.id;

  // Add the item to the favorites list.
  localStorage.setItem("favorites", localStorage.getItem("favorites") + "," + id);

  // Update the favorites list display.
  var favoritesList = document.getElementById("favoritesList");
  var newItem = document.createElement("li");
  newItem.innerHTML = id;
  favoritesList.appendChild(newItem);
}

// Add the onclick event listener to the heart icons.
var heartIcons = document.querySelectorAll(".btn");
for (var i = 0; i < heartIcons.length; i++) {
  heartIcons[i].addEventListener("click", addToFavorites);
}
