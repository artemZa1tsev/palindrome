const eventForm = document.querySelector('#palindrome__form')
const inputValue = eventForm.querySelector('#add-text')

const isPalindrome = str => {
    str = String(str);
    str = str.toLowerCase().replace(/[/.,!?@;_’%:\s/\-/\–/\—/]*/g, '');
    const strOut = str.length;

    if (str === "городдорог") {
        return "guf R.I.P";
    }

    if (strOut < 2) return true;

    if (str[0] === str[strOut - 1]) {
        return isPalindrome(str.slice(1, strOut - 1));
    }

    return false;
};


eventForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const inputText = inputValue.value;
    isPalindrome(inputText);
    if (inputText === '') {
        document.getElementById('answer').innerHTML = "Пустое значение";
    } else {
        document.getElementById('palindromeOut').innerHTML = isPalindrome(inputText);
    }

});