// Code your solution here
function findMatching(drivers, name) {

    function isMatchingIgnoreCase(element, index, array) {
        //element is a driver name in the drivers array
        if(element.toLowerCase() === name.toLowerCase()) {
            return true;
        }
        else {
            return false;
        }
    }
    return drivers.filter(isMatchingIgnoreCase);
}

function fuzzyMatch(drivers, letters) {
    const lettersArray = []
    for(const c of letters) {
        lettersArray.push(c);
    }

    const matches = drivers.filter(startsWithLetters);

    function startsWithLetters(element, index, array) {
        //element is a driver name in the drivers array
        const driverNameLetterArray = [];
        for(const c of element) {
            driverNameLetterArray.push(c)
        }

        for(let i = 0; i < lettersArray.length; i++) {
            if(lettersArray[i] === driverNameLetterArray[i]) {
                i++;
            }
            else {
                return false;
            }
        }
        return true;
    }

    return matches;
}

function matchName(drivers, driverName) {

    function isMatching(element, index, array) {
        //element is a driver object with keys name, hometown
        return element["name"] === driverName;
    }

    return drivers.filter(isMatching);
}

// const drivers = [
//     {
//       name: 'Bobby',
//       hometown: 'Pittsburgh' },
//     {
//       name: 'Sammy',
//       hometown: 'New York' } ,
//     {
//       name: 'Sally',
//       hometown: 'Cleveland' },
//     {
//       name: 'Annette',
//       hometown: 'Los Angeles' },
//     {
//       name: 'Bobby',
//       hometown: 'Tampa Bay' }
//   ];

//   matchName(drivers, "Bobby");