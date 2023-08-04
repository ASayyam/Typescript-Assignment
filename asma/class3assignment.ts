export{};
//Exercise 2; Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

var personname ="John Doe";
console.log(`"Hello, ${personname}, would you like to learn some Python today?"`); 

//Exercise 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

var personName: String = "Aneesa farooq"
console.log(personName)
console.log(personName.toLowerCase())
console.log(personName.toUpperCase())

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  
  const name = "aneesa farooq";
  const titleCaseName = toTitleCase(name);
  console.log(titleCaseName); 

//Exercise 4; Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

const quote = 'A person who never made a mistake never tried anything new.';
const author = 'Albert Einstein';
console.log(`${author} once said, "${quote}" `);

//Exercise 5; Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

const message = 'A person who never made a mistake never tried anything new.';
const famousperson = 'Albert Einstein';
console.log(`${famousperson} once said, "${message}" `);

//Exercise;6 Stripping Names: Store a person’s name, and include some whitespace characters at the
// beginning and end of the name. Make sure you use each character combination, 
// "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

const nameWithWhiteSpaces = "\t \n Asma Sayyam \t \n";
console.log(nameWithWhiteSpaces);
const nameWithoutWhiteSpaces = nameWithWhiteSpaces.trim();
console.log(nameWithoutWhiteSpaces);

//Exercise;7 Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

let num= 3
let num1=5
console.log(num +num1);

let num2= 10
let num3= 2
console.log(num2 -num3);

let num4= 4
let num5= 2
console.log(num4*num5);

let num6=16
let num7=2
console.log(num6 /num7);

/*Exercise;8 You should create four lines that look like this:

console.log(5 + 3)

Your output should simply be four lines with the number 8 appearing once on each line.*/

console.log(5 + 3)
console.log(5 + 3)
console.log(5 + 3)
console.log(5 + 3)

/* Exercise;9 Favorite Number: Store your favorite number in a variable. Then, using 
that variable, create a message that reveals your favorite number. Print that message.*/
const favoriteNumber: number= 1
const message1= `My favorite number is ${favoriteNumber}.`;
console.log(message1);



/*Exercise;10 Adding Comments: Choose two of the programs you’ve written, and add at least 
one comment to each. If you don’t have anything specific to write because your 
programs are too simple at this point, just add your name and the current date 
at the top of each program file. Then write one sentence describing what the program does.*/

// wrote exercise questions at the start of each exercise as a coment.


