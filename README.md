## Q1 –Digit Gatekeeper
 We iterate through every integer x starting at L and stopping just before  We immediately ignore any number that isn't perfectly divisible by K.We inspect each digit; if a 0 appears anywhere, the number is disqualified.We sum the remaining digits and verify if that total is a prime number.Only numbers that survive all three filters are added to our final tally.

## Q2 –Roll-Seed Lock
The program captures an initial value N and a seed value using prompt(). It executes exactly three iterations.If the value is even, it is halved and the seed is added.If the value is odd, it is tripled and the seed is subtracted.After the three steps, the final value must satisfy two criteria-It must be between 100 and 999 inclusive.Its middle digit (the tens place) must match the original seed.The program displays "YES" or "NO" along with the final number via alert().

## Q3 –Mirror Corridor
The objective is to find the smallest non-negative integer x such that the sum N+x satisfies two specific properties- The number must read the same forward and backward. In this implementation, we convert the sum to a string and compare it with its reversed version. The sum must be perfectly divisible by the given integer K.The first value of X that satisfies both conditions is stored as the result, and the loop is terminated early using a break statement. If the loop completes without finding a valid X, the program outputs -1.

## Q4 –Fare Calculator
The starting point is the base plus 7 times the distance.If the rider is more than 15 minutes late, a flat fee of 20 is added.For trips exceeding 10 units of distance, the current subtotal is increased by 10%. If the seed is odd, it is subtracted from the fare.If the seed is even, it is added to the fare.The final result is rounded up to the nearest multiple of 5 using Math.ceil.

## Q5 –Skipping Numbers
We use prompt() to capture the target sum N and the seed value.We use a while loop that continues as long as the currentsum is less than N.In each iteration, we increment m.We check if m is divisible by our skip divisor using the modulo operator (m% skipdivisor!==0).If m is NOT divisible, we add it to the total sum.The loop stops exactly when the sum reaches or exceeds N. The values of m and the final currentsum are then displayed via alert().

## Q6 –Contest Score Judge
The script takes three inputs representing correct a, partially correct b, and wrong c answers. If the weighted score is negative, it is immediately reset to 0.If the student submitted more than 50 total answers, 10 points are deducted from the current score The student receives a PASS if their final result is 60 or higher; otherwise, they receive a FAIL.Output: The final score and status are displayed in a single alert().
