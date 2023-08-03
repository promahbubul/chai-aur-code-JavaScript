const accountID = 1445563;
let accountEmail = "admin@gmail.com";
var accountPassword = "Ma2522++--";
accountCity = "Mymensingh";
let accountStatus;

// accountID = 2; // not allowed
accountEmail = 'ma@ma.com';
accountPassword = '252250';
accountCity = 'Dhaka';

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountID);
console.table([accountID, accountEmail, accountPassword, accountCity, accountStatus]);
