# m161awm2.github.io

> Linux Terminal Concept Portfolio Website

GitHub Pages를 이용해 만든 터미널 스타일 자기소개 웹사이트입니다.

사용자가 실제 리눅스 터미널을 사용하는 것처럼 명령어를 입력하면 자기소개, 기술 스택, 프로젝트, 연락처 등을 확인할 수 있습니다.

## 배포 주소

```text
https://m161awm2.github.io
```

## 프로젝트 소개

이 프로젝트는 단순한 자기소개 페이지가 아니라, 터미널 UI를 웹에서 구현한 개인 포트폴리오입니다.

검은 배경, 초록색 monospace 글씨, ASCII Art, 명령어 입력 방식 등을 사용하여 리눅스 터미널 느낌을 살렸습니다.

사용자는 `help`, `ls`, `cat`, `pwd` 같은 명령어를 입력하면서 사이트의 정보를 탐색할 수 있습니다.

## 주요 기능

- `help` : 사용 가능한 명령어 목록 출력
- `ls` : 확인 가능한 파일 목록 출력
- `pwd` : 현재 경로 출력
- `cat about.txt` : 자기소개 출력
- `cat skills.txt` : 기술 스택 출력
- `cat projects.txt` : 프로젝트 목록 출력
- `cat contact.txt` : 연락처 출력
- `clear` : 터미널 화면 초기화
- 그외 이스터에그
## 기술 스택

- Frontend
  - HTML
  - CSS
  - JavaScript

- Deploy
  - GitHub Pages

- Concept
  - Linux Terminal UI
  - Command Line Interface
  - ASCII Art

- Style
  - Monospace Font
  - Black Background
  - Terminal Green Text
  - Retro Console Design

## 폴더 구조

```text
m161awm2.github.io/
├── index.html
└── static/
    ├── style.css
    ├── main.js
    └── icon.ico
    
```

## 구현 내용

### 1. 터미널 UI

`index.html`에서 ASCII Art와 기본 터미널 문구를 보여줍니다.

사용자는 입력창에 명령어를 입력하고, JavaScript가 해당 명령어에 맞는 결과를 출력합니다.

### 2. 명령어 처리

`static/main.js`에서 입력값을 확인한 뒤 조건문으로 명령어를 처리합니다.

```js
if (input === "help") {
  systemMsg = "command list : cat, ls, pwd, clear, echo";
}
```

### 3. 스타일링

`static/style.css`에서 전체 배경을 검은색으로 설정하고, 글씨는 초록색 계열로 지정하여 터미널 느낌을 구현했습니다.

```css
body {
  background: black;
  color: white;
  font-family: monospace;
}
```

## 실행 방법

이 프로젝트는 별도의 서버가 필요 없는 정적 웹사이트입니다.

### 1. 레포지토리 클론

```bash
git clone https://github.com/m161awm2/m161awm2.github.io.git
```

### 2. 폴더 이동

```bash
cd m161awm2.github.io
```

### 3. 실행

`index.html` 파일을 브라우저로 열면 됩니다.

또는 VS Code의 Live Server 확장을 사용해 실행할 수 있습니다.

## 앞으로 추가할 기능

- `echo` 명령어 기능 개선
- `cat projects.txt` 내용 보완
- 프로젝트 링크 추가
- 명령어 히스토리 기능
- 방향키로 이전 명령어 불러오기
- 실제 터미널처럼 입력 결과 누적 출력
- 모바일 반응형 개선
- 숨겨진 이스터에그 명령어 추가

## 프로젝트 목표

이 프로젝트의 목표는 평범한 자기소개 페이지가 아니라, 개발자다운 개성을 보여주는 포트폴리오를 만드는 것입니다.

단순히 HTML, CSS, JavaScript를 사용하는 것에서 끝나지 않고, 리눅스 명령어와 터미널 환경을 웹으로 표현하면서 인프라와 개발에 대한 관심을 보여주는 것을 목표로 했습니다.

## 개발자

- GitHub: m161awm2
- Blog: Velog
- Interest: Cloud, Infrastructure, DevOps, Security, Backend

## License

개인 포트폴리오 프로젝트입니다.