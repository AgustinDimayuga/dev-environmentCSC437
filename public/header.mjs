import { toHtmlElement } from "./toHtmlElement.mjs";
const headerHtmlString = `
    <header>
      <div class="name-links">
        <h1>Agustin Xocua Dimayuga</h1>
        <nav>
          <ul class="links">
            <li class="test"><a href="index.html">Home</a></li>
            <li><a href="hobbies.html">Hobbies</a></li>
          </ul>
        </nav>
      </div>
      <div class="right-nav">
        <label>
          <input type="checkbox" autocomplete="off" />
          Dark Mode
        </label>
        <button class="button">test</button>
      </div>
    </header>
`;
const headerHtml = toHtmlElement(headerHtmlString);
const body = document.body;
body.prepend(headerHtml);
