# Ukulele Wednesdays Twitter Bot

### What is it?
It is an automatic tweetbot for Ukulele Wednesdays (@ukewednesdays), which tweets a randomised song request. It was hacked together for Valentines Day 2018, the Love Boat Special, so only contains Love Songs, and romantic comments.

### How do I run it?

#### Prerequisites:
To use the Twitter API, you will need to create an App, and grant it access to the User Account you wish to tweet with. This will result in you having 4 Twitter account credentials, as seen below.

#### Deployment Options
There are currently 2 ways to run the bot:

* Upload the code as an AWS Lambda, and then trigger it as you wish (I configured the API Gateway to forward HTTP Requests).

* Run timer.sh, which was a bash script hastily written/stolen from StackOverflow about 5 mins before we started, to make tweeting entirely automatic from a local environment.

#### Configuration
Requires the following Twitter secrets (see their docs for details) to be stored in a .env file in the root directory (or made available as Environment Variables through some other means):

```
twitterAccessToken=XXXXXXXXXXXXX
twitterAccessTokenSecret=YYYYYYYYYY
twitterConsumerKey=AAAAAAAAAAAAAAAAAAAAA
twitterConsumerSecret=BBBBBBBBBBBBBBB
```

### Notes on code quality
Written in a few hours, most of which was trying to make API Gateway do CORS properly. There are no tests. Plenty of boilerplate is copy/pasted from docs. The code is of very questionable quality (globals, horrible function ordering, missing comments/explanations, bad comments, inconsistent formatting...) You get the picture. Disposable code is fun.

### Things Learned
* Having an infinite scrolling list of songs can be convenient, but a bit much. Either set the timings slower (~10 mins?), or be happy to ignore it quite a bit.
* The action of deleting a tweet is not automatically pushed out to other accounts, so @UkeWednesdays was still seeing tweets on the screen that had been deleted.
* Randomised suggestions are fun, but humans are better at picking things for the right mood. A future toy might help humans pick/make requests more easily, without being so prescriptive.


