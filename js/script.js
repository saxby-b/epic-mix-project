const epicMix = [
    "Good Hearted Woman",
    "Crash My Party",
    "You Look Like Rain",
    "Forever After All",
    "Under Your Spell Again",
    "Call Me",
    "Ladies Love Outlaws",
    "Jolene",
    "Come On Down from the Mountain Top",
    "Fast Car",
    "Kansas",
    "Her Love Won't Turn On A Dime"
  ];
  
  const mixList = document.querySelector(".mix");
  const button = document.querySelector(".show-list");
  const total = document.querySelector(".total");
  
  button.addEventListener("click", function () {
    mixList.classList.remove("hide");
    button.classList.add("hide");
  });
  