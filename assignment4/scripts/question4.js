const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below
const open1 = msftData[0][0];
const high1 = msftData[0][1];
const low1 = msftData[0][2];
const close1 = msftData[0][3];

const open2 = msftData[1][0];
const high2 = msftData[1][1];
const low2 = msftData[1][2];
const close2 = msftData[1][3];

const averageClosingPrice = (close1 + close2) / 2;
console.log(`Average closing price of MSFT is ${averageClosingPrice.toFixed(2)}`);
