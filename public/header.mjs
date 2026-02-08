import { toHtmlElement } from "./toHtmlElement.mjs";

function createHeader() {
  const headerHtmlString = `
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
`;

  const headerHtml = toHtmlElement(headerHtmlString);
  // Get header reference
  const headerReference = document.querySelector("header");

  // Append html string to header
  headerReference.append(headerHtml);

  // Get button reference
  const btn = headerReference.querySelector("button");

  const linkReference = headerReference.querySelector(".links");
  const body = document.body;

  // addEventListener to button
  btn.addEventListener("click", () => {
    linkReference.classList.toggle("open");
  });

  // Check for clicks in body
  body.addEventListener("click", (e) => {
    // If click came outside from header
    if (!headerReference.contains(e.target)) {
      // If menu is opened remove it 
      if (linkReference.classList.contains("open")) {
        linkReference.classList.remove("open");
      }
    }
  });
  if (localStorage.getItem("darkMode") === "true") {
    console.log("added dark mode");
    body.classList.add("dark-mode");
    headerReference.querySelector("input").checked = true;
  }
}

function darkModeFunctionality() {
  const headerReference = document.querySelector("header");
  const checkBox = headerReference.querySelector("input");
  // Check if checkbox was clicke
  checkBox.addEventListener("change", () => {
    //If checked add darkmode 
    if (checkBox.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", checkBox.checked);
    //else normal 
    } else {
      localStorage.setItem("darkMode", checkBox.checked);
      document.body.classList.remove("dark-mode");
    }
  });
}

createHeader();
darkModeFunctionality();
