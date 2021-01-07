function myfunction01(a, b) {
    return a > b ? '왼쪽이 더 큽니다.' :  '오른쪽이 더 큽니다.';
}

console.log(myfunction01(10, 15));

/*
    나누기 결과를 정수로 얻는법
        - Math.round(), parseInt() ...
*/
function appleBasket(numOfApple, basketsize) {
    return numOfApple % basketsize == 0 ? 
            parseInt(numOfApple / basketsize) 
          : parseInt(numOfApple / basketsize)  +1; 
}

console.log(appleBasket(123, 10) + '개');



/*
    함수를 변수에 담기 가능
        - 담으면 함수명으로는 사용 불가
*/
let rabbit = function consoleRabbit(){
    console.log(' /)/)');
    console.log('(  ..)');
    console.log('(   >♡');
}

// consoleRabbit();
/* 
    함수에 ()를 붙이면 실행, 
        ()를 붙이지 않으면 값으로써 활용
*/
console.log(rabbit);
rabbit();

let anotherVar = rabbit;

rabbit();
anotherVar();



// 매개변수로 함수도 전달가능
function myfunction02(f) {
    return f(5, 10);
}

console.log(myfunction02(myfunction01));
console.log(myfunction02(appleBasket));