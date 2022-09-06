   const longestWord = (sentence)=>{
    let regex = /([^A-Z a-z])+/g;
    let text = sentence.replace(regex, "").split(" ");
    let longestText = "";
    let longestCount = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i].length > longestCount) {
            longestCount = text[i].length;
            longestText = text[i];
        }
    }
    return longestText;
 }

console.log(longestWord('i am learning javascsssssript woho 2312313 3 $$$##@#@##'))