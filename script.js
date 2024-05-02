var a = document.querySelector("h1")

a.innerHTML = "Document Object Model"
a.style.color = "yellow"
a.style.backgroundColor = "#000"

a.addEventListener("click", function () {
    // document.write("hello Chai pilo");
    a.style.color = "black"
    a.style.backgroundColor = "yellow"
})