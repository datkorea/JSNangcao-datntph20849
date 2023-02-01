const checkDogs = function(dogJulia,dogKate){
    const dogsJuliaCorrected = dogJulia.slice();
    dogsJuliaCorrected.spice(0,1);
    dogsJuliaCorrected.spice(-2);

    const dogs = dogsJuliaCorrected.concat(dogKate);
    console.log(dogs);

    dogJulia.foreach(function(dog,i){
        if(dog >=3){
            console.log
        }
    })
}