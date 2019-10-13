let words = [
    "Angelo",
    "Claudio",
    "La Cinghia"
];

document.addEventListener('DOMContentLoaded', function (event) {
    words.forEach(word => {
        const parent = document.querySelector("section .word");

        for (let i = 0; i < word.length; i++) {
            const parentNode = document.createElement("DIV");
            parentNode.classList.add("character-wrapper");
            const node = document.createElement("SPAN");
            node.classList.add("tr");
            const ghostNode = document.createElement("SPAN");
            ghostNode.classList.add("ghost");
            node.innerText = word.charAt(i);
            ghostNode.innerText = word.charAt(i);
            parentNode.appendChild(node);
            parentNode.appendChild(ghostNode)
            parent.appendChild(parentNode);
        }
    })
});