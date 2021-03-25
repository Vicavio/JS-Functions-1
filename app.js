
//Kelvin Weather
  const kelvin = 293; 
  function kelvinToFahrenheit(kelvin) {
      const celsius = kelvin - 273;
      let fahrenheit = Math.floor(celsius * (9/5) + 32);
      return fahrenheit;
    }
    console.log(`The temperature is ${kelvinToFahrenheit(kelvin)} degrees Fahrenheit.`);
    


//Human Years in Dog Years
  const myName = "Viorica";
  const myAge = 26;
  function humanYearsInDogYears(myAge) {
      let earlyYears = 2 * 10.5;
      let laterYears = (myAge - 2) * 4;
      return humanYearsInDogYears = earlyYears + laterYears;
    }
    console.log(`My name is ${myName} and I'm ${myAge} years old in human years wich is ` + humanYearsInDogYears(myAge) + ` age in dog years.`);



//Magic Eight Ball 
    let userName = "Viorica";
    userName === "Viorica" ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
    let userQuestion = "Should I become a vegetarian?";
    console.log(`Please, tell me: '${userQuestion}'`);
    function answerMyQuestion(userName, userQuestion) {
        let randomNumber = Math.floor(Math.random() * 8);
        let eightBall = "";
        switch (randomNumber) {
         case 0:
            eightBall = "Sure";
            break;
         case 1:
            eightBall = "Cannot predict now";
            break;
         case 2:
            eightBall = "Signs point to yes";
            break;
         case 3:
            eightBall = "My sources say no";
            break;
         case 4:
            eightBall = "Better not tell you now"
            break;
         case 5:
            eightBall = "Yes - definitely";
            break;
         case 6:
            eightBall = "Very doubtful";
            break;
         case 7:
            eightBall = "It is your choice";
            break
        }
    return `Hello, ${userName}. You asked: ${userQuestion} The answer is: ${eightBall}.`;
    }
    console.log(answerMyQuestion(userName, userQuestion));
                                    
    
//Race Day   
    function raceTime(userAge, registeredEarly) {
            let raceNumber = Math.floor(Math.random() * 1000);
                if (userAge >= 18 && registeredEarly){
                   raceNumber += 1000
                };
                if (userAge > 18 && registeredEarly){
                console.log (`You start at 9:30 am. This will be your race number: "${raceNumber}"`);
            } else if (userAge > 18 && !registeredEarly ){
                console.log (`You start at 11:00 am. Your race number will be: "${raceNumber}"`);
              } else if (userAge < 18){
                console.log(`You start at 12:30 pm. This will be your race number: "${raceNumber}"`);
              } else {
                  console.log("What is your age?");
              }
            
        }
        raceTime(26, false);