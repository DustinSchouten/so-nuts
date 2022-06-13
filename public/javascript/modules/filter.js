export function filterActionPlans(e) {
    let all_action_plans_element = document.querySelectorAll('.action_plan');
    let filter_value = e.target.value;
    all_action_plans_element.forEach((action_plan,idx) => {
        action_plan.classList.remove('invisible');
        let action_plan_classlist = Array.from(action_plan.classList)
        if (filter_value == 'voeding') {
            if (action_plan_classlist.includes('action_plan_beweging')) {
                action_plan.classList.add('invisible');
            }
        }
        if (filter_value == 'beweging') {
            if (action_plan_classlist.includes('action_plan_voeding')) {
                action_plan.classList.add('invisible');
            }
        }
    })
}