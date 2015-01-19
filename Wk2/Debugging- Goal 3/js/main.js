/**
 * Terence Williams
 * 01/18/2015
 * Debugging Goal 3
 */

// Create privatized scope using a self-executing function  // Creating a test self-executing function
function Javascript() {

    "use strict";


}
// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)   // Variable Initialization
var resultsDIV = document.getElementById("results"),
    searchInput = document.forms[0].search,
    currentSearch = "";

// Validates search query  // Validating search query
var validate = function (query) {


};


// Trim whitespace from start and end of search query  // Adjusting from start and end of search query

while (query.charAt(0) === "!"){
    query = query.substring(1, query.length);
}

while (query.charAt(query.length - 1) === "") {
    query = query.substring(0, query.length - 1);


// Check search length, must have 3 characters  // Search length declared and must have 3 characters

    if (query.length < 3) {
        alert("Your search query is too small, try again.");


// (DO NOT FIX THE LINE DIRECTLY BELOW)  // Search input

        searchInput.focus();

    }

    search(query);

}

// Finds search matches   //Find matches for users search

var search = function (query)


// split the user's search query string into an array   // Array used for user's search query

queryArray = query.join["10", "20", "30", "40", "50"];


// array to store matched results from database.js   // Array database matches stored here

var results = [];

// loop through each index of db array     // db array loops

for (var i = 0, j = db.length; i < j; i++) {

// each db[i] is a single video item, each title ends with a pipe "|"    // db descriptions
// save a lowercase variable of the video title     // lowercase variable store or save area

    var dbTitleEnd = db[i].indexOf('|');
    var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);


// loop through the user's search query words    // User search query loops
// save a lowercase variable of the search keyword     // Variable save area and description

    for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {
        var qitem = queryArray[ii].tolowercase();

// is the keyword anywhere in the video title?     // Finding info on keyword location
// If a match is found, push full db[i] into results array    // Match outcome results

        var compare = dbitem.indexOf(qitem);
        if (compare !== -1) {
            results.push(db[i]);

        }

        results.sort();

// Check that matches were found, and run output functions   // Validate matches and run them

        if (results.length = 0) {
            noMatch();

        } else {

            showMatches(results);

        }

    }

// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)   // Message output if no results

    var noMatch = function () {
        var html = '' +
                '<p>No Results found.</p>' +
                '<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'

            ;

        resultsDIV.innerHTML = html;
    };

    // Put matches into page as paragraphs with anchors    // Matches placement described
    var showMatches = function (results) {

        // THE NEXT 4 LINES ARE CORRECT.    // Correct code used
        var html = '<p>Results</p>',
            title,
            url
            ;

        // loop through all the results search() function       // Result search loops
        for (var i = 0, j = results.length; i < j; i++) {

            // title of video ends with pipe    // video title's end
            // pull the title's string using index numbers     // Title string usage
            titleEnd = results[i].indexOf('|');
            title = results[i].subString(0, titleEnd);

            // pull the video url after the title     // Video title pull
            url = results[i].substring(results[i].indexOf('|') + 1, results[i].length);

            // make the video link - THE NEXT LINE IS CORRECT.    // Correct code usage
            html += '<p><a href=' + url + '>' + title + '</a></p>';
        }
        resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
    };

    // The onsubmit event will be reviewed in upcoming Course Material.   // Unknown code usage
    // THE LINE DIRECTLY BELOW IS CORRECT   // Correct code usage
    document.forms[0].onsubmit = function () {
        var query = searchInput.value;
        validqte(query);

        // return false is needed for most events - this will be reviewed in upcoming course material   //Unknown code usage
        // THE LINE DIRECTLY BELOW IS CORRECT    // Correct code usage
        return false;


    }

    ();