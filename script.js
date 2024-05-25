var quoteinput = document.getElementById("quote");
var quoterinput = document.getElementById("quoter");
var index=-1;

var quotes=[
  '"Be yourself; everyone else is already taken."',
  '"So many books, so little time."',
  '"Two things are infinite: the universe and human stupidity; and I am not sure about the universe."',
  '"You know youre in love when you cant fall asleep because reality is finally better than your dreams."',
  '"You only live once, but if you do it right, once is enough."',
  '"Live as if you were to die tomorrow. Learn as if you were to live forever."',
  '"A room without books is like a body without a soul."'
]
var quoters=[
    "--Oscar Wilde",
    "--Frank Zappa",
    "--Albert Einstein",
    "--Dr. Seuss",
    "--Mae West",
    "--gandhi",
    "--Marcus Tullius Cicero"


]

function add(){
  while (true) {
    var rand= Math.floor(Math.random() * 7);
    if (rand!=index) {
      break;
    }
  }
    quoteinput.innerHTML=quotes[rand];
    quoterinput.innerHTML=quoters[rand];
    index= rand;
}