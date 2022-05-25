console.log("Hello from the JavaScript console!");

// Your AJAX request here

// Add another console log here, outside your AJAX request
$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b",
    type: "GET",
    dataType: "json",
    success: (data) => {
        let temp = data["main"]["temp"]

        console.log(temp);
        console.log("ajax request worked!");
    },
    error: () => {
        console.log("ajax request did not work!");
    }
})


// should run before the ajax (which is async)
console.log("this is outside the ajax request");