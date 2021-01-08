/* 
    base
*/
const base_list = document.getElementById('base');
const array1 = ['마이쮸', '새콤달콤', '홀스', '말랑카우'];

// innerHTML 웹페이지에 적용
for (i = 0; i < array1.length; ++i) {
    // base_list.innerHTML += '<li>' + ${array1[i]} + '</li>';
    base_list.innerHTML += `<li>${array1[i]}</li>`; // JavaScript String format
};



/* 
    JavaScript의 for...in은 object타입에 사용
*/
const forin_list = document.getElementById('for-in');
const obj1 = {
    name: '프링글스',
    prcie: 2500
};

// JAVA에서 Map을 KeySet()으로 꺼내는 것과 유사함
// obj1[property] -value 값
for (property in obj1){
    forin_list.innerHTML += `<li>${property} : ${obj1[property]}</li>`;
    console.log(`${property} : ${obj1[property]}`);
};

for (candy in array1) {
    console.log(`${candy} : ${array1[candy]}`);
    forin_list.innerHTML += `<li><b>[${candy}]</b> : ${array1[candy]}</li>`;
}


/*
    값을 가져옴
        - iterable 객체만 for ... of를 사용할 수 있다.
*/
for (candy of array1) {
    document.getElementById('for-of').innerHTML += `<li>${candy}</li>`;
}