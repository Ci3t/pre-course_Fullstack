const numFactoria = (num) => {
    
        const numFactoria2 = (num) => {
            //Your Code Here :-)
            if (num < 0)
                return -1;
            else if (num == 0)
                return 1;
            else {
                return (num * numFactoria2(num - 1));
        
            }
        }
        return numFactoria2(num);
    }



console.log(numFactoria(6));