var OAuth= require('./lib/oauth').OAuth;

const twitterAccessToken = "xxxxxxx"
const twitterAccessTokenSecret = "yyyyyyy" 
const twitterConsumerKey = ""
const twitterConsumerSecret = ""

oAuth= new OAuth(
  "http://twitter.com/oauth/request_token",
  "http://twitter.com/oauth/access_token", 
  twitterConsumerKey, twitterConsumerSecret, 
  "1.0A", null, "HMAC-SHA1"
);

exports.handler = (event, context, callback) => {
    const song = songs[Math.floor(Math.random()*songs.length)];

    oAuth.post(
        "http://api.twitter.com/1/statuses/update.json",
        twitterAccessToken, twitterAccessTokenSecret,
        {"status": song.song},
        function(error, data) {
          if(error) console.log(require('sys').inspect(error))
          else console.log(data)
        }
      );

    callback(null, responses.success("Successfully requested: " + song.song));
};

const songs = [
    {"song": "A Little Respect – Erasure", "page": 7},
    {"song": "A Whole New World(Aladdin) – Menken and Rice*", "page": 8},
    {"song": "Accidentally in Love – Counting Crows…", "page": 9},
    {"song": "Ain’t No Sunshine – Bill Withers*", "page": 10},
    {"song": "All My Loving – The Beatles", "page": 11},
    {"song": "All That She Wants – Ace of Base", "page": 12},
    {"song": "Alright – Supergrass*", "page": 13},
    {"song": "Angels – Robbie Williams", "page": 16},
    {"song": "Anyone Else But You – The Moldy Peaches (abridged)", "page": 18},
    {"song": "Back for Good – Take That…", "page": 19},
    {"song": "Be My Baby – The Ronettes", "page": 24},
    {"song": "Bohemian Like You – Dandy Warhols", "page": 33},
    {"song": "Bring Me Sunshine – Morecambe & Wise", "page": 38},
    {"song": "Brown-Eyed Girl – Van Morrison", "page": 39},
    {"song": "Build Me Up Buttercup – The Foundations…", "page": 40},
    {"song": "Can’t Take My Eyes Off You – Frankie Valli", "page": 43},
    {"song": "Chelsea Dagger - The Fratellis", "page": 47},
    {"song": "Come on Eileen – Dexy’s Midnight Runners", "page": 50},
    {"song": "Common People – Pulp (short version)", "page": 51},
    {"song": "Complicated – Avril Lavigne…", "page": 52},
    {"song": "Crazy – Gnarls Barkley", "page": 54},
    {"song": "Creep – Radiohead", "page": 55},
    {"song": "Dancing in the Dark – Bruce Springsteen", "page": 57},
    {"song": "Delilah – Tom Jones…", "page": 62},
    {"song": "Do You Love Me – The Contours", "page": 65},
    {"song": "Don’t Leave Me This Way – Thelma Houston", "page": 66},
    {"song": "Don’t Stop Believin’ – Journey…", "page": 67},
    {"song": "Don’t Stop Me Now – Queen", "page": 68},
    {"song": "Don’t Look Back in Anger — Oasis", "page": 69},
    {"song": "Don’t You Want Me – Human League", "page": 70},
    {"song": "Dream a Little Dream of Me – The Mamas & The Papas*", "page": 73},
    {"song": "Ever Fallen in Love – Buzzcocks…", "page": 74},
    {"song": "Every Breath You Take – The Police*", "page": 75},
    {"song": "Everything I Do – Bryan Adams*", "page": 76},
    {"song": "Eye of the Tiger – Survivor…", "page": 77},
    {"song": "Faith – George Michael", "page": 78},
    {"song": "The Final Countdown – Europe…", "page": 79},
    {"song": "Finally – CeCe Peniston*", "page": 80},
    {"song": "Fifty ways to leave your lover – Paul Simon*", "page": 81},
    {"song": "Forget You/F**k You – Cee Lo Green", "page": 85},
    {"song": "Friday I'm In Love – The Cure…", "page": 87},
    {"song": "Go Your Own Way – Fleetwood Mac*", "page": 89},
    {"song": "Gold – Spandau Ballet…", "page": 90},
    {"song": "Good Riddance (Time of Your Life) – Green Day", "page": 91},
    {"song": "Happy Together – The Turtles…", "page": 96},
    {"song": "Heaven – Bryan Adams*", "page": 98},
    {"song": "Hello – Adele", "page": 99},
    {"song": "“Heroes” – David Bowie", "page": 100},
    {"song": "Hit Me Baby One More Time – Britney Spears…", "page": 104},
    {"song": "Hit the Road – Ray Charles", "page": 105},
    {"song": "Hot n Cold – Katy Perry", "page": 107},
    {"song": "Hurt – Johnny Cash*", "page": 110},
    {"song": "I Can See Clearly Now – Johnny Nash", "page": 111},
    {"song": "I Knew You Were Trouble – Taylor Swift*", "page": 112},
    {"song": "I Only Want to Be With You – Dusty Springfield…", "page": 113},
    {"song": "I Think We’re Alone Now – Tiffany…", "page": 116},
    {"song": "I Want to Break Free – Queen", "page": 118},
    {"song": "I Want to Know What Love Is – Foreigner*", "page": 119},
    {"song": "I Will Survive – Gloria Gaynor…", "page": 120},
    {"song": "I’ll Be There For You (Friends theme tune) – The Rembrandts*", "page": 121},
    {"song": "I’ll Be Your Baby – Bob Dylan", "page": 122},
    {"song": "I’m into Something Good – Herman’s Hermits…", "page": 125},
    {"song": "I’m Yours – Jason Mraz", "page": 126},
    {"song": "If it Makes You Happy – Sheryl Crowe*", "page": 127},
    {"song": "Iris – The Goo Goo Dolls…", "page": 131},
    {"song": "It Must Be Love – Madness…", "page": 132},
    {"song": "It’s Not Unusual – Tom Jones", "page": 133},
    {"song": "Jolene – Dolly Parton…", "page": 137},
    {"song": "Killing Me Softly – Roberta Flack/The Fugees", "page": 142},
    {"song": "Kiss Me – Sixpence None the Richer…", "page": 144},
    {"song": "Let it Go – Frozen*", "page": 148},
    {"song": "Make Me Smile (Come Up and See Me) – Steve Harley…", "page": 160},
    {"song": "Maybe Tomorrow – Terry Bush (Littlest Hobo theme)…", "page": 162},
    {"song": "Monkey Man – Toots and the Maytals", "page": 164},
    {"song": "Ordinary World – Duran Duran*", "page": 174},
    {"song": "Otherside – Red Hot Chili Peppers*", "page": 175},
    {"song": "(Lookin’ Back) Over My Shoulder – Mike & the Mechanics", "page": 176},
    {"song": "Perfect Day – Lou Reed*", "page": 179},
    {"song": "Piece of my Heart – Erma Franklin*", "page": 180},
    {"song": "Poison – Alice Cooper*", "page": 182},
    {"song": "Pretty Woman – Roy Orbison", "page": 183},
    {"song": "Que Sera Sera – Doris Day", "page": 187},
    {"song": "Riptide – Vance Joy*", "page": 190},
    {"song": "Shake it Off – Taylor Swift*", "page": 195},
    {"song": "Should I Stay or Should I Go – The Clash", "page": 196},
    {"song": "Somebody That I Used to Know – Gotye", "page": 202},
    {"song": "Someone to Lava – Pixar*", "page": 203},
    {"song": "Stuck in the Middle with You – Stealers Wheel", "page": 214},
    {"song": "Sugar Pie, Honey Bunch – The Four Tops", "page": 215},
    {"song": "Suspicious Minds – Elvis Presley", "page": 218},
    {"song": "Sweet Child o' Mine – Guns 'n' Roses", "page": 220},
    {"song": "Tainted Love – Soft Cell", "page": 222},
    {"song": "Take it Easy – The Eagles", "page": 223},
    {"song": "Take on Me – Aha", "page": 225},
    {"song": "Take Your Mama – Scissor Sisters…", "page": 226},
    {"song": "Teenage Dirtbag – Wheatus", "page": 227},
    {"song": "Teenage Kicks – The Undertones…", "page": 228},
    {"song": "These Boots Are Made for Walkin' – Nancy Sinatra", "page": 232},
    {"song": "Thorn in my Side – Eurythmics*", "page": 233},
    {"song": "Titanium – David Guetta ft. Sia*", "page": 236},
    {"song": "Torn – Natalie Imbruglia*", "page": 238},
    {"song": "Toxic – Britney Spears", "page": 240},
    {"song": "True Colours – Cindy Lauper*", "page": 241},
    {"song": "Tubthumping – Chumbawumba*", "page": 243},
    {"song": "Two Princes – Spin Doctors", "page": 244},
    {"song": "Under the Bridge – Red Hot Chili Peppers", "page": 247},
    {"song": "What's Up – 4 Non Blondes*", "page": 258},
    {"song": "Will You Still Love me Tomorrow? – The Shirelles…", "page": 263},
    {"song": "With a Little Help from My Friends – The Beatles", "page": 266},
    {"song": "Word up – Cameo*", "page": 268},
    {"song": "YMCA – The Village People…", "page": 270},
    {"song": "You Are My Sunshine", "page": 271},
    {"song": "You Know I'm No Good – Amy Winehouse", "page": 272},
    {"song": "Your Song – Elton John*", "page": 273},
    {"song": "You’re So Vain – Carly Simon*", "page": 274},
    {"song": "You’re the One that I Want – Grease…", "page": 275},
    {"song": "You’ve Got the Love – Florence and the Machine", "page": 276}
]

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



