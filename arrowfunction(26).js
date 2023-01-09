/* Arrow Function and this keyword */
window.size = 13;

const yellowpencilBox = {
    name: "Yellow Pencil Box",
    color: "blue",
    size: 24,
    newSize: function (size) {
        console.log(this.size);
        this.size = size;
        console.log(this.size);
        (() => {
            console.log(this.size);
        })();
    },
};

console.log(yellowpencilBox.newSize(5));