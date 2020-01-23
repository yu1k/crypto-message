//文字をcharからJISに変更して文字列にし、ASCIIコードの次の文字をインクリメントしてコンソールに出力するコード
var a = 'a'.charCodeAt(0); 
for(var i = 0; i < a.length; i++){
    a++;
}
console.log(String.fromCharCode(a));
