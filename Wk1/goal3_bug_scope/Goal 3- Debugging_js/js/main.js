/**
 * Terence Williams
 * 01-11-15
 * Goal 3 Debugging & Scope
 */

// Create a self-executing function
(function(){

    // Variables setup // There is an unneccessary parentheses // The var should be used on second variable
    var resultsDIV = document.getElementById("results"),
        searchInput = document.forms[0].search,
        currentSearch = ''
        ;

    // Variable to represent search query // validate misspelled
    var validqte == function(query){

        // Trim space at beginning and end of query  // There's no value within //
        while(query.charAt(0) = " "){
            query = query.substring(1, query.length);
        };
        while(query.charAt(query.length-1) === ""){
            query = query.substring(0, query.length-1);
            ;

            // Search character lengths and alert user with results // Missing punctuation  // No else present
            if(query.length < 3){
                alert("Your search query is too small, try again.);

                // Return Results
                searchInput.focus();
                return;
            };

            search(query); // Could be unnamed var
        };

        // Variable setup // Variable not closed on end
        var search = function(query)

        // Variable setup for Array // Unnecessary punctuation
        var queryArray = query.join(" ");

        // Variable setup // No info within to know variable
        var results = [];

        // Create loop
        for(var i=0, j=db.length; i<j; i++){

            // each db[i] is a single video item, each title ends with a pipe "|" // Variable for db[i]
            // save a lowercase variable of the video title  //lowercase variable declared
            var dbTitleEnd = db[i].indexOf('|');
            var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);

            // loop through the user's search query words  .. // Create a user loop
            // save a lowercase variable of the search keyword  // Create user variable // misspelled words
            for(var ii=0, jj=queryArray.length; ii<jj; ii++){
                var qitem = queryArray[ii].tolowercase();

                // Results listed for keyword
                // Create an if/else
                var compare = dbitem.indexOf(qitem);
                if(compare !== -1){
                    results.push(db[i]);
                };
                ;
                ;

                results.sort(); // Unnecessary punctuation // reults not concoled out right

                // Check and run output functions
                if(results.length = 0){
                    noMatch();
                }else{
                    showMatches(results); // Variable not setup correct
                };
            };

            // Create a "No Results" message // Not properly punctuated
            var noMatch = function(){
                var html = ''+
                        '<p>No Results found.</p>'+
                        '<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
                    ;
                resultsDIV.innerHTML = html;
            };

            // Variable setup for matches
            var showMatches = function(results){

                // Variable for html created
                var html = '<p>Results</p>',
                    title,
                    url
                    ;

                // Create loop for search() function
                for(var i=0, j=results.length; i<j; i++){

                    // Create title end point
                    //Use index numbers to pull string  // Improper setup
                    titleEnd = results[i].indexOf('|');
                    title = results[i].subString(0, titleEnd);

                    // Place order of video string
                    url = results[i].substring(results[i].indexOf('|')+1, results[i].length);

                    // Create link for video
                    html += '<p><a href=' + url + '>' + title + '</a></p>';
                };
                resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
            };

            // Console.log input
            // THE LINE DIRECTLY BELOW IS CORRECT
            document.forms[0].onsubmit = function(){
                var query = searchInput.value;
                validqte(query);

                // Create false return to end
                return false;
                ;

            })();
