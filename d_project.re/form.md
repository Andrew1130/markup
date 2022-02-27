# form

1. form은 선언을 시작으로 영역을 잡는다.
2. data를 전송할 위치와, 자료 공개여부를 파악
3. 유사범위에 대한 영역을 선택

``` html
<form action="연결한 db관련 문서" method=" get | post "> 
  <fieldset>
    <legend>제목</legend>
  </fieldset>
</form>  
```

1. input(id) - label(for)
2. 속성값이 reset, submit, image .. <br />버튼의 역할이 아닌 것은 모두 label과 연결해서 사용
3. div, ul. ol. li, dl, dt, dd 등 다양한 요소들과 결합하여 사용
4. '<label><input ...></label>' -> 권장하지 않음
5. 'input'에 들어가는 다양한 속성
- id, type, value, name, placeholder
  - type 
    - text, password, search, email, url, num, range, tel
    - checkbox, radio, submit, reset, button
6. textarea, select, button


---
## Jquery - form

1. $(선택자)
2. .val()
3. 이벤트 예시
- 선택자.on('keydown', function(){})
- 선택자.on('keyup', function(e){ <br />
  e.preventDefault(); <br />
  e.originalEvent.keycode <br />
})