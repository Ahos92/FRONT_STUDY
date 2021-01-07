const a = 10;


const person = {
    name: '길동',
    age: 123,
    kor: 90,
    eng: 80,
    math: 70,
    total: function(){
        return this.kor + this.eng + this.math;
    },
    get_avg: function() { //Object 내부에 함수 선언 방법
        return this.total() / 3;
    }
};