//complete twoArrays function
//return a string of yes or no 
//function accepts following parameters: Integer K, Integer Array A, Integer array B 

function twoArrays(k, a, b) {

//need to find if a version of A lines up with a version of B  such that they add up to K 
//need to loop through both versions of the arrays because just because they match at an iindex that could throw the whole thing off. so we need a way to get all the variations of the a loop and then send the b loop through that. 
//sorting them both gives us the best chance to see if the numbers compliment one another 

if (a[i] + b[i] === k){
    return 'yes'
} else {
    return 'no';
}
 
}