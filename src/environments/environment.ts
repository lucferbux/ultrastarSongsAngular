// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB0jWVcevULTEnB8pkvdGIUPrsmiXEp3H0",
    authDomain: "ultrastar-songs.firebaseapp.com",
    databaseURL: "https://ultrastar-songs.firebaseio.com",
    projectId: "ultrastar-songs",
    storageBucket: "ultrastar-songs.appspot.com",
    messagingSenderId: "115752466609"
  }
};

