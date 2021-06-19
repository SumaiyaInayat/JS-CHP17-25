/ CHAPTERS 17-20
// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// mult_array=[[],[],[],[],[]];

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

// matrix=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// console.log(matrix[0],matrix[1],matrix[2]);

// 3. Write a program to print numeric counting from 1 to 10.

// for (i=1;i<=10;i++){
//      document.write(i,"<br>");
// }

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// num=prompt("Enter a number to print its multiplication table:");
// len=prompt("Enter length for multiplication table:");
// document.write("MULTIPLICATION TABLE OF :",num,"<br>");
// document.write("LENGTH :",len,"<br>","<br>");
// for (i=1;i<=len;i++){
//     document.write(num,"*",i,"=",num*i,"<br>")
// }

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// fruits=["apple","banana","mango","orange","strawberry"];
// for (i in  fruits){
//     document.write(fruits[i],"<br>");
   
// }
// for (i in  fruits){
//     document.write("Element at index ",i," is ",fruits[i],"<br>")

// }

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// document.write("<b>Counting</b><br>")
// for (i=1;i<=15;i++){
//     document.write(i+',');
// }
// document.write("<br><br><b>Reverse Counting</b><br>")
// for (i=1;i<=10;i--){
//     document.write(i+',')
// }
// document.write("<br><br><b>Even</b><br>")
// for (i=0;i<=20;i++){
//     if (i%2==0){
//         document.write(i+',')

//     }
// }
// document.write("<br><br><b>Odd</b><br>")
// for (i=0;i<=20;i++){
//     if (i%2!=0){
//         document.write(i+',')
//     }
// }
// document.write("<br><br><b>Series</b><br>")
// for (i=0;i<=20;i++){
//     if (i%2==0){
//         document.write(i,"k"+',')
//     }

// }

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not.

// array=["cake","apple pie","cookie","chips","patties"];
// search=prompt("Welcome to our bakery!What do you want to search sir/maa'm?");
// for (i=0;i<array.length;i++){
//     if ( array[i]==search){
//         document.write(search," is available at index ",i, " in our bakery.")
//     }
//     else{
//         document.write("We are sorry ! ",search," is not available in our bakery.")
//     }
//     break;
// }

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// A=[24,53,78,91,12];
// document.write("ARRAY ELEMENTS :",A, "<br>");
// document.write("The largest number is ",Math.max(...A),"<br>")


// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12];
// document.write("ARRAY ELEMENTS :",A, "<br>");
// document.write("The lowest number is ",Math.min(...A))

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

// for (i=1;i<=100;i++){
//     if (i%5==0){
//         document.write(i+",")
//     }
//  }
// CHAPTERS 21-25
// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var f_name=prompt("Enter first name:");
// var l_name=prompt("Enter last name:");
// var fullname=(f_name+l_name);
// alert("WELCOME "+(fullname));

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var mblephone=prompt("Enter your favourite mobile phone:");
// document.write("My favourite mobile phone is:", (mblephone),"<br>");
// document.write("The length of the string is:",(mblephone.length));

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser

// var string="Pakistani";
// var position=string.indexOf("n");
// document.write("String:",string,"<br>");
// document.write("Index of 'n' is :",position);

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var string="Hello World";
// var position=string.lastIndexOf("l");
// document.write("String:",string,"<br>");
// document.write("Index of 'l' is :",position);

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// var string="Pakistani";
// document.write("string: ",string,"<br>");
// document.write("Character at index 3 is ",string[3]);

// 6. Repeat Q1 using string concat() method.
// var f_name=prompt("Enter first name:");
// var l_name=prompt("Enter last name:");
// var fullname=(f_name.concat(l_name));
// alert("WELCOME "+(fullname));

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var str="Hyderabad";
// var replace=str.replace("Hyder","Islam");
// document.write("City: ",str,"<br>");
// document.write("After replacement: ",replace);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// var message="Ali and Sami are best friends. They play cricket and football together.";
// var replaced=message.replace(/and/g,"&");
// document.write("Message: ",message,"<br>");
// document.write("After replacement: ",replaced);

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// var str="472";
// document.write("Value: ",str,"<br>");
// document.write("Type: ",typeof(str),"<br>");
// var num=parseInt(str);
// document.write("Value: ",num,"<br>");
// document.write("Type: ",typeof(num));

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// var str=prompt("Enter input:");
// document.write("User input: ",str,"<br>");
// document.write("Upper case :",str.toUpperCase());

// 11. Write a program that takes user input. Convert and
// show the input in title case.

// var str=prompt("Enter input:");
// var firstchar=str.charAt(0).toUpperCase();
// var slice=str.slice(1,12);
// document.write("User input: ",str,"<br>");
// document.write("Title case :",firstchar+split);

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num= 35.36;
// document.write("Number: ",num,"<br>");
// document.write("Result: ",num*100);

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var username=prompt("Enter username;");
// for (i=0;i<username.length;i++){
//     if (username[i] == "@" || username[i] == "!" || username[i] =="," || username[i]== "."){
//         prompt("Please enter a valid username!")
//         break;
//     }
// }
// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var password=prompt("Enter password:");
// for (i=0;i<password.length;i++){
//     if (password[0]==Number || password[i]<6 || password[i]=="@" || password[i]=="," || password[i]=="." || password[i]=="!") {
//         prompt("Password shouldnot start with  number .please enter a valid password ")
//         break
//     }
   

// }
// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
// var university ="University of Karachi";
// document.write(university.split(" "),"<br>");
// for (i=0;i<university.length;i++){
//     document.write(university[i],"<br>")
// } 

// 17. Write a program to display the last character of a user
// input.

// var str=prompt("Enter input:");
// document.write("User input:",str,"<br>")
// document.write("Last character of input :",str.charAt(str.length-1))

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// var str="The quick brown fox jumps over the lazy dog";
// // var c=str.match(/the/g.length());
// document.write("Text:",str,"<br>");
// document.write("There are",(str.match(/the/g)).length," occurrences of the word 'the' ");