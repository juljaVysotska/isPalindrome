# Is palindrome checker

Here is demo: https://juljavysotska.github.io/isPalindrome/

Here is the file: https://github.com/juljaVysotska/isPalindrome/blob/main/src/helpers/isPalindrome/index.js

Code: 
```js
export const isPalindrome = (str) => {
    const preparedString = str.replace(/[^a-zA-Zа-яА-ЯїЇєЄ0-9]/g, '').toLowerCase();
    
    return preparedString === preparedString.split('').reverse().join('');
}
```
