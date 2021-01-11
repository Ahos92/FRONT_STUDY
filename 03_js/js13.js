const p1 = document.getElementById("p1");

p1.onclick = p1_clicked;
function p1_clicked() {
    p1.innerText = "Good job!";
} 

const ta01 = document.getElementById("ta01");

// # addEventListener로 추가하는 이벤트들은 덮어쓰지않고 계속 추가된다.
const ta01_click_handler1 = () => {
    alert("Textarea를 클릭하셨습니다.");
};

const ta01_click_handler2 = () => {
    alert("Textarea를 클릭하셨습니다.2");
};
ta01.addEventListener("click", ta01_click_handler1);
ta01.addEventListener("click", ta01_click_handler2);

ta01.addEventListener("keyup", (e) => {
    console.log("변화가 있었습니다.", e);
});

ta01.addEventListener("resize", (e) => {
    console.log("resize", e);
});

// # 이벤트 삭제 (어떤 함수를 삭제할지 전달해줘야함)
ta01.removeEventListener("click", ta01_click_handler1);
ta01.removeEventListener("click", ta01_click_handler2);


/*

*/
const outter = document.getElementById("outter");
const inner = document.getElementById("inner");
const statusBar = document.getElementById("status-bar");

// # 이벤트영역이 겹칠 때의 이벤트 처리 현상
//  - 이벤트가 parent -> nested로 전파되도록 설정하는 것을 event Capturing이라고 한다.
//  - 이벤트가 nested -> parent로 전파되도록 설정하는 것을 event Bubbling이라고 한다.
//  세번째 인자 true => Capturing / false => Bubbling (default)
let click_cnt = 1;
outter.addEventListener("click", (e) => {
    statusBar.innerHTML += `<h3 style="color: green;">[${click_cnt++}] outterDiv clicked!</h3>`;
    e.stopPropagation();
}, true);

inner.addEventListener("click", (e) => {
    statusBar.innerHTML += `<h3 style="color: springgreen;">[${click_cnt++}] innerDiv clicked!</h3>`;
    // e.stopPropagation(); // 전파 안되게하는 메서드
}, true);


/* 
    안쪽의 이벤트를 클릭 하더라도 바깥 이벤트가 선택되는걸 이용
*/
const transport = document.getElementById("transports");

// transport.addEventListener("click", (e) => {
//     console.log(e.target.tagName);
// }, true);

transport.addEventListener("click", (e) => {
    if (e.target.tagName === "INPUT"){
        alert(`클릭하신 버튼은 ${e.target.value}`);
    }
});
