---
title: What is Tequila API?
sidebar_label: What is Tequila API?
---

With the [Tequila](https://tequila.kiwi.com) platform, you can build your travel business application for free, with [kiwi.com](https://www.kiwi.com)'s content, technology, and services.

All you need to start working with the **Tequila** API is to be registered and have your API key.
Check the guide [Get your Tequila API key](guide-tequila-api-key.md) for information on how to grab your API Key.

To implement the basic search, you need the `/locations` and `/search` API calls.

- **Locations API**: This API allows you to search for cities, airports, stops, and other locations. ([docs](https://tequila.kiwi.com/portal/resources/locations_api))

- **Search API**: This API allows you to search for one-way or return type of itineraries. ([docs](https://tequila.kiwi.com/portal/resources/search_api))

- **Multicity API**: This API allows you to search multi-city itineraries. A _multi-city trip_ is a journey where the passenger travels from one city to another, stays there for a couple of days and then continues the journey to another city. ([docs](https://tequila.kiwi.com/portal/resources/multicity_api))

- **NOMAD API**: This search API is for those travellers who would like to visit n-number of cities in any order. ([docs](https://tequila.kiwi.com/portal/resources/nomad_api))

In order to finish booking the itinerary, you need to call the `/booking` API.

- **Booking API**: This API allows you to check if the price of the itinerary is still valid and if the itinerary is still available. It also saves the booking which initiates the booking process and confirms that the user payment was successful. ([docs](https://tequila.kiwi.com/portal/resources/booking_api))

- **Webhooks API**: This API is a way for <span>Kiwi</span>.com to provide other applications with real-time information. ([docs](https://tequila.kiwi.com/portal/resources/webhooks))

- **VISA API**: With this API you can check if a passenger will need a VISA for a specific country.

You can find more information and documentation about the **Tequila API** on the Tequila [resources](https://tequila.kiwi.com/portal/resources) page.
