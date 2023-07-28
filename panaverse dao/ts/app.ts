// //

// const failingResponse:[number,number,string,number?] = [808, 404,"hello"];

// // but you will need to declare its type as a tuple.

// const passingResponse: [string, number] = ['{}', 200];


// if (passingResponse[1] === 200) {
// 	const localInfo = JSON.parse(passingResponse[0]);
// 	console.log(localInfo);
// }
// // passingResponse[2];

type StaffAccount = [number, string, string, string?];

const staff: StaffAccount[] = [
	[0, 'Adankwo', 'adankwo.e@'],
	[1, 'Kanokwan', 'kanokwan.s@'],
	[2, 'Aneurin', 'aneurin.s@', 'Supervisor'],
];

// When you have a set of known types at the beginning of a
// tuple and then an unknown length, you can use the spread
// operator to indicate that it can have any length and the
// extra indexes will be of a particular type:

type PayStubs = [StaffAccount, ...number[]];

const payStubs: PayStubs[] = [
	[staff[0], 250],
	[staff[1], 250, 260],
	[staff[0], 300, 300, 300],
];

const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1];
const monthTwoPayments = payStubs[1][2] + payStubs[2][2];
const monthThreePayments = payStubs[2][2];



