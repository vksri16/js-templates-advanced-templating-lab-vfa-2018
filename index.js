function init() {
  //put any page initialization/handlebars initialization here
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
}