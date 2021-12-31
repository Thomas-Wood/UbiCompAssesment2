import moment from "moment";

export async function getAPI(currentEstimate) {
    // Full details on the request can be found on the NREL developers site: https://developer.nrel.gov/docs/solar/pvwatts/v6/#request-url

    let moduleTypeEfficiency = 0
    if (currentEstimate['moduleType'] == '0') {
        moduleTypeEfficiency = 0.15
    } else if (currentEstimate['moduleType'] == '1') {
        moduleTypeEfficiency = 0.19
    } else if (currentEstimate['moduleType'] == '2') {
        moduleTypeEfficiency = 0.1
    }

    let systemCapacity = (
        parseFloat(currentEstimate['arrayArea']) * 
        parseFloat(currentEstimate['panelRating']) *
        moduleTypeEfficiency
    )

    let params = {
        'system_capacity': systemCapacity,
        'module_type': currentEstimate['moduleType'],
        'array_type': currentEstimate['arrayType'],
        'tilt': currentEstimate['tilt'],
        'azimuth': currentEstimate['azimuth'],
        'lat': currentEstimate['latitude'],
        'lon': currentEstimate['longitude'],
        'api_key': 'QRveUlC3ybb0cOKs6MviFSd6NvlJSufEk5VnJIJF',
        'losses': '14',
        'radius': '0',
        'dataset': 'intl'
    }

    let response = await fetch('https://developer.nrel.gov/api/pvwatts/v6.json?' + new URLSearchParams(params))
        .then(response => response.json())

    let kwhGeneratedPerYear = response['outputs']['ac_annual']
    let results = {
        'dateTime': moment().format(),
        'kwhGeneratedPerYear': kwhGeneratedPerYear,
        'minBenefit': parseFloat(kwhGeneratedPerYear) * parseFloat(currentEstimate['exportRate']),
        'maxBenefit': parseFloat(kwhGeneratedPerYear) * parseFloat(currentEstimate['electricRate']),
        'monthlyAC': response['outputs']['ac_monthly']
    }

    return results
}