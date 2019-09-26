//陣列
var texts = ["初學者", "插畫家", "遊戲開發者"];
//打字速度
var speed = 500;
//編號
var index = 0;
//字數
var count = 0;
// 要寫入文字的 ID 
var id = "type-box";
// 定義方法
function type(){
    var box = document.getElementById(id);

    // 變數 = 文字陣列[編號].切割(開始位置,切幾個);
    var slice =texts[index].slice(0,count++);

    // 盒子.擦入內容 = 切割完的文字;
    box.innerHTML = slice;

    // 設定重複時間(方法名稱 ,間隔時間 (毫秒))
    setTimeout(type,speed);

    // 如果字數大於目前文字的字數
    if (count > texts[index].length){
        count = 0;
        index++;
    }

    // 如果 編號 = 陣列數量
    if (index == texts.length){
        index = 0;
    }
}

// 當網頁載入完成時執行
document.addEventListener("DOMContentLoaded",type);