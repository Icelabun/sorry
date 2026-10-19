// Personalize these values before sharing the page.
const HER_NAME = "Sinehiwot";
const MY_NAME = "Nebiyu";
const HER_FAVORITE_COLOR_HEX = "[HER_FAVORITE_COLOR_HEX]";
const HER_FAVORITE_SONG_OR_QUOTE = "[HER_FAVORITE_SONG_OR_QUOTE]";

const openingLine = "I owe you an explanation, and unfortunately it involves a lot of textbooks.";
const accentFallback = "#c4a7ff";
const isHexColor = /^#[\da-f]{6}$/i.test(HER_FAVORITE_COLOR_HEX);
const accentColor = isHexColor
  ? HER_FAVORITE_COLOR_HEX
  : accentFallback;

document.documentElement.style.setProperty("--accent", accentColor);

const hexAccent = accentColor.match(/^#([\da-f]{6})$/i);
if (hexAccent) {
  const color = hexAccent[1];
  const red = Number.parseInt(color.slice(0, 2), 16);
  const green = Number.parseInt(color.slice(2, 4), 16);
  const blue = Number.parseInt(color.slice(4, 6), 16);
  document.documentElement.style.setProperty("--accent-rgb", `${red}, ${green}, ${blue}`);
}

document.querySelectorAll("[data-her-name]").forEach((element) => {
  element.textContent = HER_NAME;
});
document.querySelectorAll("[data-my-name]").forEach((element) => {
  element.textContent = MY_NAME;
});

const favoriteQuote = document.querySelector("[data-favorite-quote]");
if (HER_FAVORITE_SONG_OR_QUOTE && !HER_FAVORITE_SONG_OR_QUOTE.includes("[HER_")) {
  favoriteQuote.textContent = HER_FAVORITE_SONG_OR_QUOTE;
} else {
  favoriteQuote.hidden = true;
}

document.documentElement.classList.add("js-enabled");

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const typewriter = document.querySelector(".typewriter");
if (reducedMotion) {
  typewriter.textContent = openingLine;
} else {
  let characterIndex = 0;
  const typeNextCharacter = () => {
    typewriter.textContent = openingLine.slice(0, characterIndex);
    characterIndex += 1;
    if (characterIndex <= openingLine.length) {
      window.setTimeout(typeNextCharacter, 38);
    }
  };
  typeNextCharacter();
}

const revealSections = document.querySelectorAll(".reveal:not(.hero)");
if ("IntersectionObserver" in window && !reducedMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealSections.forEach((section) => revealObserver.observe(section));
} else {
  revealSections.forEach((section) => section.classList.add("is-visible"));
}

const video = document.querySelector(".video-player");
const videoStatus = document.querySelector(".video-status");
video.addEventListener("error", () => {
  videoStatus.textContent = "The video isn't available. Check that assets/video.mp4 is included and is a playable MP4 file.";
  videoStatus.hidden = false;
});
