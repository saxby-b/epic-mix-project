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
  mixInfo(epicMix);
});

total.innerText = `${epicMix.length} great songs!`;

const mixInfo = function (mix) {
  mix.forEach(function (song, index) {
    let li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">#${index + 1} </span> ${song}`;
    mixList.append(li);
  })
}
