window.addEventListener("keypress", function pressSpace(key){
  if (key.keyCode === 32) {
    window.location.href = "/mainmenu";
  }
});


sessionStorage.setItem("audio", "true");
sessionStorage.setItem("seconds", 0);
