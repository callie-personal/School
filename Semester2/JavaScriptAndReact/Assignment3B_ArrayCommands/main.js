// IIFE
(() => {

	//Choose an array method to implement for each of the incomplete functions.
	//FOR/WHILE LOOPS OF ANY KIND ARE FORBIDDEN! You must use the available array functions to accomplish your goal.

	//Remember, you can chain together array function calls to attain your goals.
	// Ex: array.filter().map()

	//Get data for the TV Show "Friends"
	fetch('http://api.tvmaze.com/shows/431?embed[]=episodes&embed[]=cast')
    .then((response) => response.json())
    .then((json) => {

        //DO NOT MODIFY THE CODE IN HERE...check the console for your functions' output

        //1 - Create a function called getGuntherCount() which returns the total number of episodes 
        // where the character Gunther is mentioned in the episode summary.
        console.log('--------------------------------');
        console.log(`Gunther Count: ${getGuntherCount(json)}`);

        //2 - Create a function called getTotalRuntimeMinutes() that totals all runtime minutes for all episodes
        console.log('--------------------------------');
        console.log(`Total Runtime Minutes: ${getTotalRuntimeMinutes(json)}`);

        //3 - Create a function called getDateRangeEpisodeCount() that returns the number of episodes that aired in the year 2000
        console.log('--------------------------------');
        console.log(`Total episodes airing in year 2000: ${getTotalEpisodesInYear(json, "2000")}`);

        //4 - Create a function called getFemaleCastMembers() that returns an array of the names of the female cast members.
        console.log('--------------------------------');
        console.log(`Female Cast Members:`);
        console.log(getFemaleCastMembers(json));

        //5 - Create a function called getEpisodeTitles() which returns a list of episode
        //    where the argument string is found in the episode summary.
        console.log('--------------------------------');
        console.log(`Episodes that mention Ursula:`);
        console.log(getEpisodeTitles(json, 'Ursula'));

        //6 - Create a function called getCastMembersOver55() which returns a list of cast members
        //    who are currently older than 55 years of age.
        console.log('--------------------------------');
        console.log(`Cast Members over 55:`);
        console.log(getCastMembersOver55(json));

        //7 - Create a function called getTotalRuntimeMinutesExcludingSeasonSix that gets the total 
        //    runtime minutes for all episodes excluding episodes in season 6
        console.log('--------------------------------');
        console.log(`Total runtime in minutes excluding Season 6: ${getTotalRuntimeMinutesExcludingSeasonSix(json)}`);
    
        //8 - Create a function called getFirstFourSeasons that gets the episodes for the first four seasons 
        //    but only return an array of JSON objects containing the season number and episode name
        console.log('--------------------------------');
        console.log(`Episode JSON for first four seasons:`)
        console.log(getFirstFourSeasons(json));

        //9 - Create a function called getEpisodeTallyBySeason that returns an object containing the season name and the total episodes as key:value pairs for each season
        console.log('--------------------------------');
        console.log(`Tally of episodes by season:`);
        console.log(getEpisodeTallyBySeason(json));

        //10 - Create a funtion called capitalizeTheFriends that transforms the episode JSON data by capitalizing the words Joey, Chandler, Monica, Rachel, Phoebe, and Ross in both 
        //the name and summary of the episodes.
        console.log('--------------------------------');
        console.log('Capitalized Friends');
        console.log(capitalizeTheFriends(json));

    })

	// COMPLETE THE FOLLOWING FUNCTIONS BY IMPLEMENTING MAP, REDUCE, OR FILTER 
	// (or a combination) ON THE PROVIDED JSON DATA
	// Define the required ten functions below this line...
    function getGuntherCount(json){
        const episodes = json._embedded.episodes;
        //filter creates a new array by selecting specific elements, ie: "Gunther" inside summary
        const guntherCount = episodes.filter(episode => episode.summary.toLowerCase().includes('gunther'));
        return guntherCount.length;
    }

    function getTotalRuntimeMinutes(json){
        const episodes = json._embedded.episodes;
        //reduce iterates through each episode in the episodes array, reduces to just runtime
        const runtimeData = episodes.reduce((count, episode)=> {
            //for each episode it adds the runtime to the count variable
            return count + (episode.runtime || 0);
        }, 0);
        return runtimeData;
    }

    //3 - Create a function called getDateRangeEpisodeCount() that returns the number of episodes that aired in the year 2000

    function getTotalEpisodesInYear(json, input){
        const episodes = json._embedded.episodes;
        //convert the sting input to an int to match with the Date
        const year = parseInt(input);
        const yearCount = episodes.filter(episode => {
            if (episode.airdate){
                //creating a variable to store the year from the episode airdates
                const episodeYear = new Date(episode.airdate).getFullYear();
                //compare to input year
                return episodeYear === year;
            }
        });
        return yearCount.length;
    }


    //4 - Create a function called getFemaleCastMembers() that returns an array of the names of the female cast members.
    function getFemaleCastMembers(json){
        const cast = json._embedded.cast;
        const femaleCast = [];
        //go through each entity, if the gender = female, push the cast member's name into femaleCast
        cast.forEach((entity) => {
            if (entity.person.gender === "Female"){
                femaleCast.push(entity.person.name);
            };
        });
        return femaleCast;
    }

        //5 - Create a function called getEpisodeTitles() which returns a list of episode
        //    where the argument string is found in the episode summary.
    function getEpisodeTitles(json){
        const episodes = json._embedded.episodes;
        const ursulaEpisodes = [];
        //go through each episode, if the summary includes ursula, push it to the ursulaEpisodes array
        episodes.forEach((episode) => {
            if (episode.summary.toLowerCase().includes("ursula")){
                ursulaEpisodes.push(episode.name);
            }
        });
        return ursulaEpisodes;
    }

        //6 - Create a function called getCastMembersOver55() which returns a list of cast members
        //    who are currently older than 55 years of age.
    function getCastMembersOver55(json){
        const cast = json._embedded.cast;
        const over55 = [];
        const currentDate = new Date();

        cast.forEach((member) => {
            //grabbing the birth dates of cast members
            const birthDate = new Date(member.person.birthday);
            //subtracting the birth year from the current year
            const yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
            //if they're older than 55, push their name to the over55 array
            if (yearsDiff > 55){
                over55.push(member.person.name);
            }
        });
        return over55;
    }

        //7 - Create a function called getTotalRuntimeMinutesExcludingSeasonSix that gets the total 
        //    runtime minutes for all episodes excluding episodes in season 6
    function getTotalRuntimeMinutesExcludingSeasonSix(json){
        const episodes = json._embedded.episodes;
        const runtimeData = episodes
        //create an array from seasons other than 6
            .filter(episode => episode.season !== 6)
        //count the runtimes of the filtered episodes
            .reduce((count, episode) => {
                return count + (episode.runtime);
                //initial value of count is zero
            }, 0);
        return runtimeData;
        }

        //8 - Create a function called getFirstFourSeasons that gets the episodes for the first four seasons 
        //    but only return an array of JSON objects containing the season number and episode name
    function getFirstFourSeasons(json){
        const episodes = json._embedded.episodes;
        const firstFourSeasons = episodes
        //create an array from seasons 1-4
            .filter(episode => episode.season >= 1 && episode.season <= 4)
        //add season & name keys to the array, displaying the season # and name of the episode
            .map(episode => ({
                season: episode.season,
                name: episode.name}));
        return firstFourSeasons;
    }

    //9 - Create a function called getEpisodeTallyBySeason that returns an object containing the season name and the total
    // episodes as key:value pairs for each season
    function getEpisodeTallyBySeason(json){
        const episodes = json._embedded.episodes;
        //initialize an empty object to store the episode count
        const episodeCount = episodes.reduce((count, episode) =>{
            //extracting season # from episode
            const season = episode.season;
            //if the season doesn't already exist in episodeCount object, intialize with 0, then add one to the current episode's season
            count[season] = (count[season] || 0)+ 1;
            return count;
        }, {});
        return episodeCount;
    }

    //10 - Create a funtion called capitalizeTheFriends that transforms the episode JSON data by capitalizing the words Joey, Chandler, Monica, Rachel, Phoebe, and Ross in both 
    //the name and summary of the episodes.
    function capitalizeTheFriends(json){
        const friendsNames = ["Joey", "Chandler", "Monica", "Rachel", "Pheobe", "Ross"];
        const episodes = json._embedded.episodes;
        //iterate through each episode
        episodes.forEach(episode => {
            //iterate through each friendsNames
            friendsNames.forEach(name => {
                //capitalize in the episode's name & summary, \\b is a word boundary, where the text begins/ends, allowing apostrophes or html tags
                // 'gi' is g - global, i-case insensitive, so replace RegExp contents with name.toUpperCase
                episode.name = episode.name.replace(new RegExp(`\\b${name}\\b`, 'gi'), name.toUpperCase());
                episode.summary = episode.summary.replace(new RegExp(`\\b${name}\\b`, 'gi'), name.toUpperCase());
            });
        });
    return episodes;
}

})();

