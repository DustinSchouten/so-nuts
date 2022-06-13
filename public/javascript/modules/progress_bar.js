export function changeProgressBar() {
    let percentage_width = parseInt(window.scrollY/(document.body.clientHeight-window.screen.height)*100);
    if (percentage_width > 100) {
        percentage_width = 100;
    }
    document.querySelector('#progress_bar').style.width = percentage_width + '%';
}