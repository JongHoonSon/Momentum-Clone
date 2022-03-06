const quotes = [
    {
        quote: "I learned all about life with a ball at my feet",
        author: "Ronaldinho",
    },
    {
        quote: "The more difficult the victory, the greater the happiness in winning.",
        author: "Pelé",
    },
    {
        quote: "You have to fight to reach your dream. You have to sacrifice and work hard for it.",
        author: "Lionel Messi",
    },
    {
        quote: "I don’t have time for hobbies. At the end of the day, I treat my job as a hobby. It’s something I love doing.",
        author: "David Beckham",
    },
    {
        quote: "When people succeed, it is because of hard work. Luck has nothing to do with success.",
        author: "Diego Maradona",
    },
    {
        quote: "The first 90 minutes are the most important.",
        author: "Bobby Robson",
    },
    {
        quote: "I just hate losing and that gives you an extra determination to work harder.",
        author: "Wayne Rooney",
    },
    {
        quote: "I once cried because I had no shoes to play soccer, but one day, I met a man who had no feet.",
        author: "Zinedine Zidane",
    },
    {
        quote: "There is no pressure when you are making a dream come true.",
        author: "Neymar",
    },
    {
        quote: "I want to talk about facts.",
        author: "Rafa Benitez",
    },
    {
        quote: "If you do not believe you can do it then you have no chance at all",
        author: "Arsene Wenger",
    },
    {
        quote: "To win you have to score one more goal than your opponent.",
        author: "Johan Cruyff",
    },
    {
        quote: "Behind every kick of a ball, there has to be a thought.",
        author: "Denis Bergkamp",
    },
    {
        quote: "The best team did not win this match.",
        author: "Jose Mourinho",
    },
    {
        quote: "I’ve never played for a draw in my life.",
        author: "Sir Alex Ferguson",
    },
    {
        quote: "Football is played with your head. Your feet are just the tools.",
        author: "Andrea Pirlo",
    },
    {
        quote: "One accusation you can’t throw at me is that I’ve always done my best.",
        author: "Alan Shearer",
    },
    {
        quote: "I don’t believe in superstitions. I just do certain things because I’m scared in case something will happen if I don’t do them.",
        author: "Michael Owen",
    },
    {
        quote: "That lad must have been born offside",
        author: "Sir Alex Ferguson",
    },
    {
        quote: "We must have had 99 percent of the game. It was the other three percent that cost us the match.",
        author: "Ruud Gullit",
    },
    {
        quote: "When the seagulls follow the trawler, it is because they think the sardines will be thrown into the sea.",
        author: "Eric Cantona",
    },
    {
        quote: "If I had to make a tackle, I have already made a mistake.",
        author: "Paolo Maldini",
    },
    {
        quote: "Playing football with your feet is one thing, but playing football with your heart is another.",
        author: "Francesco Totti",
    },
    {
        quote: "야! 왜 와!",
        author: "이운재",
    },
    {
        quote: "답답하면 니들이 뛰던가",
        author: "기성용",
    },

];

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;