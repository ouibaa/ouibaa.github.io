let gui 
var w, h
var dotlen
let l_water, r_water, l_ion, r_ion
function setup() {
    createCanvas(1000, 700);
    gui = createGui();
    w = windowWidth
    h = windowHeight
    dotlen = 10
    l_water = createSliderV("slider", 50, 100, 32, 400);
    r_water = createSliderV("slider", 918, 100, 32, 400);
    l_ion = createSlider("slider", 100, 550, 390, 32);
    r_ion = createSlider("slider", 510, 550, 390, 32);
}
function draw(){
    background(255)
    drawGui()

    // Water mass text
    text("Water mass: " + (l_water.val*2).toFixed(2) + "kg", 20, 510, 300, 550)
    text("Water mass: " + (r_water.val*2).toFixed(2) + "kg", 865, 510, 1000, 550)
    // Ion concentration text
    text("Ion moles: " + (l_ion.val*10).toFixed(2) + "mol", 200, 600, 500, 650)
    text("Ion moles: " + (r_ion.val*10).toFixed(2) + "mol", 650, 600, 800, 650)

    dotrect('R', dotlen, 100, 100, 500, 500)
    dotrect('L', dotlen, 500, 100, 900, 500)
    var l_intensity = l_ion.val / (2* l_water.val)
    fill(0)
    textSize(15)
    text("Osmolality: " + (l_intensity * 10).toFixed(2) + "mol/kg", 100, 70, 300, 90)
    var r_intensity = r_ion.val / (2* r_water.val)
    text("Osmolality: " + (r_intensity * 10).toFixed(2) + "mol/kg", 700, 70, 900, 90)
    let c1 = color('hsla(26, 80%, 88%,' + l_intensity + ")")
    let c2 = color('hsla(171, 65%, 66%,' + r_intensity + ")")
    fluidbox(100, 100, 500, 500, l_water.val, c1)
    fluidbox(500, 100, 900, 500, r_water.val, c2)

    let v1 = createVector(500, 50)
    let mag = (l_intensity - r_intensity) * 250
    let v2 = createVector(mag, 0)
    drawArrow(v1, v2, 'black' )

    fill(58, 64, 90)
    textSize(15)
    text('Direction of water flow due to osmotic gradient', 350, 30, 600, 40)
    // text('vector length squared: ' + v1.magSq().toFixed(2), 10, 45, 90, 55);

    // ellipse(mouseX, mouseY, 80, 80)
}

function drawArrow(base, vec, myColor) {
    push();
    stroke(myColor);
    strokeWeight(3);
    fill(myColor);
    translate(base.x, base.y);
    line(0, 0, vec.x, vec.y);
    rotate(vec.heading());
    let arrowSize = 9;
    translate(vec.mag() - arrowSize, 0);
    triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    pop();
  }

function osmcalc(ion, water){
    var conc = ion / water
    return conc
}

function fluidbox(x1, y1, x2, y2, fillPercent, colour){
    noStroke()
    fill(colour)
    width = x2 - x1
    height = (y2 - y1) * fillPercent
    rect(x1 + 1, y2, width - 2, -height)
}

function dotrect(dotside, dotlen, xpos1, ypos1, xpos2, ypos2) {
    stroke(0)
    line(xpos1, ypos1, xpos2, ypos1)
    line(xpos1, ypos2, xpos2, ypos2)
    if (dotside == 'L'){
        dottedline(xpos1, ypos1, xpos1, ypos2, dotlen)
        line(xpos2, ypos1, xpos2, ypos2)
    } else if (dotside == 'R'){
        dottedline(xpos2, ypos1, xpos2, ypos2, dotlen)
        line(xpos1, ypos1, xpos1, ypos2)
    }
    
}
function dottedline(x1, y1, x2, y2, dotlen){
    strokeCap(ROUND);
    var numdots = (y2 - y1) / dotlen
    for (var i = 0; i < numdots; i++) {
        if (i%2==0) {
            continue
        }else {
            line(x1, (y1 + i * dotlen), x2, y1 + (i+1) * dotlen)
        }
    }

}