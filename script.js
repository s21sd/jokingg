const jokespace = document.getElementById("joke");
const button = document.getElementById("btn");
const jokechager = document.getElementById("jokechage");
const arr = ["What do the movies Titanic and The Sixth Sense have in common ? Icy dead people",
    "When you die, what part of the body dies last ? The pupils… they dilate",
    "Why is England the wettest country ? Because the queen reigned there for decades",
    "You know there's no official training for trash collectors? They just pick things up as they go along",
    "What's the difference between a golfer and a skydiver? A golfer goes whack darn and a skydiver goes darn whack",
    "A friend of mine went bald years ago but still carries around an old combHe just can't part with it",
    "I want to die peacefully in my sleep like my grandfather didNot screaming in terror like the passengers in his car",
    "What sits at the bottom of the sea and twitches ? A nervous wreck",
    "What do you call a woman who sets fire to all her bills ? Bernadette",
    "I was kidnapped by mimes onceThey did unspeakable things to me",
    "I saw Usain Bolt sprinting around the track shouting, Why did the chicken cross the road? It was a running joke",
    "What did the full glass say to the empty glass ? You look drunk",
    "Is it ignorance or apathy that's destroying the world today? I don't know, and I don't care",
    "Did you hear about the Italian chef who died ? He pasta - way",
    "Why can't you explain puns to kleptomaniacs? They always take things literally",
    "They all laughed when I said I wanted to be a comedianWell, they're not laughing now! Wait…",
    "You're not completely useless You can always serve as a bad example",
    "Did you hear about the guy whose whole left side was cut off ? He's all right now",
    "What's the difference between a hippo and a Zippo? One is really heavy, and the other is a little lighter",
    "Two guys walk into a barThe third guy ducks",
    "And God said to John, Come forth and you shall be granted eternal life But John came fifth and won a toaster",
    "I stand corrected! said the man in the orthopedic shoes",
    "What's the best thing about Switzerland? I don't know, but their flag is a huge plus",
    "How do you make holy water ? You boil the hell out of it",
    "Will glass coffins be a success ? Remains to be seen"];



function getJoke(e) {
        
var index=Math.round(Math.random()*arr.length);
    jokechager.innerHTML=arr[index];

//     e.preventDefault();
  
}
button.addEventListener("click", getJoke);
