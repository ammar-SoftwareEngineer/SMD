function darkMode() {
  var element = document.body;
  element.className = "dark-mode";
}
function lightMode() {
  var element = document.body;
  element.className = "light-mode";
}

function myFunction() {
    document.getElementById("clicklang").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.click')) {
      var dropdowns = document.getElementsByClassName("menu-lang");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }