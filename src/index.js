function getStarted() {
  let name = prompt("What's your name?");
  name.trim;
  let email = prompt("What's your email?");
  email.trim;
  let option = prompt("Are you interested in adopting or fostering?");
  option.trim;
  if ((option = "adopting")) {
    alert(
      "Thank you, " +
        name +
        ", for wanting to adopt! We'll be in touch soon. You're on your way to saving a life 🐶🐱"
    );
  } else {
    alert(
      "Thank you, " +
        name +
        ", for wanting to foster! We'll be in touch soon. You're on your way to saving a life 🐶🐱"
    );
  }
}

let button = document.querySelector(".get-started");
button.addEventListener("click", getStarted);
