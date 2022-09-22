function solve(){
    return {
        mage(mageName){
            let mageObj = {
                name: mageName,
                health: 100,
                mana: 100,
                cast(spellName){
                    let decreasedMana = this.mana - 1;
                    if(decreasedMana < 0){
                        console.log('No mana left!');
                        return;
                    }

                    this.mana = decreasedMana;
                    console.log(`${this.name} cast ${spellName}`);
                } 
            }

            return mageObj;
        },

        fighter(fighterName){
            let fighterObj = {
                name: fighterName,
                health: 100,
                stamina: 100,
                fight(){
                    let decreasedStamina = this.stamina - 1;
                    if(decreasedStamina < 0){
                        console.log('No stamina left!');
                        return;
                    }

                    this.stamina = decreasedStamina;
                    console.log(`${this.name} slashes at the foe!`);
                }
            }
            
            return fighterObj;
        }
    };
}

let create = solve();

const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()
console.log(scorcher2.stamina);
console.log(scorcher.mana);