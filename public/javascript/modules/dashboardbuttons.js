import { activateBalloonShow } from './balloons.js';

let hold_button = false;
let hold_button_counter = 0;

function changeProgressBarActionPlan(categorie,data_id,operator) {
    const action_plan_element = document.querySelector('[data-id="'+data_id+'"]');
    const progress_bar_action_plan_element = action_plan_element.querySelector('.progress_bar_action_plan'); // De progress bar zelf
    const progress_bar_action_plan_value_element = action_plan_element.querySelector('.progress_bar_action_plan_value'); // De waarde als DOM element
    let progress_bar_action_plan_value = parseInt(progress_bar_action_plan_value_element.textContent); // De waarde zelf
    const progress_bar_action_plan_max_value_element = action_plan_element.querySelector('.progress_bar_action_plan_max_value'); // De maximum waarde als DOM element
    const progress_bar_action_plan_max_value = parseInt(progress_bar_action_plan_max_value_element.textContent); // De maximale waarde zelf
    if (operator == 'min' && progress_bar_action_plan_value > 0) {
        if (progress_bar_action_plan_max_value > 20) { // Als de maximum waarde hoog genoeg is, kun je in stappen van (in dit geval) 5 tellen.
            progress_bar_action_plan_value -= 5;
        }
        else {
            progress_bar_action_plan_value -= 1;
        }
    }
    if (operator == 'plus' && progress_bar_action_plan_value < progress_bar_action_plan_max_value) {
        if (progress_bar_action_plan_max_value > 20) {
            progress_bar_action_plan_value += 5;
        }
        else {
            progress_bar_action_plan_value += 1;
        }
        if (progress_bar_action_plan_value == progress_bar_action_plan_max_value) {
            setInterval(activateBalloonShow, 16); // Heeft de gebruiker de progress bar helemaal gevuld?
        }
    }

    // Update de progress bar met de juiste kleuren.
    const percentage_of_action_plan_value = progress_bar_action_plan_value/progress_bar_action_plan_max_value*100;
    progress_bar_action_plan_value_element.style.left = percentage_of_action_plan_value + '%';
    if (categorie == 'voeding') {
        progress_bar_action_plan_element.style.background = 'linear-gradient(90deg, #e3ca47 0%, #e3ca47 '+percentage_of_action_plan_value+'%, #f1ecec '+percentage_of_action_plan_value+'%, #f1ecec 100%)';
    }
    else if (categorie == 'beweging') {
        progress_bar_action_plan_element.style.background = 'linear-gradient(90deg, #24a1bc 0%, #24a1bc '+percentage_of_action_plan_value+'%, #f1ecec '+percentage_of_action_plan_value+'%, #f1ecec 100%)';
    }

    progress_bar_action_plan_value_element.textContent = progress_bar_action_plan_value;
}

export function holdDashboardButton(e) {
    hold_button = true;
    buttonHold(e);
}

export function releaseDashboardButton() {
    hold_button = false;
}

function buttonHold(e) {
    let categorie; // Bepaal of het dashboardbutton hoort bij een action plan over voeding of beweging. Dit is belangrijk om later de progress bar op het dashboard de juiste kleuren mee te geven.
    const element_classlist = Array.from(e.path[3].classList);
    if (element_classlist.includes('action_plan_voeding')) {
        categorie = 'voeding';
    }
    else {
        categorie = 'beweging';
    }
    const data_id = e.path[3].getAttribute('data-id'); // Bepaal bij welk action plan het dashboardbutton hoort.
    const operator = e.path[0].classList[0].split('_')[0]; // Bepaal of het om de plus of de min button gaat.

    if (hold_button) { // Wordt de button echt ingedrukt gehouden of wordt er een enkele keer op de button gedrukt?
        // Als de gebruiker de button aanraakt gaat er een counter lopen. Deze counter wordt weer gereset als de gebruiker de button weer loslaat.
        if (hold_button_counter == 0) { // Als de gebruiker op de knop klikt.
            changeProgressBarActionPlan(categorie,data_id,operator);
        }
        hold_button_counter += 1;
        if (hold_button_counter >= 10) { // Als de counter de 10 passeert, betekent dit dus dat de gebruiker de button ingedrukt hield.
            changeProgressBarActionPlan(categorie,data_id,operator);
        }
        setTimeout(function() {
            buttonHold(e)
        },50);
    }
    else {
        hold_button_counter = 0;
        return;
    }
}
