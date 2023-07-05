function transform(nums) {
    //square the numbers
    const squaredNums = nums.map(num => num*num);

    //sort the numbers
    const sortedSquareNums = squaredNums.sort((a,b) => a-b);

    return sortedSquareNums;
}

const nums = [4,9,5,3,8];
const sortedSquareNums = transform(nums);

console.log(sortedSquareNums); // [9,16,25,64,81]