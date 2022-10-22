class footballTeam {
    constructor(clubName , country){
        this.clubName = clubName;
        this.country = country;

        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers){
        footballPlayers.forEach(el => {
            let [name, age, playerValue] = el.split('/');
            age = Number(age);
            playerValue = Number(playerValue);

            let currPlayer = this.invitedPlayers.find(x => x.name === name);

            if(currPlayer){
                currPlayer.playerValue = playerValue > currPlayer.playerValue 
                ? currPlayer.playerValue = playerValue 
                : currPlayer.playerValue;
            }else{
                currPlayer =  { name, age, playerValue };
                this.invitedPlayers.push(currPlayer);
            }
        });

        let output = this.invitedPlayers
        .map(x => x.name)
        .join(', ');

        return `You successfully invite ${output}.`;
    }

    signContract(selectedPlayer){
        let [playerName, playerOffer] = selectedPlayer.split('/');

        let currPlayer = this.invitedPlayers.find(x => x.name === playerName);

        if(!currPlayer){
            throw new Error(`${playerName} is not invited to the selection list!`);
        }

        if(playerOffer < currPlayer.playerValue){
            let priceDifference = Math.abs(playerOffer - currPlayer.playerValue);
            throw new Error(`The manager's offer is not enough to sign a contract with ${playerName}, ${priceDifference} million more are needed to sign the contract!`);
        }

        currPlayer.playerValue = 'Bought';

        return `Congratulations! You sign a contract with ${playerName} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age){
        let currPlayer = this.invitedPlayers.find(x => x.name === name);

        if(!currPlayer){
            throw new Error(`${playerName} is not invited to the selection list!`);
        }

        if(currPlayer.age < age){
            let ageDifference = Math.abs(age - currPlayer.age);

            if(ageDifference < 5){
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
            }

            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
        }

        return `${name} is above age limit!`;
    }

    transferWindowResult(){
        let result = [];

        result.push('Players list:');

        this.invitedPlayers.sort((a, b) => {
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        }).forEach(el => {
            result.push(`Player ${el.name}-${el.playerValue}`);
        });

        return result.join('\n');
    }
}

/*let fTeam = new footballTeam("Barcelona", "Spain"); 
 console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));*/

/*let fTeam = new footballTeam("Barcelona", "Spain"); 
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"])); 
console.log(fTeam.signContract("Lionel Messi/60")); 
console.log(fTeam.signContract("Kylian Mbappé/240")); 
console.log(fTeam.signContract("Barbukov/10"));*/

/*let fTeam = new footballTeam("Barcelona", "Spain"); 
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"])); 
console.log(fTeam.ageLimit("Lionel Messi", 33 )); 
console.log(fTeam.ageLimit("Kylian Mbappé", 30)); 
console.log(fTeam.ageLimit("Pau Torres", 26)); 
console.log(fTeam.signContract("Kylian Mbappé/240"));*/

let fTeam = new footballTeam("Barcelona", "Spain"); 
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"])); 
console.log(fTeam.signContract("Kylian Mbappé/240")); 
console.log(fTeam.ageLimit("Kylian Mbappé", 30)); 
console.log(fTeam.transferWindowResult());