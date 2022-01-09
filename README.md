## 실행방법

```
npm install
npm run dev
```

## 사용한 기술

- 타입스크립트
    - 변수와 함수의 인수 및 반환 데이터 등에 정적 타입을 지정하기 때문에 런타임에서 오는 것보다 빠른 에러발견을 해서 해결할 수 있다는 장점이 있습니다.
    - 코드량이 많아지는 프로젝트에서 유지보수성을 높일 수 있어 협업에서 유용하기 때문에 선택했습니다.
- Next.js
    - React의 프레임 워크로, 서버로부터 데이터를 받아오기 때문에 렌더링이 빠르다는 장점이 있어 선택했습니다.
- emotion Styled
    - component로 만들어서 재사용할 수 있다는 장점과, 자바스크립트에서 쓰이는 상수, props 등을 공유할 수 있다는 장점이 있어 선택했습니다.
- 린팅/포매팅 셋업
    - [titicacadev/eslint-config-triple](https://github.com/titicacadev/eslint-config-triple)

## 구현내용

- 반응형 레이아웃은 고려하지 않아, 최소 화면 폭을 1200px로 고정
- 임의의 작업 브랜치를 만들고, 커밋을 진행

## 화면
![화면](https://github.com/kimhan0421/triple_task/blob/feature/animation/public/images/img-home.gif)

### 영역별 등장 애니메이션

- 좌측 이미지, 지표 문구, 수상 내역 순으로 표시
- 살짝 위로 떠오르는 듯한 애니메이션과 투명도를 조절하는 애니메이션을 적용
- 등장 애니메이션의 duration은 700ms
- 애니메이션 사이 간격은 100ms

### 숫자가 올라가는 애니메이션

- 각 숫자는 0부터 시작
- 세 숫자 모두 2초 동안 증가하고, 동시에 끝남
- 증가 속도가 느려지는 효과 구현
- React와 DOM API만을 이용한 구현
