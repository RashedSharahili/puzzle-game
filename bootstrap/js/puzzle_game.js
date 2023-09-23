let rows = 5;
let cols = 5;

let curvedTile;
let otherTile;

let turns = 0;

$(document).ready(function () {

    // initalize the board
    for (let row = 0; row < rows; row++) {

        for (let col = 0; col < cols; col++) {

            let tile = document.createElement("img");
            tile.src = "./../../bootstrap/images/national_day_puzzel/blank.jpg"

            // DRAG FUNCTIONALITY
            tile.addEventListener('dragstart', dragStart);
            tile.addEventListener('dragover', dragOver);
            tile.addEventListener('dragenter', dragEnter);
            tile.addEventListener('dragleave', dragLeave);
            tile.addEventListener('drop', dragDrop);
            tile.addEventListener('dragend', dragEnd);
            $("#board").append(tile);
        }
    }

    // pieces
    let pieces = [];
    for (let i = 1; i <= rows * cols; i++) {

        pieces.push(i.toString())
    }

    pieces.reverse();
    for (let i = 0; i < pieces.length; i++) {

        let j = Math.floor(Math.random() * pieces.length);

        // swap
        let temp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = temp;
    }

    for (i = 0; i < pieces.length; i++) {

        let tile = document.createElement("img");
        tile.src = "./../../bootstrap/images/national_day_puzzel/" + pieces[i] + ".jpg";

        // DRAG FUNCTIONALITY
        tile.addEventListener('dragstart', dragStart);
        tile.addEventListener('dragover', dragOver);
        tile.addEventListener('dragenter', dragEnter);
        tile.addEventListener('dragleave', dragLeave);
        tile.addEventListener('drop', dragDrop);
        tile.addEventListener('dragend', dragEnd);
        $("#pieces").append(tile);
    }

    //DRAG TILES
    function dragStart() {
        curvedTile = this; //this refers to image that was clicked on for dragging
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
    }

    function dragLeave() {

    }

    function dragDrop() {
        otherTile = this; //this refers to image that is being dropped on
    }

    function dragEnd() {
        if (curvedTile.src.includes("blank")) {
            return;
        }
        let currImg = curvedTile.src;
        let otherImg = otherTile.src;
        curvedTile.src = otherImg;
        otherTile.src = currImg;

        turns += 1;
        $("#turns").text(turns);
    }
});