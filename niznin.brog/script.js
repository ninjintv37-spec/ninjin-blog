
// 今どこまで進んでいるかを記録
let progress = localStorage.getItem("progress");

if (progress === null) {
    localStorage.setItem("progress", "start");
}

if(localStorage.getItem("progress")=="blog"){

document.getElementById("password").innerHTML=`

<hr>

<h2>ここまで来るとは思いませんでした。</h2>

<p>72113</p>

`;

}
function checkPassword(){

    const code = document.getElementById("code").value;

    if(code=="72113"){

        document.getElementById("message").innerHTML="みつけて";

        localStorage.setItem("chapter1","clear");

    }else{

        document.getElementById("message").innerHTML="ありがとうございます！";

    }

}
const carrot = document.getElementById("carrotLink");

if (carrot && localStorage.getItem("chapter1") === "clear") {

    carrot.href = "chapter2.html";

    carrot.title = "クリック";

    carrot.style.cursor = "pointer";

}