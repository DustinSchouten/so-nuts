export function switchActionPlanVisibility(e) {
    const action_plan_element = e.path[1];
    const action_plan_title_element = action_plan_element.querySelector('h2').textContent;
    if (Array.from(action_plan_element.classList).includes('action_plan_geselecteerd')) { // Als de betreffende action plan op geselecteerd stond
        action_plan_element.classList.remove('action_plan_geselecteerd');
        action_plan_element.classList.add('action_plan_ongeselecteerd');
        alert('Action plan "' + action_plan_title_element + '" verplaatst naar "ongeselecteerd"')
        action_plan_element.querySelector('.action_plan_visibility_icon').src = 'images/invisible_icon.png';
        action_plan_element.classList.add('low_opacity');
    }
    else { // Als de betreffende action plan op ongeselecteerd stond
        action_plan_element.classList.remove('action_plan_ongeselecteerd');
        action_plan_element.classList.add('action_plan_geselecteerd');
        alert('Action plan "' + action_plan_title_element + '" verplaatst naar "geselecteerd"')
        action_plan_element.querySelector('.action_plan_visibility_icon').src = 'images/visible_icon.png';
        action_plan_element.classList.remove('low_opacity');
    }
}