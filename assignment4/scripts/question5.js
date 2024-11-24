const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below
const averageClosingPrice = ((parseFloat(disneyData[0].close) + parseFloat(disneyData[1].close)) / 2 + 0.000001).toFixed(2);
// Stupid JavaScript Arithmetic Precision Problem give me 123.00 instead of 123.01 no choice have to hard code a 0.000001 to fix it
console.log(`Average closing price of Disney is ${averageClosingPrice}`);
