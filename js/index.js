const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");

if (tilForm && tilList) {
  tilForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const dateInput = document.querySelector("#til-date");
    const titleInput = document.querySelector("#til-title");
    const contentInput = document.querySelector("#til-content");

    const date = dateInput.value;
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (!date || !title || !content) {
      return;
    }

    const item = document.createElement("article");
    item.className = "til-item";

    const time = document.createElement("time");
    time.dateTime = date;
    time.textContent = date;

    const heading = document.createElement("h3");
    heading.textContent = title;

    const body = document.createElement("p");
    body.textContent = content;

    item.append(time, heading, body);
    tilList.prepend(item);

    tilForm.reset();
    dateInput.focus();
  });
}
