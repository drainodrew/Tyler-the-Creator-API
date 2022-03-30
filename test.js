import fetch from "node-fetch";
//let pack = require('./package.json')
  
let lyrics = `Uh, yeah, how you doin' today?
Uh, yeah, uh-huh, yeah
Ace the Creator, man, look
Casey Veggies, uh-huh, Odd Future, look
Hello, the hype is so mellow
Bitch I'm dope but my pipe is so yellow
The blue polka dots, pink stripes and it's pink on the title
Nigga, fuck your role model, bitch, I'm my own idol and
If you can't face it, my nigga, you can ass it
My accessorized accessories bring out my assets
Nigga they sound on acid, tablets
Stussy’s G-Shock with my custom pair of 3D glasses
I suffer from ADHD
I should win a fucking award for being me
Beat banging the tom-toms
My producer selection is fresh nigga, fuck Vons
Ace the underdog, thrown them on the back bender
Cause I change my outfit more than transsexuals change gender
Eating Belgian waffles with Italian biscotts
I sold my soul to the devil for thirty percent off
And to you emo kids who walk around pissed off
Step one: pull your panties down and start to piss off
Step two: run to your radio, turn this shit off
Nigga didn't bother, so my father didn't help
So when my mom would beat my ass, she would always hit me
With Gucci belts, Gucci imprint from leather welts

Uh-huh, yea, Ace the Creator, man
Uh, Casey Veggies, yo
Uh-huh, Odd Future, nigga
Get used to, uh, let me-
Ay, I'mma slow it down, right quick for you

I'm so dapper man, funky fresh Dapper Dan
I'm your favorite rapper, fan, it's an honor to shake my hand
On award tour, on excursions, I'm a virgin of swap meets
I'm so pure, so sick it's no cure
I'm dope, where the fiends at? Aight, where the jeans at?
The hat, the crew, the t-shirt is Supreme

And they see me they play Pictionary
I got a good way with words like a dictionary
And in that dictionary my name is by "Fresh"
They at the same spot they making no progress
Becoming a good rapper ain't that easy of a process
Eargasms they have them
The hotels we staying in twelve star
Tyler said, "yo Casey, just write a twelve bar"
If I'm with twelve people, I'm with twelve stars
You haters put up your guards
They against us? Oh no
Red and white diamonds, Supreme box logo

Got all the black bitches mad 'cause my main bitch vanilla
She tryna get her groove back like Stella, grab the umbrella
When it comes to your perception of my shit, I'm Helen Keller
When it comes to the perfection of my shit, I know you smell the
Rectum, I'm like a chromosome, I always X 'em
Like Wolverine's stepson, attacking a deadly weapon
I'm opening a church to sell coke and Led Zeppelin
And fuck Mary in her ass
Haha, yo
I'm fucking Goldilocks up in the forest
In the three-bear house eating their motherfucking porridge
I tell her it's my house, give her a tour
In my basement, and keep that bitch locked up in my storage
Rape her and record it, then edit it with more shit
Octopussy, special effect, the wet bitches be banging
And please never disrespect my set
With Canons hanging from our necks like it's a motherfucking circus`

//console.log(JSON.stringify(lyrics))


// function getWiki() {
//   let url = "https://en.wikipedia.org/wiki/Tyler,_the_Creator_discography/w/api.php?action=query&meta=siteinfo&siprop=namespaces&format=json"
//   loadJSON(url, gotData, 'jsonp')
// }

// function gotData() {
//   console.log(data)
//   console.log(url)
//   console.log("hey")
// }

// getWiki()
//   // .then(response => response.json())
//   // .then(data => {
//   //     console.log(data)
//   //   })

// let title = [
// "Wolf",
// "Jamba (featuring Hodgy Beats)",
// "Cowboy",
// "Awkward",
// "Domo23",
// "Answer",
// "Slater (featuring Frank Ocean)",
// "48",
// "Colossus",
// "PartyIsntOver / Campfire / Bimmer (featuring Lætitia Sadier and Frank Ocean)",
// "IFHY (featuring Pharrell)",
// "Pigs",
// "Parking Lot (featuring Casey Veggies and Mike G)",
// "Rusty (featuring Domo Genesis and Earl Sweatshirt)",
// "Trashwang (featuring Left Brain, Na'kel, Jasper, Taco, L-Boy, Lucas and Lee Spielman)",
// "Treehome95 (featuring Erykah Badu and Coco Owino)",
// "Tamale",
// "Lone",
//]
// let duration = [
// '1:50',
// '2:50',
// '3:50',
// '4:50',
// '5:50',
// '6:50',
// '7:50',
// '8:50',
// '9:50',
// '10:50',
// '11:50',
// '12:50',
// '13:50',
// '14:50',
// '15:50',
// '16:50',
// '17:50',
// '18:50',
// ]

let title= [
"Sir Baudelaire (featuring DJ Drama)",
"Corso",
"Lemonhead (featuring 42 Dugg)",
"WusYaName (featuring YoungBoy Never Broke Again and Ty Dolla Sign)",
"Lumberjack",
"Hot Wind Blows (featuring Lil Wayne)",
"Massa",
"RunItUp (featuring Teezo Touchdown)",
"Manifesto (featuring Domo Genesis)",
"Sweet / I Thought You Wanted to Dance (featuring Brent Faiyaz and Fana Hues)",
"Momma Talk",
"Rise! (featuring Daisy World; produced by Tyler, the Creator and Jamie xx)",
"Blessed",
"Juggernaut (featuring Lil Uzi Vert and Pharrell Williams)",
"Wilshire",
"Safari (produced by Tyler, the Creator and Jay Versace)",
  ]
  
  let duration = [
    '1:28',
    '2:26',
    '2:10',
    '2:01',
    '2:18',
    '2:35',
    '3:43',
    '3:49',
    '2:55',
    '9:48',
    '1:10',
    '3:23',
    '0:57',
    '2:26',
    '8:35',
    '2:57',
  ]
let wolfTracks = []
for (let i = 0; i < title.length; i++) {
  let songTitle = title[i]
  let trackNum = 1
  trackNum = i + 1
  for (let j = 0; j < duration.length; j++){
    let songLength = duration[j]
    console.log(duration[j])
  
    wolfTracks[i] =
    {
      song_title: songTitle,
      track_number: trackNum,
      song_length: songLength,
      lyrics: ""
    }}
 // console.log(wolfTracks)
  
  console.log(JSON.stringify(wolfTracks))

}
