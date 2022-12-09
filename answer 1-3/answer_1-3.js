// Test Full Stack No 1

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const fizzBuzz = (array)=>{
return array.map((v,i)=>{
    if(v%3 === 0){
        return 'Fizz'
    }else if(v%5===0){
        return 'Buzz'
    }else{
        return v
    }
})
}
console.log('Jawaban No 1 ==>> ',fizzBuzz(array))

// Test Full Stack No.2

var array = ['kodok', 'kadal', 'radar', 'lincah']

const isPalindrome = (array)=>{
    return array.map((v,i)=>{
        if(v.split('').reverse().join('') === v){
            return true
        }else{
            return false
        }
    })
}
console.log('jawaban no.2 ===>',isPalindrome(array))


// Test Full Stack No.3

var array = [1,2,3,2,5,4,4,5,9,8]

const isDuplicate = (array)=>{
return array.filter((v,i)=>{
    return array.indexOf(v) !== i
})
}
let output = `${isDuplicate(array).length} data duplicate`

console.log('jawaban no 3 ====>',output)