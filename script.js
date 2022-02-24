window.onload = change_tab("about");

document.querySelector("#about").addEventListener("click", function(){
    change_tab(this.id);
});
document.querySelector("#resume").addEventListener("click", function(){
    change_tab(this.id);
});
document.querySelector("#projects").addEventListener("click", function(){
    change_tab(this.id);
});
document.querySelector("#contacts").addEventListener("click", function(){
    change_tab(this.id);
});

function change_tab(id) {
  document.getElementById("page_content").innerHTML = document.getElementById(
    id + "_desc"
  ).innerHTML;
  document.getElementById("about").className = "notselected";
  document.getElementById("resume").className = "notselected";
  document.getElementById("projects").className = "notselected";
  document.getElementById("contacts").className = "notselected";
  document.getElementById(id).className = "selected";
}


