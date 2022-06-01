const aantal_vragen = vragenlijst['questions'].length;
const container_element = document.querySelector('#container'); // Alle variabelenamen met '_element' staan voor opgehaalde DOM elementen.

function renderVraag(vraag_nummer) {
    const vraag_object = vragenlijst['questions'][vraag_nummer];
    const vraag_type = vraag_object['type']; // Er zijn verschillende soorten vragen, zoals open vragen (type=string) en multiple-choice vragen (type=choice).
    const vraag_id = vraag_object['id'];

    // Voor iedere vraag een vraagcontainer genereren en renderen
    let vraag_container_html_string = '<section class="vraag_container" data-id="vraag_'+(vraag_nummer+1).toString()+'">';
    container_element.insertAdjacentHTML('afterbegin',vraag_container_html_string); // Alle variabelenamen met _html_string staan voor HTML dat gegenereerd wordt en getoond wordt in de app
    let created_vraag_container_element = document.querySelector('[data-id="vraag_'+(vraag_nummer+1).toString()+'"]');

    // Het vraagnummer genereren en renderen
    let vraag_nummer_element = document.createElement('p');
    vraag_nummer_element.classList.add('vraag_nummer');
    vraag_nummer_element.textContent = 'Vraag ' + (vraag_nummer+1).toString() + ' / ' + aantal_vragen.toString();
    created_vraag_container_element.appendChild(vraag_nummer_element);

    // De vraagstelling genereren en renderen
    const vraag_stelling = vraag_object['text'];
    let vraag_stelling_element = document.createElement('p');
    vraag_stelling_element.classList.add('vraag_stelling');
    vraag_stelling_element.textContent = vraag_stelling;
    created_vraag_container_element.appendChild(vraag_stelling_element);

    // Een section genaamd antwoord_invoer genereren en renderen. In deze section worden de invoervelden en multiple-choice opties geplaatst.
    let antwoord_invoer_html_string = '<section class="antwoord_invoer_container"></section>';
    created_vraag_container_element.insertAdjacentHTML('beforeend',antwoord_invoer_html_string);
    let created_antwoord_invoer_container_element = document.querySelector('.antwoord_invoer_container');


    // De antwoord
    if (vraag_type == 'string') {
        const antwoord_input_html_string = '<input type="text" class="antwoord_input"></input>';
        created_antwoord_invoer_container_element.insertAdjacentHTML('beforeend', antwoord_input_html_string);
    }
    if (vraag_type == 'choice' || vraag_type == 'open-choice') {
        const antwoord_opties_lijst = vraag_object['options'];
        antwoord_opties_lijst.forEach((antwoord_optie_object,idx) => {
            const antwoord_optie = antwoord_optie_object['text'];
            const antwoord_optie_id = antwoord_optie_object['id'];
            const antwoord_optie_html_string = '<section class="antwoord_optie"><input type="radio" name="'+vraag_id+'" id="'+antwoord_optie_id+'"><label for="'+antwoord_optie_id+'">'+antwoord_optie+'</label></section>';
            created_antwoord_invoer_container_element.insertAdjacentHTML('beforeend', antwoord_optie_html_string);
        })
    }
    if (vraag_type == 'open-choice') {
        const antwoord_input_html_string = '<input type="text" class="antwoord_input"</input>';
        created_antwoord_invoer_container_element.insertAdjacentHTML('beforeend', antwoord_input_html_string);
    }
}


window.onload = () => {
    // const button_vorige_vraag = document.querySelector('#button_vorige_vraag').addEventListener('click',renderVorigeVraag);
    // const button_volgende_vraag = document.querySelector('#button_volgende_vraag').addEventListener('click',renderVolgendeVraag);
    for (let vraag_idx=aantal_vragen-1; vraag_idx>-1; vraag_idx--) {
        renderVraag(vraag_idx);
    }
}