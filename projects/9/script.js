const container = document.querySelector(".container");
const cardsContainerOne = document.querySelector(".cards-container-one");
const cardsContainerTwo = document.querySelector(".cards-container-two");
const cardsContainerThree = document.querySelector(".cards-container-three");
const backCard = document.querySelector(".back");
const playPauseAudioButton = document.querySelector(".playpause-track");
const audio = document.querySelector(".audio");
const seekSlider = document.querySelector(".seek-slider");
let isPlaying = false;
let cardIndex = 1;

setInterval(() => {
  seekSlider.value = (audio.currentTime / audio.duration) * 100;
}, 500);

const playPauseAudio = () => {
  isPlaying ? pauseAudio() : playAudio();
  cardsContainerOne.classList.add("rotate-to-back-from-default");
  if (cardsContainerOne.classList.contains("rotate-to-back-from-default")) {
    setTimeout(() => {
      backCard.classList.add("backTransition");
    }, 6000);
  }
};

const playAudio = () => {
  isPlaying = true;
  audio.play();
  playPauseAudioButton.innerHTML = `<i class="fa fa-pause-circle fa-2x"></i>`;
};

const pauseAudio = () => {
  isPlaying = false;
  audio.pause();
  playPauseAudioButton.innerHTML = `<i class="fa fa-play-circle fa-2x"></i>`;
};

const seekTo = () => {
  let seekto = audio.duration * (seekSlider.value / 100);
  audio.currentTime = seekto;
};

const cardHandle = () => {
  if (cardIndex === 1) {
    nextToCard2();
  } else if (cardIndex === 2) {
    nextToCard3();
  } else if (cardIndex === 3) {
    nextToCard4();
  } else if (cardIndex === 4) {
    nextToCard5();
  } else {
    backToDefault();
  }
};

const nextToCard2 = () => {
  container.classList.add("scroll-down-1");
  cardIndex = cardIndex + 1;
};

const nextToCard3 = () => {
  cardsContainerTwo.classList.add("rotate-to-back");
  cardIndex = cardIndex + 1;
};

const nextToCard4 = () => {
  container.classList.remove("scroll-down-1");
  container.classList.add("scroll-down-2");
  cardIndex = cardIndex + 1;
};

const nextToCard5 = () => {
  cardsContainerThree.classList.add("rotate-to-back");
  cardIndex = cardIndex + 1;
};

const backToDefault = () => {
  cardsContainerOne.classList.remove("rotate-to-back-from-default");
  backCard.classList.remove("backTransition");
  cardsContainerTwo.classList.remove("rotate-to-back");
  cardsContainerThree.classList.remove("rotate-to-back");
  container.classList.remove("scroll-down-2");

  cardIndex = 1;
};

