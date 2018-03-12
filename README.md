# Node.Js Foundations - Modularity & Testing with Dice Rolls
#### Completed in collaboration with [Valerie Freeman](www.github.com/Valerie-Freeman)

### Goals
Design a modular Node.Js environment to emmulate a dice roll with a global binary command called `diceroll`

### Directives
Designated file structure:
```
dice-roll/
    bin/
        diceroll
    lib/
        cli.js
        dice.js
        math.js
        parse-args.js
    README.md
    package.json
```

Create a command that performs a dice roll based on 2 arguments (as integers):
  - Argument 1: number of rolls
  - Argument 2: number of sides on the die

If only 1 argument is entered, the argument will be the die's number of sides & will be rolled only once. If no arguments are entered, the die will roll once and have 6 sides.

#### Testing
Complete testing for all exported propeties on modularized javascript files. 

### Modularity
The code is to be modularizered so that each file has independent responsibilities:
  - `cli.js` is treated as the controller, initiating all actions & printing results
  - `parse-args.js` returns the arguments to parsed integer values, returns default integar values if no arguments are passed, or exits the process on invalid entries
  - `dice.js` contains to 2 functions:  `toDiceNotation` & `roll`. 
    - `toDiceNotation` converts the sides & roll count of the die to a singular string, formatted as: `<sides>d<roll>`  (i.e., `1d6`, `3d18`). 
    - `roll` splits the two integers from the converted string from `toDiceNotation`, sets the first to the variable `lower` (the lowest value a roll can be), multiplies the two integers for the variable `upper` (highest value possible), & calls the imported `randomInt` function from `math.js` with the two variables as parameters
  - `math.js` returns a random number between the two values passed into the `randomInt` function

#### Coin Toss 
If you run the following `diceroll` command in your terminal (1 roll, 2 sides), the random results will be either `heads` or `tails`
```
diceroll 1 2
```
or
```
diceroll --flip
```

#### Rules
To view all the rules and directions for `diceroll`, run the following command
```
diceroll --rules
```

### Installing
To install the `diceroll` command, run the following commands:
```
$ git clone https://github.com/iiimosley/NSS-Modularity-Diceroll.git
$ npm install -g
``` 

#### Running Tests
To run testing via [Mocha](https://mochajs.org/) & [Chai](http://chaijs.com/), run the following command
```
npm test
```
All testing assertions can be found in the 'test' directory
