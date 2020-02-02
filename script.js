var a = 'b'.charCodeAt(0); 
for(var i = 0; i < a.length; i++){
    a++;
}
console.log(String.fromCharCode(a));