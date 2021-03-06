<h1 align="center">
  iFood Frontend Test
</h1>

<p align="center">
<img src="https://i.ibb.co/9cmTnrq/ifoodtest.png" alt="iFood test application">

</p>

## Installation

Clone the repository

```bash
$ git clone https://github.com/michaelalmeida/ifood-frontend-test.git
$ cd ifood-frontend-test.git
```

When that's done, install the project dependencies.

```bash
$ npm install
```

## Running the Project

After finish the previous step ([installation](#installation)) , you can start the project:

```bash
$ npm start
```

Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.

| `npm <script>` | Description                         |
| -------------- | ----------------------------------- |
| `start`        | Serves your app at `localhost:3000` |
| `build`        | Builds the application              |
| `test`         | Runs unit tests                     |

### Configure your local env variables

| Variable                 | Value                                                                          |
| ------------------------ | ------------------------------------------------------------------------------ |
| `REACT_APP_SPOTIFY_API`  | The URL of Spotify API (Usually https://accounts.spotify.com/authorize)        |
| `REACT_APP_CLIENTID`     | You can get a Client ID registering a project on Spotify Developers' Dashboard |
| `REACT_APP_REDIRECT_URL` | If you are running locally, probably http://localhost:3000/login/              |

## Main Stack

| Package          | Description                                           |
| ---------------- | ----------------------------------------------------- |
| React            | A JavaScript library for building user interfaces     |
| Redux            | A Predictable State Container for JS Apps             |
| redux-thunk      | Middleware for Redux                                  |
| axios            | Promise based HTTP client for the browser and node.js |
| Ant Design       | React UI library                                      |
| styled-component | CSS as Components                                     |
| Enzyme           | JavaScript Testing utility for React                  |
| Jest             | JavaScript Testing Framework                          |
