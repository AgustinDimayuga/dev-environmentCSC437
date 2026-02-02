import { toHtmlElement } from "./toHtmlElement.mjs";

function createHeader() {
  const headerHtmlString = `
    <header>
      <div class="left-nav">
        <h1>Agustin Xocua Dimayuga</h1>
        <div class="links">
          <nav>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="hobbies.html">Hobbies</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="right-nav">
        <label>
          <input type="checkbox" autocomplete="off" />
          Dark Mode
        </label>
        <button class="button">Menu</button>
      </div>
    </header>
`;
  const headerHtml = toHtmlElement(headerHtmlString);
  const body = document.body;
  body.prepend(headerHtml);
  const header = body.querySelector("header");
  const btn = header.querySelector("button");
  const links = body.querySelector(".links");
  btn.addEventListener("click", () => {
    links.classList.toggle("links");
  });
}

createHeader();
