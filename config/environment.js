/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'super-rentals',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    
    firebase: {
      apiKey: "AIzaSyD7AY0A_X43Ar88GOz6tr78DGVoeUdme1c",
      authDomain: "test-ci-a296e.firebaseapp.com",
      databaseURL: "https://test-ci-a296e.firebaseio.com",
      storageBucket: "test-ci-a296e.appspot.com",
    }
  };



  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    // Env.firebase = {
    //   apiKey: "AIzaSyD7AY0A_X43Ar88GOz6tr78DGVoeUdme1c",
    //   authDomain: "test-ci-a296e.firebaseapp.com",
    //   databaseURL: "https://test-ci-a296e.firebaseio.com",
    //   storageBucket: "test-ci-a296e.appspot.com",
    // }
  }

  return ENV;
};
