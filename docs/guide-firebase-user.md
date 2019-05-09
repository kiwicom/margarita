---
title: Guide: Firebase implementation
sidebar_label: Guide: Firebase implementation
---

Firebase is used for sample implementation of _**user login**_ and _**data storing**_.

---

**Note:** This part is completely _**optional**_ and can be replaced with any other solution of your choice.

_**Firebase**_ and _**Google login**_ related `.env` variables can be left _**empty**_. In this case the app will operate normally, only the user login part will be _**disabled**_.

---

To obtain **FIREBASE** and **GOOGLE_OAUTH** `.env` variables:

### Setup Firebase project
- Create new project on [Firebase website](https://console.firebase.google.com)
- Enable Google Sign-in method
    - Go to `Develop/Authentication` section of your project
    - Select `Sign-in method` tab
    - From `Sign-in providers` select and enable `Google` option
- Obtain Firebase `.env` variables
    - Select `Project Overview`
    - From top website **_Add an app to get started_** section select **web** version
    - Copy Firebase variables from modal into `.env`

### Obtain Google OAuth client IDs
- Go to [Credentials section of Google Developers Console](https://console.developers.google.com/apis/credentials)
- If it's not already selected, pick your newly created Firebase project from dropdown menu on website toolbar
- Create credentials (repeat these steps for **iOS** and **Android**)
    - Select `OAuth client ID` from `Create credentials` dropdown
    - Select platform (iOS or Android)
    - Fill required fields
    - **Important:** Package name needs to be set to `host.exp.exponent`
    - Click `Create`
- Copy newly created `Client ID` for both platforms from _**Credentials/OAuth 2.0 client IDs**_ section to `GOOGLE_OAUTH` variables inside `.env`