let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3,
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
                {
                    episode: 6,
                    episodeName: "Hot Girl"
                },
            ]
        }
    },
    season2: {},
    season3: {}
};
console.log(netflix)//*runs entire object gives all keys
console.log(netflix.name) //* just the show name
console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName) //*this is an epsiode name 

//* hint use indexing with dot notation # bronzr
let showName = netflix.name;
console.log(showName)
//* here use dot notation and the .length prop # sliver 
let seasonOneEpCount= netflix.season1.seasonInfo.episodeInfo.length;
console.log(seasonOneEpCount);
//* here use a for loop to assign to this # Gold +
let epNames =[] //* ["<ep here>", "", ...]
console.log(netflix.season1.seasonInfo.episodeInfo[0].episodeName)
for(ep of netflix.season1.seasonInfo.episodeInfo){
    epNames.push(ep.episodeName)
    //*console.log(ep.epNames)
}
console.log(epNames);
//* this is season one data from the netflix option
let epDetails = netflix.season1.seasonInfo.episodeInfo
epDetails.forEach((data) => epNames.push(data.episodeName))
console.log(epNames);

//* using an object constructor 
let numString = String(5)
//* using an object literal 
let numString2= '5'

//* JSON <- javascript object notation 
let weather = {
    temp:88,
    isRaining: false
}

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

//* returns an array of the keys of an object 
console.log(Object.keys(spaceJam.toonSquad));
//*return you the amount of arrays 
console.log(Object.keys(spaceJam.toonSquad.duck));
//* this gives you all the values in line form "","",""
console.log(Object.keys(spaceJam.toonSquad). toString());

//* returns a array of the values of the object
console.log(Object.keys(spaceJam.toonSquad));


let hello ="Hello World!"
let greetArray= ['H', 'E', 'L', 'L', 'o']

// console.log("This is from object.keys:", Object.keys(hello));
// console.log("This is from object.values:", Object.values(hello));
console.log("This is from object.keys:", Object.keys(greetArray));
console.log("This is from object.values:", Object.values(greetArray));