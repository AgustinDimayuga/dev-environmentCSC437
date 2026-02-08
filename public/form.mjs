import { toHtmlElement } from "./toHtmlElement.mjs";
function isValidEmail(stringToTest) {
  const emailRegex =
    /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_'+\-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i;
  // Regex from https://colinhacks.com/essays/reasonable-email-regex
  return emailRegex.test(stringToTest);
}
function detectForm() {
  // Get form reference
  const form = document.querySelector("form");
  // Add event listener to form when user clicks submit
  form.addEventListener("submit", (e) => {
    // Get email input and checkboxes references
    let isValid = true;
    const emailInput = form.querySelector("#email");
    // Check if email is valid
    if (!isValidEmail(emailInput.value)) {
      // If not set inner text in address error
      form.querySelector(".address-error").innerText = "Valid email required!";
      // Add semantic attributes
      emailInput.setAttribute("aria-describedby", "email error");
      emailInput.ariaInvalid = "true";
      // Focus element
      emailInput.focus();
      isValid = false;
    }
    const checkBoxes = form.querySelectorAll(".descriptor");
    let oneCheckSelected = false;
    for (const checkBox of checkBoxes) {
      if (checkBox.checked) {
        oneCheckSelected = true;
        break;
      }
    }

    if (!oneCheckSelected) {
      const fieldSet = form.querySelector("fieldset");
      fieldSet.querySelector(".checkbox-error").innerText =
        "Please select at least one of these options!";
      fieldSet.setAttribute("aria-describedby", "This field cannot be empty");
      fieldSet.ariaInvalid = "true";
      isValid = false;
      checkBoxes[0].focus();
    }
    const textBox = form.querySelector("#message");
    if (textBox.value.trim() === "") {
      form.querySelector(".message-error").innerText =
        "Please insert a message";

      isValid = false;
      const textArea = form.querySelector("#message");
      textArea.setAttribute("aria-describedby", "This field cannot be empty");
      textArea.ariaInvalid = "true";
      textBox.focus();
    }
    if (!isValid) {
      e.preventDefault();
    }
  });
}

detectForm();
