const gameEvents = new Map([
    [17, 'goal'],
    [36,'substitution'],
    [47,'goal'],
    [61,'substitution'],
    [64,'yellow card'],
    [69, 'red card'],
    [70,'substitution'],
    [72,'substitution'],
    [76,'goal'],
    [80,'goal'],
    [92,'yellow card'],
]);
const events = [...new Set(gameEvents.values())]
console.log(events)

//2
gameEvents.delete(64);

//3
console.log(
    `An event happened, on average, every ${90/ gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
    `An event happened, on average, every ${time/ gameEvents.size} minutes`
);
//4
 for(const [min,  event] of gameEvents){
    const haft= min <=45 ? 'first' : 'second';
    console.log(`[${haft} half] ${min}:${event}`);
 }