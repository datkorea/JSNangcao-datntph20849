const checkDogs = function(dogJulia,dogKate){
    const dogsJuliaCorrected = dogJulia.slice();
    dogsJuliaCorrected.splice(0,1);
    dogsJuliaCorrected.splice(-2);

    const dogs = dogsJuliaCorrected.concat(dogKate);
    console.log(dogs);

    dogs.foreach(function (dog,i){

        if(dog >=3){
            console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`);
        }else {
            console.log(`Dog number ${i + 1} is still a puppy`);
        }
    });
}
// checkDogs ([3,5,2,12,7], [4,1,15,8,3]);
checkDogs ([3,5,2,12,7], [4,1,15,8,3]);