// Selectors
const $body = $("body");
let $gifStore = $("#gifContainer");
const $form = $("#gifForm");

// Insert Image to the DOM
function createGif(res) {
  let resultSize = res.data.length;
  let randomImage = Math.floor(Math.random() * resultSize);
  let $newStore = $("<div>");
  let $newImage = $("<img>");
  $newImage.attr("src", res.data[randomImage].images.original.url);
  $newStore.append($newImage);
  $gifStore.append($newStore);
  $newStore.css("padding", "0.2%");
  $newStore.css("display", "inline-block");
  $newImage.css("width", "100%");
}

// Get input from the form and make get call
$form.on("submit", async function getGify(e) {
  e.preventDefault();
  let $search = $("#gifSearch");
  let imageSearch = $search.val();
  $search.val("");
  console.log(imageSearch);
  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: { q: imageSearch, api_key: "3YooolP6H7KkqomPVA8WQB8TtEi7Cjce" },
  });
  console.log(response);
  createGif(response.data);
});

// Delete images on delete button click
$("#deleteGif").on("click", function () {
  $gifStore.empty();
});

// Some styling
$form.css("padding", "10%");
$body.css("color", "white").css("backgroundColor", "black");
$("h1").css("text-align", "center");
$form.css("text-align", "center");
$("#addGif")
  .css("padding", "1%")
  .css("backgroundColor", "green")
  .css("color", "white");
$("#deleteGif")
  .css("padding", "1%")
  .css("backgroundColor", "red")
  .css("color", "white");
$("#gifSearch").css("padding", "1%");
