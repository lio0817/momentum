//h2에 있는 id를 선택한다.//
const clock = document.querySelector("h2#clock");

//현재 시간이 "시:분:초"로 표시가 되도록 한다.//
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0"); // 시간,분,초가 한 자리 수일 경우 앞에 0을 붙여 두 자리 수로 만든다.//

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(getClock,100);
//코드를 몇초마다 반복할지를 정한다. 1초=1000//