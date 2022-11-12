// const section = document.getElementById("container");
// const secondWay = document.querySelector("#container");
// const liSecond = document.querySelectorAll(".second");
// const liThird = document.querySelector("ol .third");
// section.innerText = "Hello!";
/*--6--*/
// const div = document.querySelector(".footer");
// div.classList.add("main");
/*--7--*/
// const div = document.querySelector(".footer");
// div.classList.remove("main");
/*--8--*/
const newLi = document.createElement("li");
/*--9--*/
newLi.textContent = "four";
/*--10--*/
const ul = document.querySelector("ul");
ul.append(newLi);
/*--11--*/
const allLis = document.querySelectorAll("ol li");
for (let li of allLis) {
  li.style.backgroundColor = "green";
}
/*--12--*/
const div = document.querySelector(".footer");
div.remove();
