require('dotenv').config();
var Twitter = require('twitter-node-client').Twitter;

var hosts = ["Insert", "people's", "names", "that", "you", "want", "it", "to", "mention", "here"];
var host = pickARandom(hosts);

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
    "accessTokenSecret": process.env.twitterAccessTokenSecret
}

var twitter = new Twitter(config);

function pickARandom(array) {
  return array[Math.floor(Math.random()*array.length)];
}

// AWS Lambda Handler
exports.handler = (event, context, callback) => {
    var song = tweet();
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

function tweet() {
    const song = pickARandom(songs);
    var tweet = "@ukewednesdays ";
    if (song.sass) {
      tweet += song.sass;
    } else {
      const wrapperSentence = pickARandom(intros);
      tweet += wrapperSentence.before + song.title + " by " + song.artist + wrapperSentence.after;
    }
    tweet += " (p " + song.page + ")";
    twitter.postTweet({"status": tweet}, error, success);
    return song;
}

const songs = [
    {"title": "A Little Respect", "artist": "Erasure", "page": 7},
    {"title": "A Whole New World (Aladdin)", "artist": "Menken and Rice", "page": 8},
    {"title": "Accidentally in Love", "artist": "Counting Crows", "page": 9},
    {"title": "Ain’t No Sunshine", "artist": "Bill Withers", "page": 10, "sass": "Ain't No Sunshine when she's gone :'("},
    {"title": "All My Loving", "artist": "The Beatles", "page": 11},
    {"title": "All That She Wants", "artist": "Ace of Base", "page": 12},
    {"title": "Alright", "artist": "Supergrass", "page": 13},
    {"title": "Angels", "artist": "Robbie Williams", "page": 16},
    {"title": "Anyone Else But You", "artist": "The Moldy Peaches", "page": 18},
    {"title": "Back for Good", "artist": "Take That", "page": 19},
    {"title": "Be My Baby", "artist": "The Ronettes", "page": 24},
    {"title": "Bohemian Like You", "artist": "Dandy Warhols", "page": 33, "sass": "I like you. And I feel Bohemian like you too."},
    {"title": "Bring Me Sunshine", "artist": "Morecambe & Wise", "page": 38, "sass": "You Bring Me Sunshine, just with your smile, " + host + "."},
    {"title": "Brown-Eyed Girl", "artist": "Van Morrison", "page": 39, "sass": "I saw this Brown-Eyed Girl on the tube this morning. Maybe she's my one?"},
    {"title": "Build Me Up Buttercup", "artist": "The Foundations", "page": 40, "sass": "Build me up, Buttercup! Don't Break my heart! (or As you Wish...)"},
    {"title": "Can't Take My Eyes Off You", "artist": "Frankie Valli", "page": 43, "sass": "You're just too good to be true, " + host + ". Can't take my eyes off you!"},
    {"title": "Chelsea Dagger", "artist": "The Fratellis", "page": 47},
    {"title": "Come on Eileen", "artist": "Dexy’s Midnight Runners", "page": 50, "sass": "Come on Eileen. But only if this is a mutually enjoyable activity, consented to in advance."},
    {"title": "Common People", "artist": "Pulp", "page": 51, "sass": "She'll never live like Common People, but maybe we could try out the 'dance, drink and screw' bit, just in case?"},
    {"title": "Complicated", "artist": "Avril Lavigne", "page": 52, "sass": "☐ Single\n☐ In a relationship\n☐ Married\n☑ It's Complicated."},
    {"title": "Crazy", "artist": "Gnarls Barkley", "page": 54},
    {"title": "Creep", "artist": "Radiohead", "page": 55, "sass": "I want you to notice when I'm not around. But I'm also too scared to talk to you, or interact with you in any way. #Creeplife"},
    {"title": "Dancing in the Dark", "artist": "Bruce Springsteen", "page": 57},
    {"title": "Delilah", "artist": "Tom Jones", "page": 62, "sass": "Why Delilah? WHYYYYYY?"},
    {"title": "Do You Love Me", "artist": "The Contours", "page": 65},
    {"title": "Don’t Leave Me This Way", "artist": "Thelma Houston", "page": 66},
    {"title": "Don’t Stop Believin’", "artist": "Journey", "page": 67, "sass": "Take the midnight train going anywhere. Except to Folsom Prison, I hear that place is full of nutters. #DontStopBelieving"},
    {"title": "Don’t Stop Me Now", "artist": "Queen", "page": 68},
    {"title": "Don’t Look Back in Anger", "artist": "Oasis", "page": 69},
    {"title": "Don’t You Want Me", "artist": "Human League", "page": 70, "sass:": "You were working as a waitress in a cocktail bar. But no matter how much I casually threaten to end your new career, you still want to leave me. Don't you want me Baby?"},
    {"title": "Dream a Little Dream of Me", "artist": "The Mamas & The Papas", "page": 73},
    {"title": "Ever Fallen in Love", "artist": "Buzzcocks", "page": 74},
    {"title": "Every Breath You Take", "artist": "The Police", "page": 75, "sass:": "Every breath you take, every move you make, every step you take I'll be watching you. #NotAStalkerHonest #ThisIsHowIExpressLove"},
    {"title": "Everything I Do", "artist": "Bryan Adams", "page": 76},
    {"title": "Eye of the Tiger", "artist": "Survivor", "page": 77, "sass": "I don't need romance. I'm gonna better myself through an epic training montage instead! #EyeOfTheTiger"},
    {"title": "Faith", "artist": "George Michael", "page": 78},
    {"title": "The Final Countdown", "artist": "Europe", "page": 79},
    {"title": "Finally", "artist": "CeCe Peniston", "page": 80},
    {"title": "Fifty ways to leave your lover", "artist": "Paul Simon", "page": 81},
    // {"title": "Forget You/F**k You", "artist": "Cee Lo Green", "page": 85, "sass:": ""},
    {"title": "Friday I'm In Love", "artist": "The Cure", "page": 87, "sass": ""},
    {"title": "Go Your Own Way", "artist": "Fleetwood Mac", "page": 89},
    {"title": "Gold", "artist": "Spandau Ballet", "page": 90},
    {"title": "Good Riddance (Time of Your Life)", "artist": "Green Day", "page": 91},
    {"title": "Happy Together", "artist": "The Turtles", "page": 96},
    {"title": "Heaven", "artist": "Bryan Adams", "page": 98},
    {"title": "Hello", "artist": "Adele", "page": 99},
    {"title": "Heroes", "artist": "David Bowie", "page": 100},
    {"title": "Hit Me Baby One More Time", "artist": "Britney Spears", "page": 104},
    {"title": "Hit the Road", "artist": "Ray Charles", "page": 105},
    {"title": "Hot n Cold", "artist": "Katy Perry", "page": 107},
    {"title": "Hurt", "artist": "Johnny Cash", "page": 110, "sass": "The deeper that sorrow carves into your being, the more joy you can contain. So they say. #Hurt"},
    {"title": "I Can See Clearly Now", "artist": "Johnny Nash", "page": 111, "sass": "I Can See Clearly Now (Lorraine has gone)."},
    {"title": "I Knew You Were Trouble", "artist": "Taylor Swift", "page": 112},
    {"title": "I Only Want to Be With You", "artist": "Dusty Springfield", "page": 113, "sass": "I Only Want to Be With You, " + host + ". Just thought you should know that."},
    {"title": "I Think We're Alone Now", "artist": "Tiffany", "page": 116, "sass": "I Think We're Alone Now. There doesn't seem to be anyone around. #NotCreepy"},
    {"title": "I Want to Break Free", "artist": "Queen", "page": 118},
    {"title": "I Want to Know What Love Is", "artist": "Foreigner", "page": 119},
    {"title": "I Will Survive", "artist": "Gloria Gaynor", "page": 120, "sass": "As long as I've had Weetabix, I might just stay alive. #IWillSurvive"},
    {"title": "I’ll Be There For You (Friends theme tune)", "artist": "The Rembrandts", "page": 121},
    {"title": "I’ll Be Your Baby", "artist": "Bob Dylan", "page": 122},
    {"title": "I’m into Something Good", "artist": "Herman’s Hermits", "page": 125},
    {"title": "I’m Yours", "artist": "Jason Mraz", "page": 126},
    {"title": "If it Makes You Happy", "artist": "Sheryl Crowe", "page": 127},
    {"title": "Iris", "artist": "The Goo Goo Dolls", "page": 131},
    {"title": "It Must Be Love", "artist": "Madness", "page": 132},
    {"title": "It’s Not Unusual", "artist": "Tom Jones", "page": 133},
    {"title": "Jolene", "artist": "Dolly Parton", "page": 137, "sass": "Jolene. Jolene? Jolene?! JOLENE!!!"},
    {"title": "Killing Me Softly", "artist": "Roberta Flack/The Fugees", "page": 142},
    {"title": "Kiss Me", "artist": "Sixpence None the Richer", "page": 144},
    {"title": "Let it Go", "artist": "Frozen", "page": 148},
    {"title": "Make Me Smile (Come Up and See Me)", "artist": "Steve Harley", "page": 160},
    {"title": "Maybe Tomorrow", "artist": "Terry Bush (Littlest Hobo theme)", "page": 162},
    {"title": "Monkey Man", "artist": "Toots and the Maytals", "page": 164},
    {"title": "Ordinary World", "artist": "Duran Duran", "page": 174},
    {"title": "Otherside", "artist": "Red Hot Chili Peppers", "page": 175},
    {"title": "(Lookin’ Back) Over My Shoulder", "artist": "Mike & the Mechanics", "page": 176},
    {"title": "Perfect Day", "artist": "Lou Reed", "page": 179},
    {"title": "Piece of my Heart", "artist": "Erma Franklin", "page": 180},
    {"title": "Poison", "artist": "Alice Cooper", "page": 182, "sass": "I want to love you, " + host + ", but I'd better not touch. #PoisonRunningThroughMyVeins"},
    {"title": "Pretty Woman", "artist": "Roy Orbison", "page": 183},
    {"title": "Que Sera Sera", "artist": "Doris Day", "page": 187, "sass": "When I was just a little girl, I asked my mother what will I be? And instead of giving me an inspiring tale of how hard work and resourcefulness will more frequently result in success, here's what she said to me! #QueSeraSera"},
    {"title": "Riptide", "artist": "Vance Joy", "page": 190},
    {"title": "Shake it Off", "artist": "Taylor Swift", "page": 195},
    {"title": "Should I Stay or Should I Go", "artist": "The Clash", "page": 196, "sass": "Darling, you've gotta let me knooooowwww. Should I stay, or should I go?"}, 
    {"title": "Somebody That I Used to Know", "artist": "Gotye", "page": 202},
    {"title": "Someone to Lava", "artist": "Pixar", "page": 203, "sass": "I Lava you, " + host + ". #SomeoneToLava" },
    {"title": "Stuck in the Middle with You", "artist": "Stealers Wheel", "page": 214},
    {"title": "Sugar Pie, Honey Bunch", "artist": "The Four Tops", "page": 215, "sass": "A hear you guys do Ameen version of Sugar Pie, Honey Bunch..."},
    {"title": "Suspicious Minds", "artist": "Elvis Presley", "page": 218},
    {"title": "Sweet Child o' Mine", "artist": "Guns 'n' Roses", "page": 220, "sass": "Sweet chiii-eee-iii-eee-iii-eee-iii-eee-iii- Sweet chiii-eee-iii-eee-iii-eee-iii-eee-iii-eee-iiiiiiiiild of Miiiiiine. Plz."},
    {"title": "Tainted Love", "artist": "Soft Cell", "page": 222},
    {"title": "Take it Easy", "artist": "The Eagles", "page": 223},
    {"title": "Take on Me", "artist": "Aha", "page": 225},
    {"title": "Take Your Mama", "artist": "Scissor Sisters", "page": 226, "sass": "I wanna take your mamma out all night, yeah, and show her a ukulele boat."},
    {"title": "Teenage Dirtbag", "artist": "Wheatus", "page": 227},
    {"title": "Teenage Kicks", "artist": "The Undertones", "page": 228},
    {"title": "These Boots Are Made for Walkin'", "artist": "Nancy Sinatra", "page": 232},
    {"title": "Thorn in my Side", "artist": "Eurythmics", "page": 233},
    {"title": "Titanium", "artist": "David Guetta ft. Sia", "page": 236},
    {"title": "Torn", "artist": "Natalie Imbruglia", "page": 238, "sass": "Ukulele Love Machine says: it's Torn Time :D"},
    {"title": "Toxic", "artist": "Britney Spears", "page": 240, "sass": "I hope Sandy Toksvig is having a lovely Valentine's day. #We'reAddictedToYou #Don'tYouKnowSandyToksvig"},
    {"title": "True Colours", "artist": "Cindy Lauper", "page": 241},
    {"title": "Tubthumping", "artist": "Chumbawumba", "page": 243},
    {"title": "Two Princes", "artist": "Spin Doctors", "page": 244},
    {"title": "Under the Bridge", "artist": "Red Hot Chili Peppers", "page": 247},
    {"title": "What's Up", "artist": "4 Non Blondes", "page": 258},
    {"title": "Will You Still Love me Tomorrow?", "artist": "The Shirelles", "page": 263},
    {"title": "With a Little Help from My Friends", "artist": "The Beatles", "page": 266},
    {"title": "Word up", "artist": "Cameo", "page": 268},
    {"title": "YMCA", "artist": "The Village People", "page": 270},
    {"title": "You Are My Sunshine", "page": 271},
    {"title": "You Know I'm No Good", "artist": "Amy Winehouse", "page": 272},
    {"title": "Your Song", "artist": "Elton John", "page": 273, "sass": "My gift is my song, and this one's for you, " + host + ". #YourSong"},
    {"title": "You’re So Vain", "artist": "Carly Simon", "page": 274, "sass": "You're so vain, you probably think this request is about you."},
    {"title": "You’re the One that I Want", "artist": "Grease", "page": 275, "sass": "You're the one that I want, " + host + ". You know that, right?"},
    {"title": "You’ve Got the Love", "artist": "Florence and the Machine", "page": 276}
]

var intros = [
  {"before": "What about ", "after": "?"},
  {"before": "Let's have ", "after": "!"},
  {"before": "Can we have ", "after": "?"},
  {"before": "I'm in the mood for ", "after": "."},
  {"before": "This Valentine's Day needs more ", "after": "!"},
  {"before": "", "after": " please!"},
  {"before": "I really fancy ", "after": ". Also " + host + ", but that's beside the point." },
  {"before": "", "after": " really expresses my deep feelings for " + host + " very well."}
]

// Automatically runs tweeter, for use with timer mode.
tweet();

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



