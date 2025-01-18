{
    // 
    function sumArray(nums: number[]): number{
        let total=0;
        for(let num of nums){
            total+=num;
        }
        return total;
    }
    const numbers=[1,2,3,4,5];
    console.log(sumArray(numbers));

    // 
}