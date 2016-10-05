var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

var lyricsString = function (lyricsArray) {
    var lyricString = lyricsArray.join("~");
    console.log(lyricString);
}

lyricsString(lyrics);

var arrayBackwards = function (lyricsArray) {
    console.log(lyricsArray.reverse().join(" "));
} 

arrayBackwards(lyrics);

function everyOther(lyricsArray) {
    var emptArr = [];
    for (var i = 0; i < lyricsArray.length; i += 2) {
        emptArr.push(lyricsArray[i]);
    }
    var splitSent = emptArr.join();
    return splitSent;
}

