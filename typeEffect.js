//陣列
var texts = ["網頁設計師", "插畫家", "遊戲開發者"];
//打字速度
var speed = 1000;
//編號
var index = 0;
//字數
var count = 0;
// 要寫入文字的 ID 
var id = "type-box";
// 定義方法
function type(){
    var box = document.getElementById(id);
    box.innerHTML = texts[index];
}

// 當網頁載入完成時執行
document.addEventListener("DOMContentLoaded",type);