class Balloon {
    constructor() {
        this.position_X = Math.floor(Math.random()*100)
        this.position_Y = Math.floor(Math.random()*100) + 125;
        this.min_speed = 0.5;
        this.max_speed = 1;
        this.levitating_speed = Math.random() * (this.max_speed - this.min_speed) + this.min_speed;
    }
}

function addNewBalloons(idx) {
    const balloon_element = document.createElement('div'); // Maak voor elke ballon element een nieuwe div aan.
    balloon_element.classList.add('balloon');
    balloon_element.id = 'balloon_' + idx;

    const color_red_tint = Math.floor(Math.random()*200)+55;
    const color_green_tint = Math.floor(Math.random()*200)+55;
    const color_blue_tint = Math.floor(Math.random()*200)+55;
    const generated_color = 'rgb('+color_red_tint+','+color_green_tint+','+color_blue_tint+')';
    balloon_element.style.color = generated_color;
    balloon_element.style.backgroundColor = generated_color;

    document.querySelector('#container').appendChild(balloon_element)
    balloons_list[idx] = new Balloon;
}

function levitateBalloons() {
    for (let idx=0; idx<balloons_count; idx++) {
        const balloon_element = document.querySelector('#balloon_'+idx);
        const balloon = balloons_list[idx];
        if (balloon != 'none') {
            balloon.position_Y -= balloon.levitating_speed;
            balloon_element.style.top = balloon.position_Y + "%";
            balloon_element.style.left = balloon.position_X + "%";
        }
        if (balloon.position_Y < -25) { // Als de ballonnen volledig buiten het scherm zijn, worden ze van de DOM verwijderd.
            balloons_list[idx] = 'none';
            balloon_element.remove()
        }
    }
}

let balloons_list = {};
const balloons_count = 30;

let all_balloons_added = false;

export function activateBalloonShow() {
    if (all_balloons_added == false) { // Bij het activeren van de ballonnenshow worden eerst een aantal ballonnen toegevoegd aan de DOM.
        for (let idx=0; idx<balloons_count; idx++) {
            addNewBalloons(idx);
        }
        all_balloons_added = true;
    }
    else { // Als alle ballonnen toegevoegd zijn, worden ze 'losgelaten'.
        levitateBalloons();
    }
    
}