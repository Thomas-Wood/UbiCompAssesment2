# Ubi Comp assesment 2

## Renewable energy benefits predictor

This application aims to allow the user to easilly estimate the benefits they could have from solar panels.

- How much energy could be generated per year / month
- How much money could be saved per year

## Key APIs

The main API is from PVWatts: https://developer.nrel.gov/docs/solar/pvwatts/v6/#request-url
This API provides the final estimates of power output meaning less calculations have to be done on the device.
This API is based on government standards and seems to be the go to for solar estimates.
It's US based but uses data from weather stations all accross the world and will use the closest one to the selected location.

## Storage layout

Data is stored in Async storage under two names:

- currentEstimate
- savedEstimates

currentEstimate when full stores a dictionary containing:

- arrayArea
- panelRating
- moduleType
- arrayType
- tilt
- azimuth (described as angle from north to the user)
- latitude
- longitude
- electricRate
- exportRate

savedEstimates when full contains a list of dictionaries containing:

- estimate (same content as currentEstimate)
- results

Results is a dictionary containing:

- dateTime
- kwhGeneratedPerYear
- minBenefit
- maxBenefit
- monthlyAC (List of floats, 12 items long)

## Non-standard libraries

- React Navigation Bottom Tab Material Navigator
- React Navigation Stack Navigator
- React Native Maps
- Expo Location
- Async Storage
- Moment
- Expo Vector Icons
- react-native-responsive-linechart
