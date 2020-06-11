// You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.

// Example 1:

// Input: amount = 5, coins = [1, 2, 5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1
// Example 2:

// Input: amount = 3, coins = [2]
// Output: 0
// Explanation: the amount of 3 cannot be made up just with coins of 2.
// Example 3:

// Input: amount = 10, coins = [10]
// Output: 1

// Note:

// You can assume that

// 0 <= amount <= 5000
// 1 <= coin <= 5000
// the number of coins is less than 500
// the answer is guaranteed to fit into signed 32-bit integer

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  return countWays2(amount, coins);
};

//Time exceeded
const countWays = (amount, coins, size) => {
  if (amount == 0) return 1;

  if (amount < 0 || size == 0) return 0;

  const val = coins[size - 1];

  const contain = countWays(amount - val, coins, size);
  console.log("contain", contain);
  const does_not_contain = countWays(amount, coins, size - 1);
  console.log("does_not_contain", does_not_contain);

  return contain + does_not_contain;
};

const countWays2 = (amount, coins) => {
  const ways = Array(amount + 1).fill(0);
  ways[0] = 1;
  coins.forEach((coin) => {
    for (let i = coin; i <= amount; i++) {
      ways[i] += ways[i - coin];
    }
  });

  return ways[amount];
};

// console.log(change(500, [3, 5, 7, 8, 9, 10, 11]));
console.log(change(5, [1, 2, 5]));
