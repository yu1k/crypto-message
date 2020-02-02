function message(){
    var input_message = document.getElementById("input_message").value;
    var input_message = input_message.charCodeAt(0); 
    for(var i = 0; i < 1; i++){
        input_message++;
    }
    input_message = "暗号化した結果は「" + String.fromCharCode(input_message) + "」です。";
    document.getElementById("output_message").innerHTML = input_message;
    /***  テスト用  ***/
    /*
    var a = 'a'.charCodeAt(0); 
    for(var i = 0; i < 1; i++){
        a++;
    }
    console.log(String.fromCharCode(a));*/
}

function main() {
    message();
}