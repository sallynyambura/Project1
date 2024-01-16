//Part 1: display the 3 words

// initialized an empty array
let words =[];
let i;
let text;
text = "<ul>";

//Ask user to enter 3 words
for (i=0; i<3;i++)
{
    //prompt user input
    let user = prompt("Please enter 3 words: " + (i + 1));
    words[i] = user;  
}

//add input into array
let list = document.getElementById("list");
words.forEach(function(word){
    let li = document.createElement('li');
    li.textContent = word;
    list.appendChild(li);
});

// Display only part1
document.getElementById('section2').style.display = "none";

//Part 2: Swap button and display swapList
document.addEventListener("DOMContentLoaded", function (event) {
    
    //create function for swap button
    document.getElementById("swapButton").addEventListener('click', function(){
        //swap the first letter and the last letter
        let swapWords = words.map(function(oneWord){
            return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length -1) + oneWord.charAt(0);
        });

        //add the swap words to the array and display
        let swapList = document.getElementById('swapList');
        swapWords.forEach(function(oneWord){
            let li = document.createElement('li');
            swapList.appendChild(li);
            li.textContent = oneWord;
        });
        // Display only the swap list page
        document.getElementById('section1').style.display = "none";
        document.getElementById('section2').style.display = "block";
    });
    
});
