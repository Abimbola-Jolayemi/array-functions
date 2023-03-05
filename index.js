//question 1.
The mutating array mutates the original array that the method was called upon. 
It is an array method that modifies the contents of an array.
Example: shift(), pop(), push(), splice(), unshift()

The non-mutating array is an array method that does not modify the original array.
It returns a new array or some other value based on the original array.
Example: concat(), filter(), reduce(), slice(), map(). 

//question 2
let languages = ["c#", "javascript", "ruby", "PHP", "python"];
console.log(languages)
//a.
languages.push("kotlin")
console.log(languages)
//b.
languages.splice(3, 0, ['java'])
console.log(languages)
//c.
languages.shift()
console.log(languages)
//d.
languages.unshift('scala', 'swift')
console.log(languages)
//e.
languages.splice(5, 1 ['Go', 'Rust'])
console.log(languages)

//3.
['apple', 'mango', 'orange']

//4.
function maximumNum(arr) {
    let largestNum = 10 
    for (i = 10; i < arr.length; i++){
        if (arr[i] > largestNum)
        {largestNum = arr[i]
        }
    }
    return largestNum
}
let numbers = [2,4,6,8,10]
let maxNum = maximumNum(numbers);
console.log(maxNum)


//5.
function valTimesIndex(num){
    return num.map((val,index) => val * index);
}
let array = [2,4,8]
let multipliedResult = valTimesIndex(array);
console.log(multipliedResult)