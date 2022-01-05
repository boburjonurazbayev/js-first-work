alert("Xush kelibsiz Xojaka");

var firstName = prompt("Ismingizni kiriting", "John");

var lastName = prompt("Familiyangizni kiriting", "Doew");

var middledName = prompt("Otangizni ismini kiriting", "Someone");

var age = Number(prompt("Yoshingizni kiriting", "21"));

var isMarried = false;

var carType = undefined;

var salary = null;

var experience = undefined;

var fullName = firstName + " " + lastName + " " + middledName;

alert("Bergan javoblariz uchun rozi bo`ling " + firstName + " aka");

console.log(
  "Assalomu alekum " + firstName + " aka. \n",
  "Siz haqingizdagi ma`lumotlar: \nFamiliyangiz: " + lastName + ",\n",
  "Otangizni ismi: " + middledName + ",\n",
  "To`liq ismingiz: " + fullName + ",\n",
  "Yoshingiz: " + age + ",\n",
  "Uylanganmisiz? " + isMarried + ",\n",
  "Moshinangiz turi: " + carType + ",\n",
  "Maoshingiz: " + salary
);
