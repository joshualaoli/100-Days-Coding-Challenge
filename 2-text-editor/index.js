let optionButtons = document.querySelectorAll(".option-button");
let advanceOptionButton = document.querySelectorAll("adv-option-button");
let fontName = document.getElementById("fontName");
let fontSize = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

let fontList = [
  "Arial",
  "Verdana",
  "Poppins",
  "Times New Roman",
  "Courier New",
  "Cursive",
  "Garamound",
];

const initializer = () => {
  highLighters(alignButtons, true);
  highLighters(spacingButtons, true);
  highLighters(formatButtons, true);
  highLighters(scriptButtons, true);

  fontList.map((value) => {
    let option = document.createElement("option");
    option.value = value;
    option.innerHTML = value;
    fontName.appendChild(option);
  });

  for (let i = 1; i <= 7; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    fontSizeRef.appendChild(option);
  }

  fontSizeRef.value = 3;
};

const modifyText = (command, defaultUi, value) => {
  document.execCommand(command, defaultUi, value);

  optionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modifyText(button.id, false, null);
    });
  });

  advanceOptionButton.forEach((button) => {
    button.addEventListener("change", () => {
      modifyText(button.id, false, button.value);
    });
  });

  linkButton.addEventListener("click", () => {
    let userLink = prompt("Enter a URL?");
    if (/http/i.test(userLink)) {
      modifyText(linkButton.id, false, userLink);
    } else {
      userLink = "http://" + userLink;
      modifyText(linkButton.id, false, userLink);
    }
  });
};

const highLighters = (className, needsRemoval) => {
  className.forEach((button) => {
    button.addEventListener("click", () => {
      if (needsRemoval) {
        let alreadyActive = false;
        if (button.className.contains("active")) {
          alreadyActive = true;
        }
        highLightersRemoval(className);
        if (!alreadyActive) {
          button.classList.add("active");
        }
      } else {
        button.classList.toggle("active");
      }
    });
  });
};

const highLightersRemoval = (className) => {
  className.forEach((button) => {
    button.classList.remove("active");
  });
};

window.onload = initializer;
