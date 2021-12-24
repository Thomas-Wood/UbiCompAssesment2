export async function getAPI(params) {
    // Full details on the request can be found on the NREL developers site: https://developer.nrel.gov/docs/solar/pvwatts/v6/#request-url

    //TODO Calculate system size (kW) with: arrayArea*panelRating*moduleTypeEfficiency
    // moduleType efficiency = 0.15 (standard panel), 0.19 (Premium panel), 0.1 (Thin film panel)

    let response = await fetch('https://developer.nrel.gov/api/pvwatts/v6.json?' + new URLSearchParams(params))
        .then(response => response.json())
        .then(json => console.log(json))
}