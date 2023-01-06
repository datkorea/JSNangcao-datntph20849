const game = {
    team1: 'bayern munich',
    team2: ' borrussia dortmund',
    players : [
        [
            'neuer',
            'pavard',
            'martinez',
            'alaba',
            'davies',
            'kimmich',
            'goretzka',
            'coman',
            'muller',
            'gnarby',
            'lewandowsky',
        ],
        [
            'burky',
            'schulz',
            'hummels',
            'akanji',
            'hakimi',
            'weigl',
            'witsel',
            'hazard',
            'brandt',
            'sancho',
            'gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowsky','gnarby','Lewandowsky','hummels'],
    date : 'nov 9th, 2037',
    odds:{
        team1:11.33,
        x:3.25,
        team2:6.5,
    },
};
//1
const [players1,players2]= game.players;
console.log(players1,players2);
//2
const [gk, ...fieldPlayers] = players1;
console.log(gk,fieldPlayers);
//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4
const players1Final = [...players1,'Thiago','coutinho','periscic'];
//5
const {
    odds: {team1, x:draw, team2},

}=game;
console.log(team1,draw,team2);
//6
const printgoals = function(...players){
    console.log(`${players.length} goals were scored`);
};

// printgoals('davies','muller','lewandowsky','kimmich');
// printgoals('davies','muller');
printgoals(game.scored);


//7
team1 <  team2 &&  console.log('team 1 is more likely to win');
team1 >  team2 &&  console.log('team 2 is more likely to win');