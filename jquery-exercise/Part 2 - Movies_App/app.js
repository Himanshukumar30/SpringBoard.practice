// Add new entry to movie container once click on submit
$("form").on("submit", function (e) {
  e.preventDefault();
  let movieName = $("input").eq(0).val();
  let movieRating = $("input").eq(1).val();
  let newEntry = { movieName, movieRating };
  let htmlToAdd = createNewEntry(newEntry);
  $("#movie-container").append(htmlToAdd);
  $("form").trigger("reset");
});

// Delete entry when clicked on delete button corresponding to movie name
$("div").on("click", ".delete", function (evt) {
  //   console.log(evt);
  $(evt.target).parent().remove();
});

// function to create html to be pushed every time there is new Entry
function createNewEntry(data) {
  return `<div class=entry>
        <p>${data.movieName}</p>
        <p>${data.movieRating}</p>
        <button class=delete>Delete</button>
    </div>`;
}
