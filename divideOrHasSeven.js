const divideOrHasSeven = (start, end) => {


        let counter = 0;
        for (let i = start; i <= end; i++){
            if (i % 7 === 0 || String(i).includes(7)){
                counter++;
                }
        }
        return counter;
    }

console.log(divideOrHasSeven(69, 85));