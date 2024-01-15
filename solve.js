//complete twoArrays function
//return a string of yes or no 
//function accepts following parameters: Integer K, Integer Array A, Integer array B 

function twoArrays(k, a, b) {
    //sort method for each array 
    a.sort((a,b) => a-b);
    b.sort((a,b) => b-a);

//loop through a and see if the each array indexes add up to less than K 
    for (let i = 0; i < a.length; i++) {
        if (a[i] + b[i] < k){
            return 'no'
        } 
            }
            return 'yes';
        }
        

//need to find if a version of A lines up with a version of B  such that they add up to K 
//need to loop through both versions of the arrays because just because they match at an iindex that could throw the whole thing off. so we need a way to get all the variations of the a loop and then send the b loop through that. 
//sorting them both gives us the best chance to see if the numbers compliment one another 

//
//
//
//
//
//Counting Sort Algorithim

//Given an integer array
function countingSort(arr) {
    const count = {};

}
//1) find out how many indecies it has -- would this be math.max? 
//2) create an array with as many numbers there are in the range of data and set them all to zero -- does this go first? 
//3 loop through given array
//4) each time a number occurs, add it to an incremetor to the corresponding indecie for the results array as it corresponds to number line (e.g. 1 would be second, 2 would be third all the way through the range)
//5) return results array  
//6) edge cases? 
//7) unknown unknown 