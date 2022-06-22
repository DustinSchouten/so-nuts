export function setHistoryBars() {
    const all_action_plans_element = document.querySelectorAll('.action_plan');
    for (let data_idx=0; data_idx<all_action_plans_element.length; data_idx++) { // Voor elk action plan.
        const action_plan_element = document.querySelector('[data-id="'+(data_idx+1)+'"]');
        const goal_value_element = action_plan_element.querySelector('.progress_bar_action_plan_max_value'); 
        const goal_value = parseInt(goal_value_element.textContent); // De waarde die ten doel gesteld is voor het action plan.
    
        for (let history_bar_idx=0; history_bar_idx<4; history_bar_idx++) { // Voor elke history bar bij een action plan
            const history_bar_element = action_plan_element.querySelectorAll('.history_bar')[history_bar_idx];
            const history_bar_value_element = action_plan_element.querySelectorAll('.history_bar_value')[history_bar_idx];
            const history_bar_value = history_bar_value_element.textContent;
            const part_of_goal_value = (history_bar_value / goal_value);
            history_bar_element.style.width = 'calc((100% - 140px) * '+part_of_goal_value+')';
        }
    }
}