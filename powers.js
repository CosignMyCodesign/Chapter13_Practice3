document.querySelector("#activate-flight").addEventListener("click", () => {
  function flightHandlerFunction () {
    let flightSect = document.getElementById("flight")
    flightSect.classList.remove("disabled")
    flightSect.classList.add("enabled")
  }
  flightHandlerFunction()
})


