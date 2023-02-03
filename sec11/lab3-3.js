const calcAverageHumanAGe = function (ages){
    const HumanAges = ages.map(age => (age <=2 ? 2 * age : 16 + age * 4));
    const adults = HumanAges.filter(age => age >=18);
    console.log(HumanAges);
    console.log(adults);

    const average = adults.reduce((acc,age) => acc + age , 0)/ adults.length;
    return average;
};
const avg1 =