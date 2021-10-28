function quoteGenerator () {
//Array of quotes
const availableQuotes = [
   {
    quote: "I think the perfection of love is that it’s not perfect.",
    author: "Taylor Swift"
   },
   {
    quote: "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.",
    author: "Helen Keller"
   },
   {
    quote: "Life without love is like a tree without blossoms or fruit.",
    author: "Khalil Gibran"
   },
   {
    quote: "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.",
    author: "Maya Angelou"
   },
   {
    quote: "To love or have loved, that is enough. Ask nothing further. There is no other pearl to be found in the dark folds of life.",
    author: "Victor Hugo"
   },
   {
    quote: "You are my heart, my life, my one and only thought.",
    author: "Arthur Conan Doyle"
   },
   {
    quote: "To love or have loved, that is enough. Ask nothing further. There is no other pearl to be found in the dark folds of life.",
    author: "Victor Hugo"
   },
   {
     quote: "When I tell you I love you, I don’t say it out of habit. I say it to remind you that you’re the best thing that ever happened to me.",
     author: "Onyebuchi Princewill"
   },
  {
    author: "Nelson Mandel",
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall."
  },
{
  author: "Walt Disney",
  quote: "The way to get started is to quit talking and begin doing."
},
{
  author: "Steve Jobs",
  quote: "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking."
},
{
  author: "Eleanor Roosevelt",
  quote: "If life were predictable it would cease to be life, and be without flavor."
},
{
  author: "Oprah Winfrey",
  quote: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough."
},
{
  author: "John Maxwell",
  quote: "Experience isn't the best teacher, Evaluated experience is."
},
{
  author: "James Cameron",
  quote: "If you set your goals ridiculously high and it’s a failure, you will fail above everyone else’s success."
},
{
  author: "Thomas Edison",
  quote: "Everything comes to him who hustles while he waits"
},
{
  author: "...",
  quote: "When there is life, there is hope"
},
{
  author: "John Lennon",
  quote: "Life is what happens when you’re busy making other plans." 
}
  
  /** /
  
  
{
  author: "",
  quote: ""
},

  /**/

];

  var quoteIndex = Math.floor(Math.random() * availableQuotes.length)
  
  document.getElementById("author").innerText = availableQuotes[quoteIndex].author
  document.getElementById("quote").innerText = availableQuotes[quoteIndex].quote
}

quoteGenerator()
setInterval(quoteGenerator, 10000)

document.getElementById("change_quote_btn").onclick = () => {
  quoteGenerator()
}