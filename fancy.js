var reversed = false, x = prompt ("Please give me input! " +
"Use ascci art to make a symbol:"); 

console.log("thank you for giving me " + x);

var array1 = ['a', 'b', 'c'];
fancy(array1);

function fancy(arr){
    var i = 0;
    console.log("=> seems to allow me to build a 'mini'" + 
    "function on the fly... cool. :)");
    arr.forEach(element => {
        console.log(i + " " + x + " " + element);
        i++;
    });
}