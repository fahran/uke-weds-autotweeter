require('dotenv').config();
var Twitter = require('twitter-node-client').Twitter;

//Callback functions 
var error = function (err, response, body) {
    console.log('ERROR [%s]', JSON.stringify(err));
};
var success = function (data) {
    console.log('Data [%s]', data);
};

//Get this data from your twitter apps dashboard 
var config = {
    "consumerKey": process.env.twitterConsumerKey,
    "consumerSecret": process.env.twitterConsumerSecret,
    "accessToken": process.env.twitterAccessToken,
    "accessTokenSecret": process.env.twitterAccessTokenSecret,
    "callBackUrl": "XXX"
}

var twitter = new Twitter(config);

exports.handler = (event, context, callback) => {
    const song = songs[Math.floor(Math.random()*songs.length)];
    console.log("Song is: " + song.title);
    twitter.postTweet({"status": song.title}, error, success);
    var responseBody = "Successfully requested: " + song.title;
    callback(null, {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json', 
          'Access-Control-Allow-Origin': '*'
        },
        body: responseBody
    })
};

function tweetTest() {
    const song = songs[Math.floor(Math.random()*songs.length)];
    twitter.postTweet({"status": song.title}, error, success);
}

const songs = [
    {"title": "A Little Respect – Erasure", "page": 7},
    {"title": "A Whole New World (Aladdin) – Menken and Rice", "page": 8},
    {"title": "Accidentally in Love – Counting Crows", "page": 9},
    {"title": "Ain’t No Sunshine – Bill Withers*", "page": 10},
    {"title": "All My Loving – The Beatles", "page": 11},
    {"title": "All That She Wants – Ace of Base", "page": 12},
    {"title": "Alright – Supergrass*", "page": 13},
    {"title": "Angels – Robbie Williams", "page": 16},
    {"title": "Anyone Else But You – The Moldy Peaches (abridged)", "page": 18},
    {"title": "Back for Good – Take That", "page": 19},
    {"title": "Be My Baby – The Ronettes", "page": 24},
    {"title": "Bohemian Like You – Dandy Warhols", "page": 33},
    {"title": "Bring Me Sunshine – Morecambe & Wise", "page": 38},
    {"title": "Brown-Eyed Girl – Van Morrison", "page": 39},
    {"title": "Build Me Up Buttercup – The Foundations", "page": 40},
    {"title": "Can’t Take My Eyes Off You – Frankie Valli", "page": 43},
    {"title": "Chelsea Dagger - The Fratellis", "page": 47},
    {"title": "Come on Eileen – Dexy’s Midnight Runners", "page": 50},
    {"title": "Common People – Pulp (short version)", "page": 51},
    {"title": "Complicated – Avril Lavigne", "page": 52},
    {"title": "Crazy – Gnarls Barkley", "page": 54},
    {"title": "Creep – Radiohead", "page": 55},
    {"title": "Dancing in the Dark – Bruce Springsteen", "page": 57},
    {"title": "Delilah – Tom Jones", "page": 62},
    {"title": "Do You Love Me – The Contours", "page": 65},
    {"title": "Don’t Leave Me This Way – Thelma Houston", "page": 66},
    {"title": "Don’t Stop Believin’ – Journey", "page": 67},
    {"title": "Don’t Stop Me Now – Queen", "page": 68},
    {"title": "Don’t Look Back in Anger — Oasis", "page": 69},
    {"title": "Don’t You Want Me – Human League", "page": 70},
    {"title": "Dream a Little Dream of Me – The Mamas & The Papas*", "page": 73},
    {"title": "Ever Fallen in Love – Buzzcocks", "page": 74},
    {"title": "Every Breath You Take – The Police*", "page": 75},
    {"title": "Everything I Do – Bryan Adams*", "page": 76},
    {"title": "Eye of the Tiger – Survivor", "page": 77},
    {"title": "Faith – George Michael", "page": 78},
    {"title": "The Final Countdown – Europe", "page": 79},
    {"title": "Finally – CeCe Peniston*", "page": 80},
    {"title": "Fifty ways to leave your lover – Paul Simon*", "page": 81},
    {"title": "Forget You/F**k You – Cee Lo Green", "page": 85},
    {"title": "Friday I'm In Love – The Cure", "page": 87},
    {"title": "Go Your Own Way – Fleetwood Mac", "page": 89},
    {"title": "Gold – Spandau Ballet", "page": 90},
    {"title": "Good Riddance (Time of Your Life) – Green Day", "page": 91},
    {"title": "Happy Together – The Turtles", "page": 96},
    {"title": "Heaven – Bryan Adams*", "page": 98},
    {"title": "Hello – Adele", "page": 99},
    {"title": "“Heroes” – David Bowie", "page": 100},
    {"title": "Hit Me Baby One More Time – Britney Spears", "page": 104},
    {"title": "Hit the Road – Ray Charles", "page": 105},
    {"title": "Hot n Cold – Katy Perry", "page": 107},
    {"title": "Hurt – Johnny Cash*", "page": 110},
    {"title": "I Can See Clearly Now – Johnny Nash", "page": 111},
    {"title": "I Knew You Were Trouble – Taylor Swift*", "page": 112},
    {"title": "I Only Want to Be With You – Dusty Springfield", "page": 113},
    {"title": "I Think We’re Alone Now – Tiffany", "page": 116},
    {"title": "I Want to Break Free – Queen", "page": 118},
    {"title": "I Want to Know What Love Is – Foreigner*", "page": 119},
    {"title": "I Will Survive – Gloria Gaynor", "page": 120},
    {"title": "I’ll Be There For You (Friends theme tune) – The Rembrandts*", "page": 121},
    {"title": "I’ll Be Your Baby – Bob Dylan", "page": 122},
    {"title": "I’m into Something Good – Herman’s Hermits", "page": 125},
    {"title": "I’m Yours – Jason Mraz", "page": 126},
    {"title": "If it Makes You Happy – Sheryl Crowe*", "page": 127},
    {"title": "Iris – The Goo Goo Dolls", "page": 131},
    {"title": "It Must Be Love – Madness", "page": 132},
    {"title": "It’s Not Unusual – Tom Jones", "page": 133},
    {"title": "Jolene – Dolly Parton", "page": 137},
    {"title": "Killing Me Softly – Roberta Flack/The Fugees", "page": 142},
    {"title": "Kiss Me – Sixpence None the Richer", "page": 144},
    {"title": "Let it Go – Frozen*", "page": 148},
    {"title": "Make Me Smile (Come Up and See Me) – Steve Harley", "page": 160},
    {"title": "Maybe Tomorrow – Terry Bush (Littlest Hobo theme)", "page": 162},
    {"title": "Monkey Man – Toots and the Maytals", "page": 164},
    {"title": "Ordinary World – Duran Duran*", "page": 174},
    {"title": "Otherside – Red Hot Chili Peppers*", "page": 175},
    {"title": "(Lookin’ Back) Over My Shoulder – Mike & the Mechanics", "page": 176},
    {"title": "Perfect Day – Lou Reed*", "page": 179},
    {"title": "Piece of my Heart – Erma Franklin*", "page": 180},
    {"title": "Poison – Alice Cooper*", "page": 182},
    {"title": "Pretty Woman – Roy Orbison", "page": 183},
    {"title": "Que Sera Sera – Doris Day", "page": 187},
    {"title": "Riptide – Vance Joy*", "page": 190},
    {"title": "Shake it Off – Taylor Swift*", "page": 195},
    {"title": "Should I Stay or Should I Go – The Clash", "page": 196},
    {"title": "Somebody That I Used to Know – Gotye", "page": 202},
    {"title": "Someone to Lava – Pixar*", "page": 203},
    {"title": "Stuck in the Middle with You – Stealers Wheel", "page": 214},
    {"title": "Sugar Pie, Honey Bunch – The Four Tops", "page": 215},
    {"title": "Suspicious Minds – Elvis Presley", "page": 218},
    {"title": "Sweet Child o' Mine – Guns 'n' Roses", "page": 220},
    {"title": "Tainted Love – Soft Cell", "page": 222},
    {"title": "Take it Easy – The Eagles", "page": 223},
    {"title": "Take on Me – Aha", "page": 225},
    {"title": "Take Your Mama – Scissor Sisters", "page": 226},
    {"title": "Teenage Dirtbag – Wheatus", "page": 227},
    {"title": "Teenage Kicks – The Undertones", "page": 228},
    {"title": "These Boots Are Made for Walkin' – Nancy Sinatra", "page": 232},
    {"title": "Thorn in my Side – Eurythmics*", "page": 233},
    {"title": "Titanium – David Guetta ft. Sia*", "page": 236},
    {"title": "Torn – Natalie Imbruglia*", "page": 238},
    {"title": "Toxic – Britney Spears", "page": 240},
    {"title": "True Colours – Cindy Lauper*", "page": 241},
    {"title": "Tubthumping – Chumbawumba*", "page": 243},
    {"title": "Two Princes – Spin Doctors", "page": 244},
    {"title": "Under the Bridge – Red Hot Chili Peppers", "page": 247},
    {"title": "What's Up – 4 Non Blondes*", "page": 258},
    {"title": "Will You Still Love me Tomorrow? – The Shirelles", "page": 263},
    {"title": "With a Little Help from My Friends – The Beatles", "page": 266},
    {"title": "Word up – Cameo*", "page": 268},
    {"title": "YMCA – The Village People", "page": 270},
    {"title": "You Are My Sunshine", "page": 271},
    {"title": "You Know I'm No Good – Amy Winehouse", "page": 272},
    {"title": "Your Song – Elton John*", "page": 273},
    {"title": "You’re So Vain – Carly Simon*", "page": 274},
    {"title": "You’re the One that I Want – Grease", "page": 275},
    {"title": "You’ve Got the Love – Florence and the Machine", "page": 276}
]

// tweet();

const responses = {
  success: (data={}, code=200) => {
    return {
      'statusCode': code,
      'headers': responseHeaders,
      'body': JSON.stringify(data)
    }
  },
  error: (error) => {
    return {
      'statusCode': error.code || 500,
      'headers': responseHeaders,
      'body': JSON.stringify(error)
    }
  }
}

const responseHeaders = {
  'Content-Type': 'application/json',
  // Required for CORS support to work
  'Access-Control-Allow-Origin': '*',  
  // Required for cookies, authorization headers with HTTPS
  'Access-Control-Allow-Credentials': true
}



