(() => {
  let sigilButtons = document.querySelectorAll(".sigilContainer"),
      lightbox = document.querySelector(".lightbox"),
      closeButton = document.querySelector(".close-button"),
      houseVideo = document.querySelector("video"),
      playButton = document.querySelector(".play-button"),
      pauseButton = document.querySelector(".pause-button"),
      rewindButton = document.querySelector(".rewind-button");
  function showLightBox() {
    //debugger;
    lightbox.classList.add("show-lightbox");
    houseVideo.play();
  }

  function hideLightBox() {
    lightbox.classList.remove("show-lightbox");
     houseVideo.pause();
      houseVideo.currentTime = 0;
  }

  function pause() {
    houseVideo.pause();
  }

  function rewind() {
    houseVideo. play();
    houseVideo.currentTime = 0;
  }

  

  sigilButtons.forEach(button => button.addEventListener("click", showLightBox));
  closeButton.addEventListener("click",hideLightBox);
  pauseButton.addEventListener("click", pause);
  rewindButton.addEventListener("click", rewind);
  playButton.addEventListener("click", play);

})();
