function openNav() {
  document.getElementById("main").style.marginLeft = "25%";
  document.getElementById("mySidenav").style.width = "25%";
  document.getElementById("mySidenav").style.display = "block";
  document.getElementById("openNav1").style.display = 'none';
  document.getElementById("openNav1").style.transition = '4s';
}

function closeNav() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidenav").style.display = "none";
  document.getElementById("openNav1").style.display = "inline-block";
  document.getElementById("openNav1").style.transition = '4s';
}
