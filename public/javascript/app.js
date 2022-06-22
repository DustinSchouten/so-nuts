import { changeProgressBarVragenlijst } from './modules/progress_bar_vragenlijst.js';
import { activateBalloonShow } from './modules/balloons.js';
import { filterActionPlan } from './modules/filter.js';
import { holdDashboardButton } from './modules/dashboardbuttons.js';
import { releaseDashboardButton } from './modules/dashboardbuttons.js';
import { switchActionPlanVisibility } from './modules/action_plan_visibility.js';
import { setHistoryBars } from './modules/history_bars.js';

window.onload = () => {
    const screen = window.location.pathname.split('/')[1]; // Op welk scherm is de gebruiker?

    if (screen == 'persoonlijke_vragen' || screen == 'vragen_over_voeding' || screen == 'vragen_over_beweging') {
        window.addEventListener('scroll',changeProgressBarVragenlijst);
    }
    else if (screen == 'tussenscherm_voor_dashboard') {
        setInterval(activateBalloonShow, 16);
    }
    else if (screen == 'dashboard') {
        const action_plan_filter_section_element = document.querySelector('.action_plan_filter_section');
        action_plan_filter_section_element.hidden = false; // Wanneer de gebruiker JavaScript heeft ingeschakeld wordt het keyword 'hidden' in het HTML element weggehaald, waardoor dit element dus zichtbaar wordt. Dit geldt voor alle '.hidden' regels.
        const action_plan_filter_categorie_element = document.querySelector('#action_plan_categorie_filter');
        action_plan_filter_categorie_element.addEventListener('change',filterActionPlan);
        const action_plan_filter_geselecteerd_element = document.querySelector('#action_plan_geselecteerd_filter');
        action_plan_filter_geselecteerd_element.addEventListener('change',filterActionPlan);
        
        const all_action_plans_element = document.querySelectorAll('.action_plan');
        for (let data_idx=0; data_idx<all_action_plans_element.length; data_idx++) { // Laad voor ieder action plan element apart alle benodigde eventlisteners en functies.
            const action_plan_element = document.querySelector('[data-id="'+(data_idx+1)+'"]');
            const action_plan_slider_section_element = action_plan_element.querySelector('.action_plan_slider_section');
            action_plan_slider_section_element.hidden = false;

            const action_plan_input_section_without_javascript_element = action_plan_element.querySelector('.action_plan_input_section_without_javascript');
            action_plan_input_section_without_javascript_element.hidden = true; // Hier wordt juist een HTML element verborgen als JavaScript is ingeschakeld.

            const min_button_element = action_plan_element.querySelector('.min_button_action_plan');
            min_button_element.addEventListener('touchstart',holdDashboardButton); // Het eventlistener 'click' is niet nodig omdat de gebruikers van deze app enkel een apparaat met touchscreen zullen gebruiken.
            min_button_element.addEventListener('touchend',releaseDashboardButton);
    
            const max_button_element = action_plan_element.querySelector('.plus_button_action_plan');
            max_button_element.addEventListener('touchstart',holdDashboardButton);
            max_button_element.addEventListener('touchend',releaseDashboardButton);

            const action_plan_set_visiblity_button_element = action_plan_element.querySelector('.action_plan_visibility_icon');
            action_plan_set_visiblity_button_element.hidden = false;
            action_plan_set_visiblity_button_element.addEventListener('click',switchActionPlanVisibility);
        }

        setHistoryBars()
    }

}