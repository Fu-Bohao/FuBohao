const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
total = 0

for (let i = 0; i < amdPrices.length; i++) {
    total += amdPrices[i];
}
average = total / amdPrices.length;
average = average.toFixed(2);

daysPricesAboveAverage = 0;
for (let i = 0; i < amdPrices.length; i++) {
    if (amdPrices[i] > average) {
        daysPricesAboveAverage += 1;
    }
}
console.log(`Number of days AMD was above the 7-day SMA is: ${daysPricesAboveAverage}`);