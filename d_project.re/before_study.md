# 학습 내용 정리

## 1. 통신 프로토콜 및 에디터
### 1. http, https : 웹페이지 경로, 주소
### 2. vscode 
  - 플러그인
    - increment selection (넘버링 편하게)
    - live server
    - live server QR
    - px to rem
    - simple alignment (정렬)
    - vscode_random
    - material icon theme 
  - setting
    - wheel
    - tab
    - wrap
  - user sinppets : https://snippet-generator.app/
### 3. git 명령어
  - git add
  - git commit -m "간단한 메모"
  - git push
  - git pull
  - git status
### 4. md파일 사용방법
  - 확장자 : .md
  - 제목, 내용, list, 구분선(---), 줄바꿈, 코드입력(```)

  ---
  ## HTML
  ### 1. 경로 (절대경로, 상대경로)
  - 상대경로 : './', '../'
  - 절대경로 : '/', 'http(s)://', 'c:'
  ### 2. html 형식
  - inline 
    - inline
    - inline-block
  - block
  ### 3. class, id
  ### 4. 태그
  - 제목 : h1~h6
  - 내용 : p, pre, address ...
  - 목록 : ul, ol, dl, li, dt, dd
  - 이미지 : img
  - 앵커 : a
  - 표 : table
  - form
    - form
    - fieldset
    - legend
    - label
    - input
  - 그룹 : div, span
  - 강조 : strong, em, ins, del, mark
  - 기타 : i, b, small ...

  ---
  ## CSS
  ### 1. 선택자
  - type 
  - id, class, 
  - 자식 및 자손 속성, 형제 속성
  - nth
  ### 2. 크기
  - width, height
  - min-width, max-width
  ### 3. 단위
  - px, %
  - em, rem
  - vw, vh
  ### 4. 백그라운드
  - background-color
  - background-image
  - background-repeat, background-position
  ### 5. 폰트
  - font : face, family, size, weight, size, align
  - overflow
  - display : inline-block
  - text-indent
  - https://fonts.google.com/, https://noonnu.cc/font_page/736
  ### 6. 배치
  - margin, padding, border
  - position : static, fixed, relative, absolute
  - transform : translateX, translateY
  - float : left, right, clear
  - before/after : content
  ### 7. 변수
  ### 8. 반응형
  - media screen and (size) {}
  ### 9. psuedocode

  ---

  ## Javascript
  ### 1. 변수 (var)
  ### 2. 형타입 (숫자, 문자, 배열, 객체, 함수, undefined, null)
  - 객체 : {'key':'value'} 
  - 배열 : [a, b, c, d]
    - 첫번째 순서를 0으로 인식
  - 함수 : function(){ return X }
    - 선언식 : function Fn(){}
    - 표현식 : var Fn2 = function(){}
    - 즉시실행함수 : (function(){})
  ### 3. 연산자 
  - 계산 연산자 : +, -, *, /, %, +=, -=, *=, /=, --, ++
  - 비교 연산자 : <, >, <=, >=, ||, &&, ===, !, !==
  - 삼항 연산자 : (조건) ? 참일때 실행 : 거짓일때 실행;
  ### 4. 문법
  - 단항 조건문 : if(){} else if(){} else {}
  - 다항 조건문 : switch(){ case: ... break; ... }
  - 반복문 : for(최초; 조건비교; 증감){}

  ---

  ## Jquery
  ### 1. 기본 세팅
  - jquery 다운로드 및 import
  - 사용 위한 기본 설정 : (function($){ code })(jQuery);
  ### 2. 선택자
  - css와 기본은 같다. 다만 $('') 형태 사용
  ### 3. 메소드
  - 자손 : find(), children()
  - 형제 : next(), nextAll(), prev(), prevAll()
  - 부모 : parent(), parentsUntil()
  - 순서 : eq(), index()
  - 선택한 그 자체 : $(this)
    - 선택한 자체 이외의 형제 : siblings()
  - 삽입 : append(), prepend(), before(), after()
  - css 변경 : css()
  - 기타 : wrap(), text()
  - 추가적인 메소드
    - https://oscarotero.com/jquery/
    - https://jquery.com/

  ---
  ## 기타
  ### 1. Figma
  - frame
  - component
  - auto-layout
  - style
  - layer, export
