/**
 * Terence Williams
 * 01/22/15
 * Debugging Search v3
 */



// Create privatized scope using a self-executing function
(function(){                                                      // Self-executing function created

    // Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
    var resultsDIV = document.getElementById("results"),             // Getting element from DOM
        searchInput = document.forms[0].search,        // Needs var indicator
        currentSearch = ''               // Needs var indicator and has no string
        ;

    // Validates search query
    var validate = function query(){           // Misspelled word and var operator should be one = sign   // Function name outside parenthesis

        // Trim whitespace from start and end of search query      // Whitespace loop created
        while(query.charAt(0) = " "){                       // While loop for whitespace
            query = query.substring(1, query.length);
        };
        while(query.charAt(query.length-1) === "") {      // While loop outcome
            query = query.substring(0, query.length - 1);
        };                                             // Needs closing curly for loop

            // Check search length, must have 3 characters
            if(query.length < 3){                     // Beginning of if statement specifying if < 3 is given what outcome should be
                alert("Your search query is too small, try again.");    // Qoutation needed at end of inside alert

                // (DO NOT FIX THE LINE DIRECTLY BELOW)
                searchInput.focus();     // Code correct w/return outcome
                return;
            };

            search(query);        //
        };

        // Finds search matches
        var search = function query(){           // var setup and function initiator  // Function name no parenthesis // curly brace needed

        // split the user's search query string into an array
        var queryArray = query.split(" ");    // Needs to change join to split in order to get correct outcome

        // array to store matched results from database.js
        var results = [];           // Array created to store match results

        // loop through each index of db array
        for(var i=0, j=db.length; i<j; i++){        // Loop created to loop through index db

            // each db[i] is a single video item, each title ends with a pipe "|"
            // save a lowercase variable of the video title
            var dbTitleEnd = db[i].indexOf('|');              // Index db var setup
            var dbitem = db[i].toLowercase().substring(0, dbTitleEnd);    // camelcase is wrong changed tolowercase to toLowercase

            // loop through the user's search query words
            // save a lowercase variable of the search keyword
            for(var ii=0, jj=queryArray.length; ii<jj; ii++){  // Loop created to loop through user's search words
                var qitem = queryArray[ii].toLowercase();      // tolowercase needs changed to toLowercase

                // is the keyword anywhere in the video title?
                // If a match is found, push full db[i] into results array
                var compare = dbitem.indexOf(qitem);    // var setup for dbitem created
                if(compare !== -1){                    // if statement created to compare and push db change
                    results.push(db[i]);              // Results created with push element
                };
                ;
                ;

                results.sort();        // where results are sorted

                // Check that matches were found, and run output functions
                if(results.length = 0){          // if statement created to check matches
                    noMatch();
                }else{
                    showMatches(results);      // output from if statement
                };
            };

            // Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
            var noMatch = function(){       // var setup created
                var html = ''+                       // Html interaction created here
                        '<p>No Results found.</p>'+
                        '<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'   // Html interaction created here
                    ;
                resultsDIV.innerHTML = html;        // more DOM-Html interaction created
            };

            // Put matches into page as paragraphs with anchors
            var showMatches = function results(){        // var setup created to start paragraphs with anchors  // changed parenthesis location

                // THE NEXT 4 LINES ARE CORRECT.    // Dom-html interaction created for paragraphs
                var html = '<p>Results</p>',
                    title,
                    url
                    ;

                // loop through all the results search() function
                for(var i=0, j=results.length; i<j; i++){          // Loop created to loop through results

                    // title of video ends with pipe
                    // pull the title's string using index numbers
                    titleEnd = results[i].indexOf('|');       // Title results setup created
                    title = results[i].substring(0, titleEnd);   // changed subString to substring

                    // pull the video url after the title
                    url = results[i].substring(results[i].indexOf('|')+1, results[i].length);  //setup to pull video url created

                    // make the video link - THE NEXT LINE IS CORRECT.
                    html += '<p><a href=' + url + '>' + title + '</a></p>';    // Dom-html interaction created to make link
                };
                resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.  // results interaction and DOM
            };

            // The onsubmit event will be reviewed in upcoming Course Material.
            // THE LINE DIRECTLY BELOW IS CORRECT
            document.forms[0].onsubmit = function(){  // This helps automate the forms functions
                var query = searchInput.value;     // var setup for search input value
                validate(query);    // word misspelled

                // return false is needed for most events - this will be reviewed in upcoming course material
                // THE LINE DIRECTLY BELOW IS CORRECT
                return false;   // code correct
                ;

            })();         // code correct