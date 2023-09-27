//명언들을 리스트에 넣는다.//
const quotes = [{
    quotes: "삶이 있는 한 희망은 있다.",
    author: "키케로"
},{
    quotes: "산다는 것 그것은 치열한 전투이다.",
    author: "로망로랑"
},{
    quotes: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
    author: "사무엘 존슨"
},{
    quotes: "언제나 현재에 집중할 수 있다면 행복할것이다.",
    author: "파울로 코엘료"
},{
    quotes: "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해.",
    author: "찰리 채플린"
},{
    quotes: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
    author: "앨버트 하버드"
},{
    quotes: "신은 용기있는자를 결코 버리지 않는다.",
    author: "켄러"
},{
    quotes: "피할수 없으면 즐겨라.",
    author: "로버트 엘리엇"
},{
    quotes: "만약 우리가 할 수 있는 일을 모두 한다면 우리들은 우리 자신에게 깜짝 놀랄 것이다.",
    author: "에디슨"
},{
    quotes: "눈물과 더불어 빵을 먹어 보지 않은 자는 인생의 참다운 맛을 모른다.",
    author: "괴테"
}];

const quote = document.querySelector("#quote span:first-child") //명언을 id가 quote인 span의 첫번째를 지정한다.//
const author = document.querySelector ("#quote span:last-child")//명언을 id가 quote인 span의 마지막을 지정한다.//

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];//명언들을 랜덤하게 지정해준다.//

quote.innerText = todaysQuotes.quotes;  //명언과 작가를 표시한다.//
author.innerText = todaysQuotes.author;