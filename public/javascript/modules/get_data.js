import { renderVraag } from './render_api_data.js'
import { renderAantalVragenText } from './render_api_data.js'
import { vragenlijst_voorbeeld_json } from './vragenlijst.js'

export async function getData() {
  //   showLoadingState()
  const api_url = 'https://fhir.mibplatform.nl/api/Questionnaires/2'
  const response = fetch(api_url)
    .then((response) => { // Check if the response status is OK, if yes return the response data
      if (response.status >= 200 && response.status <= 299) {
        return response.json()
      } else {
        return vragenlijst_voorbeeld_json; // Fallback
      }
    })

    .then(function(data) {
      console.log(data)

      // hideLoadingState()
      const aantal_vragen = data['questions'].length;

      renderAantalVragenText(aantal_vragen)

      // Clone and reverse question array to render it in reverse order
      const vragen = data['questions'].slice().reverse();
      for (const i in vragen) {
        const vraag = vragen[i];
        renderVraag(i, vraag);
      }
    })

    .catch((error) => { // If the response status is not OK
      console.log(error)
    })

    .finally(() => { // Always executed
      console.log('Program finished')
    })
}
