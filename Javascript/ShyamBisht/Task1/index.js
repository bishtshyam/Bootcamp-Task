// Enven and Odd
const numbers = [];
for(let i= 1;i<=100;i++){
   numbers[i] = Math.floor(Math.random()*101);
}

numbers.forEach(evenORodd);

function evenORodd(num){
    if(num % 2 ==0){
        console.log(num, "is Even");
    }else{
        console.log(num, "is Odd");
    }
}

// Prime Numbers
numbers.forEach(PrimeNumbers);
const PrimeNumList = [];
function PrimeNumbers(num){
    let isPrime = true;
    if(num == 0 || num == 1){
        console.log(num, "is not prime.");
    }
    for(let i = 2; i<num/2; i++){
        if(num%i==0){
            isPrime = false;
        }
    }

    if(isPrime){
        console.log(num, "is Prime")
    }else{
        console.log(num, "is not prime.");
    }
}

// Award Amount

let studentsObj = {student1:[{Name: "Test1", Branch: "MCA", CGPA : "9.0", AwardAmount: "1000"}],
                   student2:[{Name: "Test2", Branch: "BCA", CGPA : "8.0", AwardAmount: "2000"}],
                   student3:[{Name: "Test3", Branch: "BCA", CGPA : "7.5", AwardAmount: "3000"}],
                   student4:[{Name: "Test4", Branch: "MCA", CGPA : "9.5", AwardAmount: "4000"}],
                   student5:[{Name: "Test5", Branch: "BCA", CGPA : "10.0", AwardAmount: "5000"}],
                   student6:[{Name: "Test6", Branch: "MCA", CGPA : "8.0", AwardAmount: "6000"}]
                  };
let studentsArray = [studentsObj]
console.log(studentsObj.student3[0].AwardAmount);