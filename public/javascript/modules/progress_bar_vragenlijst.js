export function changeProgressBarVragenlijst() {
    let percentage_width = parseInt(window.scrollY/(document.body.clientHeight-window.screen.height)*100);
    if (percentage_width > 100) { // Dit percentage kan door een kleine bug soms boven de 100 procent uitkomen waardoor de progress_bar buiten het scherm kan komen. Vandaar deze correctie.
        percentage_width = 100;
    }
    document.querySelector('#progress_bar_vragenlijst').style.width = percentage_width + '%';
}