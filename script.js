"use strict";

/* 
Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
Вихідний рядок та символи для видалення задає користувач.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const firstMessage = "Please enter some string.";
function getStringFromUser() {
  let input = prompt(firstMessage);

  while (!input?.trim() || !isNaN(input)) {
    input = prompt(`Not valid value entered. \n${firstMessage}`);
  }

  return input;
}

const secondMessage = "Enter characters (one at a time). \nTo stop entering, click cancel.";
function getCharsFromUser() {
  const chars = [];

  while (true) {
    let input = prompt(secondMessage);
    if (input === null) {
      if (chars.length > 0) {
        break;
      }
      else {
        alert('You must enter at least one valid char');
        continue;
      }
    };

    if (!input.trim() || !isNaN(input) || input.length > 1) {
      alert(`Not valid value entered. \nClick 'Ok' and try one more time`);
    }
    else {
      if (!chars.includes(input)) {
        chars.push(input);
      }
      else {
        continue;
      }
    }
  }

  return chars;
}

const stringFromUser = getStringFromUser();
const charsFromUser = getCharsFromUser();

function deleteCharsFromString(string, chars) {
  for (const item of chars) {
    if (string.includes(item)) {
      string = string.split(item).join('');
    }
  }

  return string;
}

const result = deleteCharsFromString(stringFromUser, charsFromUser);
alert(result);
