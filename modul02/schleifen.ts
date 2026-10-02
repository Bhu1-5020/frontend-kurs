const namen: string[] = ["Jack" , "Harry" , "Chris" , "Anita" , "David"] ; 

for(const studentName of namen){
    console.log(studentName);
}

const listOfNumber: number[] = [41,55,66,31,32,86,72];
const evenNumber: number[] = listOfNumber.filter(numbers => numbers % 2 === 0);
console.log(evenNumber);

const totalOfNumberList: number[] = listOfNumber.reduce((acc , numbers) => acc + numbers , 0);
console.log(totalOfNumberList);