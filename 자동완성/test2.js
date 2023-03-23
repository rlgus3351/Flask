



// let s_json1 = new Object();
// let s_json2 = new Object();
// let s_json3 = new Object();
// let s_json4 = new Object();
// let s_json5 = new Object();
// let s_json6 = new Object();


// s_json1.name = "에브리씽 에브리웨어 올 앳 원스";
// s_json1.count = 1;

// s_jsonArray.push(s_json1);

// s_json2.name = "서치";
// s_json2.count = 1;
// s_jsonArray.push(s_json2);

// s_json3.name = "노스맨";
// s_json3.count = 1;
// s_jsonArray.push(s_json3);

// s_json4.name = "놉";
// s_json4.count = 1;
// s_jsonArray.push(s_json4);

// s_json5.name = "바빌론";
// s_json5.count = 1;
// s_jsonArray.push(s_json5);

// s_json6.name = "더 웨일";
// s_json6.count = 1;
// s_jsonArray.push(s_json6);

let title = ["에브리씽 에브리웨어 올 앳 원스",
"서치",
"노스맨",
"놉",
"바빌론",
"더 웨일",
"장화신은 고양이: 끝내주는 모험",
"헤어질 결심",
"너의 이름은",
"듄",
"메간",
"타이타닉",
"스마트폰을 떨어뜨렸을 뿐인데",
"엑시던트",
"탑건 매버릭",
"블랙폰",
"영웅",
"애프터썬",
"헬 독스",
"올빼미",
"범죄도시 2",
"히트",
"오늘 밤, 세계에서 이 사랑이 사라진다 해도",
"해리 포터와 마법사의 돌",
"더 베스트 오브 에너미즈",
"우리 집에 유령이 산다",
"루터 태양의 몰락",
"유령",
"존 윅",
"스트레이",
"TAR 타르",
"아바타 물의 길",
"9 나인",
"감각의 제국",
"사랑은 비를 타고",
"더 배트맨",
"더 메뉴",
"서부 전선 이상 없다",
"스즈메의 문단속",
"윈데르송 누니스 내 설교를 들어주소서",
"서치 2",
"살인의 추억",
"히든 피겨스",
"압꾸정",
"스탠 바이 미",
"스파이더맨 노 웨이 홈",
"인터스텔라",
"안녕, 나의 소울메이트",
"더 게임 체인저스",
"세레니티",
"어스",
"동감",
"매직 인 더 문라이트",
"비스트",
"반지의 제왕 반지 원정대",
"메인스트림",
"첫 키스에 반하다",
"3000년의 기다림",
"샤잠!",
"더 비지트",
"테넷",
"킹메이커",
"날씨의 아이",
"치히로 상",
"다음 소희",
"임금님의 사건수첩",
"스크림 4G",
"엣지 오브 투모로우",
"데시벨",
"컨택트",
"크리드",
"위대한 레보스키",
"크리드 3",
"이니셰린의 밴시",
"크리드 2",
"멜브룩스의 세계사",
"나이브스 아웃",
"어미",
"RRR 라이즈 로어 리볼트",
"인셉션",
"스네이크 아이즈 지.아이.조",
"밀리언 달러 베이비",
"슬픔의 삼각형",
"조커",
"엘비스",
"프라미싱 영 우먼",
"나이브스 아웃 글래스 어니언",
"육사오",
"샷건 웨딩",
"아바타",
"트루먼 쇼",
"초속 5센티미터",
"돈 워리 달링",
"내가 사는 피부",
"더 퀸",
"가재가 노래하는 곳"];

let s_jsonArray = new Array();
for(var i=0; i<title.length; i++){
    var test = new Object() ; 
    test.count = 1 ;
    test.name = title[i] ;
    s_jsonArray.push(test) ;
}

console.log(s_jsonArray);
// 검색 인풋 태그
const search_input = document.querySelector(".search_input");
// 자동완성 목록
const suggestions_pannel = document.querySelector(".suggestions_pannel");
//검색 버튼 
const search_btn = document.getElementById("search_btn");

// input 태그 이벤트 리스너 
search_input.addEventListener('keyup', function(){

    // 엔터키 입력 처리
    if (window.event.keyCode === 13) {
        // Cancel the default action, if needed
        // preventDefault() 를 사용해서 올바르지 않은 텍스트가 입력란에 입력되는것을 막습니다.
        window.event.preventDefault();
        // 검색어 버튼 클릭
        search_btn.click();
    }

    // suggestions_pannel 자동완성 패널 비우기
    suggestions_pannel.innerHTML='';
    // 입력된 검색어 변수 input
    let input = search_input.value;

    // filter() 각 요소를 시험할 함수
    // startsWith 메소드로 어떤 문자열이 다른 문자열로 시작하는지 확인 할 수 있습니다. 대소문자를 구분합니다.
    // suggestions 에는 현재검색어(input)가 s_jsonArray리스트의 name에 포함된 경우의 값들이 리스트로 반환됩니다.
    let suggestions = s_jsonArray.filter(function(exam){
        // console.log(exam.name, input);
        return exam.name.toLowerCase().startsWith(input);
    });
    // console.log('suggestions', suggestions);

    // suggestions 리스트 만큼 반복하여 자동완성될 태그를 만들어줍니다. 
    suggestions.forEach(function(suggested){
        let div = document.createElement('div');
        div.innerHTML = suggested.name;
        suggestions_pannel.appendChild(div);
        // 클릭처리 
        div.onclick= () =>{
            search_input.value = div.innerHTML; 
            suggestions_pannel.innerHTML='';
        }
    });
    if(input == ''){
        suggestions_pannel.innerHTML='';
    }
})


// 검색 처리
search_btn.onclick =() => {

    // 현재 검색어 : input_value
    let input_value =  search_input.value.trim()

    if(input_value.length == 0) {
        alert("검색어를 입력해주세요.")
    }else {
        // 현재까지 검색한 것 중 일치하는게 있는지 확인
        for (i=0; i < s_jsonArray.length; i++) {
            if(s_jsonArray[i].name == input_value) {
                s_jsonArray[i].count += 1;
                break;
            }
            // 마지막까지 일치하는 검색어를 찾지못하면 새로운 검색어로 추가
            if (i == s_jsonArray.length -1) {
                let s_json = new Object();
                s_json.name = input_value;
                s_json.count = 1;
                s_jsonArray.push(s_json)
            }
        }
    }
    search_input.value = "";
    suggestions_pannel.innerHTML='';
}
