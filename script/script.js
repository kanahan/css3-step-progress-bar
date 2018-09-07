function nextStep() {
  if (document.getElementsByClassName("active").length >= document.getElementsByTagName("li").length) {
    for (let index = 1; index < document.getElementsByTagName("li").length; index++) {
      document.getElementsByTagName("li")[index].className = "";
    }
  }
  else {
    const activeNum = document.getElementsByClassName("active").length;
    document.getElementsByTagName("li")[activeNum].className += " active";
  }
}