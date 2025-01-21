const header = document.getElementsByTagName("h1");

header[0].innerHTML = "BBC JavaScript";

const shopButton = document.getElementById("shops") as HTMLButtonElement;

shopButton.addEventListener("click", () => {
  console.log("I was clicked!");
});

const contentDiv = document.querySelector("#content");

const paragraph = document.createElement("p");
paragraph.innerText = "This is a manually created paragraph.";
contentDiv?.appendChild(paragraph);
