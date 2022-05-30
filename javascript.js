const aantal_vragen = vragenlijst['questions'].length;
let vraag_nummer = 1;

function renderVorigeVraag() {
    if (vraag_nummer > 1) {
        vraag_nummer -= 1;
        renderVraag(vraag_nummer);
    }
}

function renderVolgendeVraag() {
    if (vraag_nummer < aantal_vragen) {
        vraag_nummer += 1;
        renderVraag(vraag_nummer);
    }
}

function renderVraag(vraag_nummer) {
    document.querySelector('#button_vorige_vraag').classList.remove('invisible');
    document.querySelector('#button_volgende_vraag').classList.remove('invisible');
    if (vraag_nummer == 1) {
        document.querySelector('#button_vorige_vraag').classList.add('invisible');
    }
    if (vraag_nummer == aantal_vragen) {
        document.querySelector('#button_volgende_vraag').classList.add('invisible');
    }

    const vraag_object = vragenlijst['questions'][vraag_nummer-1];
    const vraag_type = vraag_object['type']; // Er zijn verschillende soorten vragen, zoals open vragen (type=string) en multiple-choice vragen (type=choice).
    const vraag_stelling = vraag_object['text'];
    const vraag_id = vraag_object['id'];

    let vraag_stelling_element = document.querySelector('#vraag_stelling'); // Alle variabelenamen met '_element' staan voor opgehaalde DOM elementen.
    vraag_stelling_element.textContent = vraag_stelling;
    let vraag_nummer_element = document.querySelector('#vraag_nummer');
    vraag_nummer_element.textContent = 'Vraag ' + vraag_nummer.toString() + ' / ' + aantal_vragen.toString();

    let antwoord_invoer_section_element = document.querySelector('#antwoord_invoer');
    antwoord_invoer_section_element.replaceChildren() // Verwijder alles uit de section.

    if (vraag_type == 'string') {
        const antwoord_input_html_string = '<input type="text" id="antwoord_input"></input>'; // Alle variabelenamen met _html_string staan voor HTML dat gegenereerd wordt en getoond wordt in de app
        antwoord_invoer_section_element.insertAdjacentHTML('afterbegin', antwoord_input_html_string);
    }
    if (vraag_type == 'choice' || vraag_type == 'open-choice') {
        const antwoord_opties_lijst = vraag_object['options'];
        antwoord_opties_lijst.forEach((antwoord_optie_object,idx) => {
            const antwoord_optie = antwoord_optie_object['text'];
            const antwoord_optie_id = antwoord_optie_object['id'];
            const antwoord_optie_html_string = '<section class="antwoord_optie"><input type="radio" name="'+vraag_id+'" id="'+antwoord_optie_id+'"><label for="'+antwoord_optie_id+'">'+antwoord_optie+'</label></section>';
            antwoord_invoer_section_element.insertAdjacentHTML('beforeend', antwoord_optie_html_string);
        })
    }
    if (vraag_type == 'open-choice') {
        const antwoord_input_html_string = '<input type="text" id="antwoord_input"</input>'; // Alle variabelenamen met _html_string staan voor HTML dat gegenereerd wordt en getoond wordt in de app
        antwoord_invoer_section_element.insertAdjacentHTML('beforeend', antwoord_input_html_string);
    }
}


window.onload = () => {
    const button_vorige_vraag = document.querySelector('#button_vorige_vraag').addEventListener('click',renderVorigeVraag);
    const button_volgende_vraag = document.querySelector('#button_volgende_vraag').addEventListener('click',renderVolgendeVraag);
    renderVraag(1);

}