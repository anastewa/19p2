

 document.querySelector("#value").addEventListener("input", function() {
    const word = document.querySelector("#value").value;
    document.querySelector("#resultLength").textContent = word.length;
});