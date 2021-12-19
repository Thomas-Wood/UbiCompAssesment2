# Ubi Comp assesment 2

## Renewable energy benefits predictor

This application aims to allow user to easilly estimate for solar and wind power:

- How much energy could be generated per year / month / day
- How much money could be saved per year / month / day
- How long until break even (based on current prices)

## Key APIs

~~The primary source of information for this application is the NASA POWER API.~~

~~Web access: https://power.larc.nasa.gov/data-access-viewer/~~

~~Example API call: https://power.larc.nasa.gov/api/temporal/monthly/point?parameters=ALLSKY_SFC_SW_DWN,WS10M&community=RE&longitude=-1.8961&latitude=50.7429&format=JSON&start=2010&end=2020~~

The main API is now from PVWatts: https://developer.nrel.gov/docs/solar/pvwatts/v6/#request-url
This API provides the final estimates of power output meaning less calculations have to be done on the device.
This API is based on government standards and seems to be the go to for solar estimates.
