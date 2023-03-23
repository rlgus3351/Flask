$(function() {
		
    // 리스트 생성
    var testList = new Array() ;
    

    for(var i=1; i<=2; i++){
        
        // 객체 생성
        var data = new Object() ;
        
        data.count = 1 ;
        data.name = "Tester #" + i ;
        // 리스트에 생성된 객체 삽입
        testList.push(data) ;
    }
    
    // String 형태로 변환
    var jsonData = JSON.stringify(testList) ;
    
    alert(jsonData) ;
    
    /*
        출력결과 : [{"number":1,"name":"Tester #1"},{"number":2,"name":"Tester #2"}]
    */
    
});