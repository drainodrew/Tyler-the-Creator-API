
  
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

console.log(JSON.stringify(lyrics))

function htmlToText(html) {
  let tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  return tempDiv.textContent || tempDiv.innerText || "";
}

const url = 'https://en.wikipedia.org/wiki/Tyler,_the_Creator_discography';

$.getJSON(url, function(data) {
 const html = data['parse']['text'];
 const plainText = htmlToText(html);
 const array = [...plainText.matchAll(/^\d{4} *–.*/gm)].map(x=>x[0]);
 console.log(array);
});