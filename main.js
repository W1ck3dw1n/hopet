
var title = document.getElementById("title");
var description = document.getElementById("description");
var form_el = document.getElementById("myForm");

form_el.addEventListener("submit", function(evt) {
    evt.preventDefault();
    fillArray();
});

async function fillArray() {
    console.log("do something with "+ title.value, description.value);
    await fetch('https://todoedwin.herokuapp.com/create', {
      method: 'POST',
      body: {
        tags: ["estudio"],
        title: title.value,
        description: description.value
      }
    })
    console.log('si paso :V')
}


fillArray();
