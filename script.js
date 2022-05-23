window.onload = change_tab("about");

document.querySelector("#about").addEventListener("click", function(){
    change_tab(this.id);
    hideMenu();
});
document.querySelector("#resume").addEventListener("click", function(){
    change_tab(this.id);
    hideMenu();
});
document.querySelector("#projects").addEventListener("click", function(){
    change_tab(this.id);
    hideMenu();
});
document.querySelector("#contacts").addEventListener("click", function(){
    change_tab(this.id);
    hideMenu();
});

var menu = document.getElementById("menu");
function showMenu(){
  menu.style.left="0";
}
function hideMenu(){
  menu.style.left="-100%";
}

function change_tab(id) {
  document.getElementById("page_content").innerHTML = document.getElementById(
    id + "_desc"
  ).innerHTML;
  document.getElementById("about").className = "notselected";
  document.getElementById("resume").className = "notselected";
  document.getElementById("projects").className = "notselected";
  document.getElementById("contacts").className = "notselected";
  document.getElementById(id).className = "selected";

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

