const fs = require('fs');
const readline = require('readline');
const fileName = 'data.txt';
/**
* @param {int} id
* @param {string} name
* @param {string} gender
* @param {string} dob
& @param {string} weapon
* @param {string} element
* @param {string} nation 
*/
function Character(
    id,
    name,
    gender,
    dob,
    weapon,
    element,
    nation
) {
    let _id = id;
    let _name = name;
    let _gender = gender;
    let _dob = dob;
    let _weapon = weapon;
    let _element = element;
    let _nation = nation;

    return {
        /**
         * @returns {int}
         */
        getId: () => {
            return _id;
        },
        setId: (id) => {
            _id = id;
        },

        /**
         * @returns {string}
         */
        getName: () => {
            return name;
        },
        setName: (name) => {
            _name = name;
        },

        /**
         * @returns {string}
         */
        getGender: () => {
            return gender;
        },
        setGender: (gender) => {
            _gender = gender;
        },

        /**
         * 
         * @returns {string}
         */
        getDOB: () => {
            return dob;
        },
        setDOB: (dob) => {
            _dob = dob;
        },

        /**
         * 
         * @returns {string}
         */
        getWeapon: () => {
            return weapon;
        },
        setWeapon: (weapon) => {
            _weapon = weapon;
        },

        /**
         * 
         * @returns {string}
         */
        getElement: () => {
            return element;
        },
        setElement: (element) => {
            _element = element;
        },

        /**
         * 
         * @returns {string}
         */
        getNation: () => {
            return nation;
        },
        setNation: (nation) => {
            _nation = nation;
        }
    }
}

const rlAsync = (question) => new Promise((resolve, reject) => {
    //resolve = return
    // reject = throw
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question(question, (answer) => {
        try {
            resolve(answer);
        } catch (err) {
            reject(err);
        } finally {
            rl.close();
        }
    });
});

async function addNewCharacter() {
    // rl.question('Enter id: ', (id) => {
    //     rl.question('Enter name: ', (name) => {
    //         rl.question('Enter gender: ', (gender) => {
    //             rl.question('Enter dob: ', (dob) => {
    //                 rl.question('Enter weapon: ', (weapon) => {
    //                     rl.question('Enter element: ', (element) => {
    //                         rl.question('Enter nation: ', (nation) => {
    //                             const newCharacter = '${id},${name},${gender},${dob},${weapon},${element},${nation}\n';

    //                             fs.appendFile(fileName, newCharacter, (err) => {
    //                                 if (err) {
    //                                     console.error('Error: ',err);
    //                                 } else {
    //                                     console.log('Successfully!')
    //                                 }
    //                             })

    //                             rl.close();
    //                         });
    //                     });
    //                 });
    //             });
    //         });
    //     });
    // });

    const numberInt = await rlAsync("Enter id: ").catch(err => {
        console.log(err);
    });
    const id = parseInt(numberInt);

    const name = await rlAsync("Enter name: ").catch(err => {
        console.log(err);
    });

    const gender = await rlAsync("Enter gender: ").catch(err => {
        console.log(err);
    });

    const dob = await rlAsync("Enter date of birth: ").catch(err => {
        console.log(err);
    });

    const weapon = await rlAsync("Enter weapon: ").catch(err => {
        console.log(err);
    });

    const element = await rlAsync("Enter element: ").catch(err => {
        console.log(err);
    });

    const nation = await rlAsync("Enter nation: ").catch(err => {
        console.log(err);
    });

    const newCharacter = `\n${id},${name},${gender},${dob},${weapon},${element},${nation}`;

    fs.appendFile(fileName, newCharacter, (err) => {
        if (err) {
            console.error('Error: ', err);
        } else {
            console.log('Successfully!')
        }
    });
}

function displayChacracter() {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file: ', err);
            return;
        }

        const lines = data.split('\n');

        const characters = lines.map((line) => {
            const [id, name, gender, dob, weapon, element, nation] = line.split(',');
            return { id: parseInt(id), name, gender, dob, weapon, element, nation: nation.trim() };
        });
        console.log("List of characters: ", characters);
    });
}

async function main() {
    console.log("1. Add character");
    console.log("2. Display charater");
    // rl.question("Enter function: ", (choice) => {
    //     const userChoice = parseInt(choice);
    //     switch(userChoice){
    //         case 1:
    //             addNewCharacter();
    //             break;
    //         case 2: 
    //             displayChacracter();
    //             break;
    //     }
    //     rl.close();
    // });
    const select = await new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question("Enter function: ", (choice) => {
            try {
                const userChoice = parseInt(choice);
                resolve(userChoice);
            } catch (err) {
                reject(err);
            } finally {
                rl.close();
            }
        });
    });

    switch (select) {
        case 1:
            addNewCharacter();
            break;
        case 2:
            displayChacracter();
            break;
    }

}

main();