document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items
  document.getElementById("cheese").addEventListener("submit", (event) => {
    event.preventDefault();
    let val = document.getElementsByClassName("favorite-input")[0].value;
    document.getElementsByClassName("favorite-input")[0].value = "";

    let li = document.createElement('li')
    li.textContent = val;
    document.getElementById("sf-places").appendChild(li)
  });
  // can make this on click, turn submit button to just type button
  // --- your code here!



  // adding new photos

  // --- your code here!



});
