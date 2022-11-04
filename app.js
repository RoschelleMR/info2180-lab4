window.addEventListener("load", function () {
  let btn = document.querySelector(".btn");
  let user_Input = document.querySelector("#name_alias");

  let result = document.getElementById("result");

  btn.addEventListener("click", function (event) {
    event.preventDefault();

    let input_value = user_Input.value;
    let url = `superheroes.php?name=${input_value}`;

    fetch(url)
      .then(function (response) {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then(function (data) {
        result.innerHTML = data;
      });
  });

  // const xhttp = new XMLHttpRequest(); //Ajax Request for superheroes.php

  // btn.addEventListener("submit", function (event) {
  //   event.preventDefault();

  //   xhttp.onreadystatechange = loadList;
  //   xhttp.open("GET", url, true);
  //   xhttp.send();
  // });

  // function loadList() {
  //   if (xhttp.readyState === XMLHttpRequest.DONE) {
  //     if (xhttp.status === 200) {
  //       let response = xhttp.responseText;
  //       alert(response);
  //       result.innerHTML() = response;
  //     } else {
  //       alert("There's a problem with the request");
  //     }
  //   }
  // }
});
