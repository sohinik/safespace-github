// TODO: Replace with your project's config object. You can find this
// by navigating to your project's console overview page
// (https://console.firebase.google.com/project/your-project-id/overview)
// and clicking "Add Firebase to your web app"
var firebaseConfig = {
    apiKey: "AIzaSyCAwV3VwPziuf1aamoHy50H4XCQufQKvmY",
    authDomain: "safe-space-tech.firebaseapp.com",
    databaseURL: "https://safe-space-tech.firebaseio.com",
    projectId: "safe-space-tech",
    storageBucket: "safe-space-tech.appspot.com",
    messagingSenderId: "1036772802132",
    appId: "1:1036772802132:web:209d371f4b5eaec30c77c1",
    measurementId: "G-K9Y85BR5MW"
  };

// Initialize your Firebase app
firebase.initializeApp(firebaseConfig);

// Reference to the recommendations object in your Firebase database
var unsafe = firebase.database().ref("unsafe");

// Save a new recommendation to the database, using the input in the form
var submitUnsafe = function () {

  // Get input values from each of the form elements
  var name = $("#name").val();
  var secret = $("#personalSecret").val();
  var loc = $("#location").val();

  // Push a new recommendation to the database using those values
  unsafe.child(secret).set({
    "name": name,
    "secret": secret,
    "location": loc
  }).then().catch();
};


// Save a new recommendation to the database, using the input in the form
var submitSafe = function () {
  // Get input values from each of the form elements
  var name = $("#name").val();
  var secret = $("#personalSecret").val();

  let userRef = firebase.database().ref("unsafe/" + secret);
  userRef.remove()
};


// When the window is fully loaded, call this function.
// Note: because we are attaching an event listener to a particular HTML element
// in this function, we can't do that until the HTML element in question has
// been loaded. Otherwise, we're attaching our listener to nothing, and no code
// will run when the submit button is clicked.
$(window).load(function () {

  // Find the HTML element with the id recommendationForm, and when the submit
  // event is triggered on that element, call submitRecommendation.
  $("#safeForm").submit(submitSafe);
  $("#unsafeForm").submit(submitUnsafe);

});