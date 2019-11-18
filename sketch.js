// comment this out, this is for debugging on old iphones
window.addEventListener("error", handleError, true);

function handleError(evt) {
    if (evt.message) { // Chrome sometimes provides this
        alert("error: " + evt.message + " at linenumber: " + evt.lineno + " of file: " + evt.filename);
    } else {
        alert("error: " + evt.type + " from element: " + (evt.srcElement || evt.target));
    }
}




var squares = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    colorMode(HSB, 255);
    ellipseMode(CORNER);

    // fullscreen(true);
}

function draw() {
    background(0);

    fill(255);
    noStroke();
    rect(10, 10, 25, 25);
    ellipse(40, 10, 25, 25);

    if (mouseIsPressed) {
        var s = new Square(mouseX, mouseY);
        squares.push(s);
    }

    for (let i = 0; i < squares.length; i++) {
        squares[i].display();
        if (squares[i].lifeTime < 1) squares.splice(i, 1);
    }
}

function keyPressed() {
    if (key == 'f' || key == 'F') fullscreen(true);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

class Square {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 50;
        this.lifeTime = 255;
    }

    display() {
        noStroke();
        var hue = map(this.x, 0, width, 0, 255);
        fill(hue, 255, 255, this.lifeTime);
        rect(this.x, this.y, this.size, this.size);
        this.lifeTime--;
    }

}
