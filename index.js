// 1_calculateSum

function calculateSum(num1,num2){
    return num1+num2;
}

// 2_isEven

function isEven(num){
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}

// 3_findMax

function findMax(arr){
    return Math.max(...arr);
}

// 4_reverseString

function reverseString(strg){
    const revStrArr= strg.split("").reverse();
    return revStrArr.join("");
}

// 5_filterOddNumbers

function filterOddNumbers(numArr){
    return numArr.filter(checkOdd);
    function checkOdd(item){
        if(item%2==1){
            return item;
        }
    }
}

// 6_sumArray

function sumArray(numArr){
    return numArr.reduce(addValues);

    function addValues(total, value){
        return total+value;
    }
}

// 7_sortArray

function sortArray(numArr){
    return numArr.toSorted(function(a,b) {return a-b});
}

// 8_capitalizeFirstLetter

function capitalizeFirstLetter(inpStr){
    return inpStr.charAt(0).toUpperCase()+ inpStr.slice(1);
    //return inpStr[0].toUpperCase()+ inpStr.slice(1);
}

// Result in console
console.log(`calculateSum result: ${calculateSum(2,3)}`);
console.log(`isEven result: ${isEven(4)}`);
console.log(`findMax result: ${findMax([34, 12, 89, 288, 23, 450, 343, 12, 455])}`);
console.log(`reverseString result: ${reverseString("ostad")}`);
console.log(`filterOddNumbers result: ${filterOddNumbers([23, 43, 12, 56, 34, 13, 58, 432, 79])}`);
console.log(`sumArray result: ${sumArray([12, 13, 45, 78, 22])}`);
console.log(`sortArray result: ${sortArray([8, 10, 3, 2, 6, 4, 1, 5, 7, 9])}`);
console.log(`capitalizeFirstLetter result: ${capitalizeFirstLetter("ostad")}`);