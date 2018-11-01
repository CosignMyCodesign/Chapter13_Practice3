document.querySelector("#activate-flight").addEventListener("click", () => {
  function flightHandlerFunction () {
    let flightSect = document.getElementById("flight")
    flightSect.classList.remove("disabled")
    flightSect.classList.add("enabled")
  }
  flightHandlerFunction()
})

document.querySelector("#activate-mindreading").addEventListener("click", () => {
  function mindReader () {
    let mindSect = document.getElementById("mindreading")
    mindSect.classList.remove("disabled")
    mindSect.classList.add("enabled")
  }
  mindReader()
})

document.querySelector("#activate-xray").addEventListener("click", () => {
  function xrayFunc () {
    let xraySect = document.getElementById("xray")
    xraySect.classList.remove("disabled")
    xraySect.classList.add("enabled")
  }
  xrayFunc()
})

document.querySelector("#enable-all").addEventListener("click", () => {
  function enableFunc() {
    let allSects = document.querySelectorAll("section")
    allSects.forEach(sect => {
      sect.classList.add("enabled")
      sect.classList.remove("disabled")
    })
  }
  enableFunc()
})

document.querySelector("#disable-all").addEventListener("click", () => {
  function disableFunc() {
    let allSects = document.querySelectorAll("section")
    allSects.forEach(sect => {
      sect.classList.add("disabled")
      sect.classList.remove("enabled")
    })
  }
  disableFunc()
})