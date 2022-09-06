const capitalize = (word)=>{ 
    
    return word.replaceAll('a', 'A')
               .replaceAll('e', 'E')
               .replaceAll('i', 'I')
               .replaceAll('o', 'O')
               .replaceAll('u', 'U');
 }

  console.log(capitalize('Hello dear Bootcamper'));