window.addEventListener("load", function () {
  let btn = document.querySelector(".btn");

  const xhttp = new XMLHttpRequest(); //Ajax Request for superheroes.php

  btn.addEventListener("click", function () {
    let url = "superheroes.php";
    xhttp.onreadystatechange = loadList;
    xhttp.open("GET", url);
    xhttp.send();
  });

  function loadList() {
    if (xhttp.readyState === XMLHttpRequest.DONE) {
      if (xhttp.status === 200) {
        let response = xhttp.responseText;
        alert(response);
      } else {
        alert("There's a problem with the request");
      }
    }
  }
});
