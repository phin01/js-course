// CODING CHALLENGE 4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));


document.querySelector('button').addEventListener('click', function() {
  const text = document.querySelector('textarea').value.split('\n')

  for (let [i, item] of text.entries()) {
    item = String(item).trim().toLowerCase();
    let [first, second] = item.split('_');
    item = first  + second.replace(second[0], second[0].toUpperCase());
    item = item.padEnd(30, ' ') + '*'.repeat(i + 1)
    console.log(item)
  }
});



/*

// CODING CHALLENGE 3

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);


const eventSet = new Set();
for (const [time, event] of gameEvents) {
  eventSet.add(event)
}
const eventArray = [...eventSet]
console.log(eventArray)

gameEvents.delete(64)
console.log(gameEvents)

console.log(`An event happened on average every ${90 / gameEvents.size} minutes`)


for (const [time, event] of gameEvents) {
  console.log('[' + (time < 45 ? 'FIRST' : 'SECOND') + ' HALF] - '+ time + ' ' + event)
}



/*
// CODING CHALLENGE 1 & 2

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Akanji','Akanji', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };


// PART 2
// GOAL SCORERS
for(const [i, scorer] of game.scored?.entries()) {
    console.log(`Goal ${i + 1} : Scored by ${scorer}`)
}

// SCOREBOARD
let scoreboard = [0, 0]
for(const [i, scorer] of game.scored?.entries()) {
    game.players[0].includes(scorer) ? scoreboard[0]++ : scoreboard[1]++
    console.log(`Goal ${i + 1} : Scored by ${scorer} - Game currently ${scoreboard[0]} - ${scoreboard[1]}`)
}
scoreboard[0] == scoreboard[1] && console.log('Game was a draw!')
console.log((scoreboard[0] > scoreboard[1] ? game.team1 : game.team2) + ' wins!')

// AVERAGE ODD
let sumOdds = 0
for (const [name, value] of Object.entries(game.odds)) {
    sumOdds += value
}
console.log(sumOdds / Object.entries(game.odds).length)

// ODDS TABLE
for (const [name, value] of Object.entries(game.odds)) {
    console.log(name == 'x' ? `Odd of draw: ${value}` : `Odd of victory ${game[name]}: ${value}`)
}

// SCORERS OBJECT
const scorers = {}

for(const [i, scorer] of game.scored?.entries()) {
    // if(scorers[scorer]) {
    //     Object.defineProperty(scorers, scorer, {value: scorers[scorer] + 1, writable: true})
    // } else {
    // Object.defineProperty(scorers, scorer, {value: 1, writable: true})
    // }
    scorers[scorer] ? scorers[scorer]++ : scorers[scorer] = 1        // lol
}
console.log(scorers)





/*
// PART 1
const [players1, players2] = game.players;
console.log(players1, players2)

const [gk, ...fieldPlayers] = players1
console.log(gk, fieldPlayers)

const allPlayers = [...players1, ...players2]
console.log(allPlayers)

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
console.log(players1Final)

const {team1, x:draw, team2} = game.odds
console.log(team1, draw, team2)

const printGoals = function (...scorers) {
    console.log(...scorers, scorers.length + ' goals scored')
}

printGoals('John', 'Lewandowski', 'Uala')
printGoals(...game.scored)

team1 < team2 && console.log(game.team1 + ' is more likely to win')
team2 < team1 && console.log(game.team2 + ' is more likely to win')


*/