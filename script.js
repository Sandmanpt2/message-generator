const authors = [
    'Gandhi' ,
    'Martin Luther King' ,
    'Steve Irwin' ,
    'Winston Churchill' ,
    'George Orwell' ,
    'Genghis Khan' ,
    'Mike Nolan',
    'Bob Ross' ,
    'Da Vinci' ,
    'Marie Antoinette' ,
]

const quotes = [
    'I love ceramics, I love my job, I love wrestling' ,
    'Hell is empty, all the devils are here' ,
    'Buzz me Mulato' ,
    'I dont trust like that' ,
    'Time is a flat circle' ,
    'No shot buckaroo' ,
    'I have become death, the destroyer of worlds' ,
    'Why use many words when few words do trick' ,
    'It aint easy, being cheesy' ,
    'Boxed like fish' ,
]

const years = [
    '2015' ,
    '1956' ,
    '250' ,
    '403' ,
    '1999' ,
    '1996' ,
    '1' ,
    '900' ,
    '2020' ,
    '1450' ,
]

function newQuote() {
    let randomQuote = Math.floor(Math.random()) * quotes.length ;
    let randomAuthor = Math.floor(Math.random()) * authors.length ;
    let randomYear = Math.floor(Math.random()) * years.length ;
    
    return `${randomQuote}  ${randomAuthor} , ${randomYear}`
}
console.log(newQuote())