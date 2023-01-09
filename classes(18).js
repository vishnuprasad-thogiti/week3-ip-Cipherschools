import pencilBox from "./pencilBox.js";

const newPencilBox = new pencilBox(
    "pencil Box",
    30,
    "red",
    12,
    12,
    24,
    false
);

console.log("The Pencil Box Object:", newPencilBox);
console.log("Size:", newPencilBox.size);