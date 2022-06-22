export function filterActionPlan() {
    const all_action_plans_element = document.querySelectorAll('.action_plan');
    
    const filter_value_categorie = document.querySelector('#action_plan_categorie_filter').value;
    const filter_value_geselecteerd = document.querySelector('#action_plan_geselecteerd_filter').value;
    
    all_action_plans_element.forEach((action_plan) => {
        action_plan.classList.remove('invisible'); // Voor de filters worden toegepast: zet alle action plans zichtbaar als default, voordat ze met filters weer onzichtbaar gemaakt kunnen worden.
        const action_plan_classlist = Array.from(action_plan.classList);
        if (filter_value_categorie == 'voeding') {
            if (action_plan_classlist.includes('action_plan_beweging')) { // Als het filter met 'Alleen voeding' wordt ingeschakeld, haal dan alle action plans met de class 'action_plan_beweging' weg.
                action_plan.classList.add('invisible');
            }
        }
        if (filter_value_categorie == 'beweging') {
            if (action_plan_classlist.includes('action_plan_voeding')) { // Precies andersom.
                action_plan.classList.add('invisible');
            }
        }
        if (filter_value_geselecteerd == 'geselecteerd') {
            if (action_plan_classlist.includes('action_plan_ongeselecteerd')) { // Zelfde principe met wel of niet geselecteerd.
                action_plan.classList.add('invisible');
            }
        }
        if (filter_value_geselecteerd == 'ongeselecteerd') {
            if (action_plan_classlist.includes('action_plan_geselecteerd')) {
                action_plan.classList.add('invisible');
            }
        }
    })
}