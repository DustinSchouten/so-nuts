import { getData } from './modules/get_data.js'
import { changeProgressBar } from './modules/progress_bar.js'
import { filterActionPlans } from './modules/filter.js'

window.onload = () => {
    const screen = window.location.pathname.split('/')[1];
    if (screen == 'persoonlijke_vragen' || screen == 'vragen_over_voeding' || screen == 'vragen_over_beweging') {
        getData()
        window.addEventListener('scroll',changeProgressBar);
    }
    else if (screen == 'dashboard') {
        const action_plan_filter = document.querySelector('#action_plan_filter');
        action_plan_filter.addEventListener('change',filterActionPlans);
    }

}