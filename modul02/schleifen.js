var namen = ["Jack", "Harry", "Chris", "Anita", "David"];
for (var _i = 0, namen_1 = namen; _i < namen_1.length; _i++) {
    var studentName = namen_1[_i];
    console.log(studentName);
}
var listOfNumber = [41, 55, 66, 31, 32, 86, 72];
var evenNumber = listOfNumber.filter(function (numbers) { return numbers % 2 === 0; });
console.log(evenNumber);
var totalOfNumberList = listOfNumber.reduce(function (acc, numbers) { return acc + numbers; }, 0);
console.log(totalOfNumberList);
