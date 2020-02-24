# Array of Radioactive Mutants

Introduction
One of the aspects that confuses people when first learning arrays is that they are mutable. Not only can you say:

array.push(5)

and now array has a different value, but you can pass array into a function that uses that same line on its parameter, and your array after calling tthat function will have a different value as well.

The key here is that it doesn't actually hold a different value--it's still the same old array it was before! But now its added a new index to its internal list and added the new value you've given it there.

Today we'll be exploring that by making functions that mutate the array passed in. But remember that this is an "antipattern"--you shouldn't be doing this in production code, as it's an unexpected behavior that overwrites rather than gives back a new version of your app's all-important data. And these mutations can be very difficult to track down! So don't try this at home, please.

Guidelines
Remember that you won't be returning in this set of functions, just mutating the original array. Check main.test.js to see how we're using your function--we just pass in an array and then check if that array now contains the set of values we expected.

Setup
This is a typical test-based assignment, so:

1.Fork and clone.
2. cd into the local respository.
3   Run npm install and npm test.
4. Make some functions!
Challenges
1`addMeToEnd - adds the string 'Colin' to the end of the given array.
2addMeToStart - adds the string 'Colin' to the start of the given array.

3changeLast - changes (not adds!) the last value in the given array to the value given.

4changeAllValuesTo - changes every value in the given array to the given value.

5oddOrEven - changes every numerical value in the given array (you can assume they'll all be numbers) to the string 'odd' if the number is odd and 'even' if it's even.

6changeNextThreeToValue - starting with the given index, changes three consecutive values in the given array to the given value. Note the order of our 3 parameters, and check the test if you're unsure.

Run `npm i` and `npm test`, and follow the directions therein!