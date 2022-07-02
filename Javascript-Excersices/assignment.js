// Assignment - JavaScript Exercises
// 1. Create a Palindrome app in Javascript which will print whether a string is a palindrome or not

function reverse(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  if (str == reversed) {
    console.log("That is a palidrome");
  } else {
    console.log("That is not a palindrome");
  }
}

console.log(reverse("mom"));

// 2. Create an app which removes duplicates from an array

function removeDuplicates(array) {
  let noDuplicates = [];
  for (let i = 0; i < array.length; i++) {
    if (noDuplicates.indexOf(array[i]) == -1) {
      noDuplicates.push(array[i]);
    }
  }
  return noDuplicates;
}

let myList = [1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6];
console.log(myList);
let noDuplicates = removeDuplicates(myList);
console.log(noDuplicates);

let names = ["John", "Mary", "Alex", "Steve", "Mary", "John"];
let result = removeDuplicates(names);
console.log(result);

// 3. Create an app which returns true/false depending on if the item is in the array.

let items = ["play", "hay", "day", "say"];

// enter word after includes to determine if it is in the array of items.
console.log(items.includes("ray"));

// 4. Create an app which finds the largest number in an array

function findLargestNumber(array) {
  let max = 0;
  let items = array.length;
  for (index = 0; index < items; index++) {
    if (array[index] > max) {
      max = array[index];
    }
  }
  return max;
}

items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 40, 30, 60, 22, 32];
let displayLargest = findLargestNumber(items);
console.log(displayLargest);

// 5. Create an app which finds the smallest number in an array

function findSmallestNumber(array) {
  let min = array[0];
  let items = array.length;
  for (index = 0; index < items; index++) {
    if (array[index] < min) {
      min = array[index];
    }
  }
  return min;
}

items = [40, 30, 60, 22, 32];
let displaySmallest = findSmallestNumber(items);
console.log(displaySmallest);

// 6. Create FizzBuzz app

function fizzBuzz(isFizzBuzz) {
  if (isFizzBuzz % 5 == 0 && isFizzBuzz % 3 == 0) {
    console.log("FIZZBUZZ");
  } else if (isFizzBuzz % 3 == 0) {
    console.log("FIZZ");
  } else if (isFizzBuzz % 5 == 0) {
    console.log("BUZZ");
  } else {
    console.log("Nothing fizzing or buzzing about that");
  }
}

fizzBuzz(15);

// 7. Create an app which determines whether the number is even or odd.

function checkEvenOdd(isEvenOdd) {
  if (isEvenOdd % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

checkEvenOdd(12);

// 8. Take the array [3,4,5,6,7,8,1] and sort them in ascending and descending order.

let unsortedArray = [3, 4, 5, 6, 7, 8, 1];

let sortedArray = unsortedArray.sort();
console.log(sortedArray);

// 9. Bank Account

class BankAccount {
  constructor(firstName, lastName, middleName, accountType, balance) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.accountType = accountType;
    this.balance = balance;
    this.accountStatus = "";
  }
  openAccount(amount) {
    if (this.balance >= 100) {
      return (this.accountStatus = "Open");
      console.log("Your account is now active");
    } else if (this.balance <= 100) {
      return (this.accountStatus = "Ineligible");
      console.log("You are not eligible for this Bank.");
    }
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
    if (this.balance <= 0) {
      console.log(
        "You have overdrafted this account, a $35.00 fee has been added. Please add funds now!"
      );
      return (this.balance -= 35);
    }
  }

  transfer(amount, destinationAccount) {
    this.withdraw(amount);
    destinationAccount.deposit(amount);
  }
}

let checkingaccount = new BankAccount(
  "rina",
  "mendoza",
  "jalisa",
  "checking",
  500,
  "prospect"
);

checkingAccount.openAccount();
console.log(checkingAccount.accountStatus);

let savingsAccount = new BankAccount(
  "jackie",
  "smith",
  "jalisa",
  "savings",
  5000,
  "open"
);

savingsAccount.transfer(4000, checkingAccount);
console.log(checkingAccount.balance);

savingsAccount.withdraw(2000);
console.log(savingsAccount.balance);
