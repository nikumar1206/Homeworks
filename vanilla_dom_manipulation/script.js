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
  document.getElementById("photo_button").addEventListener("click", () => {
    let photo_form = document.getElementsByClassName("photo-form-container hidden")[0];
    photo_form.className = "photo-form-container";
  })


  let add_photo_button = document.getElementsByClassName("photo-url-submit")[0]

  document.getElementById("add_photo_form").addEventListener("submit", (event) => {
    event.preventDefault();
    let image_url = document.getElementsByClassName("photo-url-input")[0].value;

    let img = document.createElement("img")
    img.src = image_url
  
    let list_photos = document.getElementsByClassName("dog-photos")[0]
    list_photos.appendChild(img);


    //reset url
    let image_url_reset = document.getElementsByClassName("photo-url-input")[0].value;
    image_url_reset.value = "added!"
    
  });
  


  // adding new photos

  // --- your code here!



});
