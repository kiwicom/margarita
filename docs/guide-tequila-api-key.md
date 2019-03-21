---
title: Guide: Get your Tequila API key
sidebar_label: Guide: Get your Tequila API key
---

Margarita fetches data from the GraphQL server under `apps/graphql`. This server is just a proxy of officially supported Tequila REST API. The REST API requires an **API key** to be included in every call. The GraphQL server loads the value from an environment variable named `API_KEY`.

To get your **API key** you will need to create an account on the [Tequila](https://tequila.kiwi.com) website. The registration is free and gives you also access to other features of Tequila platform.

After successfully signing in to your account, you can read more information about **Tequila** and also explore the standard REST API.

To get your **API key** for the GraphQL server, go to the [My applications](https://tequila.kiwi.com/portal/my-applications) page.
Create a new app by clicking on the `+ Add application` button.

You should then choose the type of partnership you want with <span>Kiwi</span>.com: either **<span>Kiwi</span>.com Affiliate Program** partnership or **Book with <span>Kiwi</span>.com**  partnership. A description of these partnerships is available during this step.

After choosing your partnership, you need to select the product type. Currently, the GraphQL proxy supports only _Search_ and _Search & Book_ features. The _Multicity_ and _Nomad_ search will be supported at a later date.

Once you successfully created the application you will be redirected to the application detail page where you can grab your **API key** from the Detail section.
