function autoLotto(){
    // 번호 추첨
    const lottoSize = 7;
    lotto = [];
    for (i = 0; i < lottoSize;) {
        ran = parseInt(Math.random() * 45 + 1);

        if (!lotto.includes(ran)){
            lotto.unshift(ran);
            ++i;
        }
    };

    // 보너스 숫자 빼고 정렬후 다시 추가
    bonus = lotto.pop();
    lotto.sort((a, b) => a - b);
    lotto.push(bonus);

    // 출력
    for (i = 0; i < lottoSize; ++i) {
            document.getElementById('lotto' + i).innerHTML = lotto[i];
        // innerHTML과 innerText의 차이점 : HTML은 태그를 추가 할 수 있고, Text는 태그를 추가 할 수 없다.
    
        // parent.appendChild(child) : 해당 요소에 자식 요소를 추가하는 메서드
        
    };
}