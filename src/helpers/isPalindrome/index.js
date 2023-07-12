export const isPalindrome = (str) => {
    const preparedString = str.replace(/[^a-zA-Zа-яА-ЯїЇєЄ0-9]/g, '').toLowerCase();
    
    return preparedString === preparedString.split('').reverse().join('');
}