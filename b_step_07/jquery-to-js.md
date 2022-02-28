# jquery에서 javascript로 변환하기 위한 기초내용
## Jquery에서 변환하기 위한 간단한 개념
### 1. ES6 ~ ESNext : prepros 이용하여 변환
### 2. 변수 선언
- es5 기준 : var
- es6 : const, let
  - prepros를 쓰면 es5 ver로 변환되므로 구버전 호환문제의 걱정 없이 자유롭게 사용 가능하다고 한다.
### 3. 선택자
- jquery : $('#box')
- javascript
  - document.getElementById('box');
  - document.querySelector('#box');
### 4. 속성
- jquery : attr()
- javascript : getAttribute(), setAttribute()
### 5. class 처리
- jquery : addClass, removeClass, toggle
- javascript 
  - classList.add
  - classList.remove
  - classList.toggle
### 6. animation
- jquery : animate
- javascript : setInterval(), clearInterval()
### 7. 순서확인, 할당
-  : index(), eq()
-  : index, at()
### 8. 탬플릿 처리(보간법)
- jquery : '문자' + 변수 + '문자'
- javascript : `${}`
### 9. 외부파일 불러오기
- jquery : $.ajax()
- javascript : XMLHttpRequest, fetch...
### 10. 이벤트처리(클릭이벤트)
- jquery : 선택자 기준에서 처리되는 형태가 자동으로 전체를 순환
- javascript : 선택자 기준으로 이벤트를 모두 수행하도록 수동으로 순환명령을 주어야 한다.

---

