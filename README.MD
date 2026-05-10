# m161awm2.github.io

> **Linux Terminal Concept Portfolio Website** 💻

GitHub Pages를 활용하여 구축한 **리눅스 터미널 컨셉의 인터랙티브 자기소개 웹사이트**입니다.  
사용자가 실제 터미널 환경처럼 명령어를 직접 입력하며 개발자의 프로필, 기술 스택, 프로젝트 및 연락처 정보를 탐색할 수 있도록 설계되었습니다.

🌐 **배포 주소:** [https://linux.m161awm.kr](https://linux.m161awm.kr)

---

## 📌 프로젝트 소개

이 프로젝트는 단순한 정적 텍스트 기반의 자기소개 페이지를 넘어, **개발자다운 개성과 흥미 요소**를 더한 포트폴리오입니다.
검은색 배경, 초록색 Monospace 폰트, ASCII Art 등을 적용하여 레트로한 리눅스 콘솔의 감성을 웹 브라우저에 그대로 구현했습니다.

방문자는 마우스 클릭 대신 `ls`, `cat`, `help`와 같은 친숙한 CLI(Command Line Interface) 명령어를 타이핑하여 사이트 곳곳에 숨겨진 정보를 찾아내는 재미를 느낄 수 있습니다.

---

## 🚀 주요 기능 (Commands)

터미널 프롬프트에서 아래 명령어들을 입력해 보세요.

| 명령어 | 설명 |
| :--- | :--- |
| `help` | 사용 가능한 전체 명령어 목록을 출력합니다. |
| `ls` | 현재 디렉토리에서 열람 가능한 파일 목록을 확인합니다. |
| `pwd` | 현재 작업 중인 경로를 출력합니다. |
| `cat about.txt` | 개발자 자기소개 및 프로필을 확인합니다. |
| `cat skills.txt` | 보유하고 있는 기술 스택 목록을 출력합니다. |
| `cat projects.txt` | 진행한 프로젝트 목록과 상세 내용을 확인합니다. |
| `cat contact.txt` | 이메일, GitHub 등 연락처 정보를 출력합니다. |
| `clear` | 터미널 화면을 깨끗하게 지웁니다. |
| `echo [문자열]` | 입력한 문자열을 화면에 그대로 다시 출력합니다. |
| `eval` | ⚠️ **경고:** 이발(?) 시켜버립니다. 가급적 사용을 권장하지 않습니다. |

> 💡 **Tip:** 그 외에도 사이트 곳곳에 숨겨진 **이스터에그 명령어**가 존재합니다. 직접 찾아보세요!

---

## 🛠 기술 스택 (Tech Stack)

### Frontend
*   **HTML5** / **CSS3** / **Vanilla JavaScript** (프레임워크 없이 순수 JS로 구현)

### Deploy
*   **GitHub Pages** (정적 웹 호스팅)

### Concept & Style
*   **Linux Terminal UI** / **Command Line Interface (CLI)**
*   **ASCII Art**
*   **Monospace Font** (터미널 전용 폰트 느낌)
*   **Retro Console Design** (Black Background & Terminal Green Text)

---

## 📂 폴더 구조

```text
m161awm2.github.io/
├── index.html        # 메인 HTML 및 ASCII Art 렌더링
├── CNAME             # 커스텀 도메인 설정 파일
├── README.MD         # 프로젝트 설명 문서
└── static/
    ├── style.css     # 터미널 스타일링 (배경, 폰트, 색상)
    ├── main.js       # 명령어 파싱 및 DOM 조작 로직
    └── icon.ico      # 파비콘
```

---

## ⚙️ 핵심 구현 내용

### 1. 터미널 UI 구현
`index.html`에서 초기 로딩 시 환영 메시지와 ASCII Art를 렌더링합니다. 사용자의 입력을 받을 수 있는 `input` 필드를 터미널 프롬프트처럼 디자인했습니다.

### 2. 명령어 파싱 및 처리
`static/main.js`에서 사용자가 입력한 텍스트를 감지(Enter 키 이벤트)하고, 조건문(if/switch)을 통해 사전에 정의된 명령어인지 판별합니다.
```javascript
// 명령어 처리 예시
if (input === "help") {
  systemMsg = "command list : cat, ls, pwd, clear, echo, eval";
}
```

### 3. 레트로 스타일링
`static/style.css`를 통해 웹 페이지 전체를 터미널처럼 꾸몄습니다.
```css
body {
  background-color: black;
  color: #00FF00; /* 터미널 그린 */
  font-family: 'Courier New', Courier, monospace;
}
```

---

## 💻 로컬 실행 방법

이 프로젝트는 별도의 백엔드 서버나 빌드 과정이 필요 없는 순수 정적 웹사이트입니다.

1. **레포지토리 클론**
   ```bash
   git clone https://github.com/m161awm2/m161awm2.github.io.git
   ```
2. **디렉토리 이동**
   ```bash
   cd m161awm2.github.io
   ```
3. **실행**
   *   `index.html` 파일을 웹 브라우저(Chrome, Edge 등)로 직접 엽니다.
   *   또는 VS Code의 **Live Server** 확장을 사용하여 로컬 서버 환경에서 실행합니다.

---

## 📈 향후 추가 예정 기능 (TODO)

*   [ ] `cat projects.txt` 내용 구체화 및 실제 프로젝트 링크 연결
*   [ ] 방향키(↑, ↓)를 이용한 **명령어 히스토리(History)** 기능
*   [ ] 실제 터미널처럼 이전 입력과 결과가 화면에 누적되어 스크롤되는 기능
*   [ ] 모바일 환경에서의 가독성 및 가상 키보드 입력 사용성 개선 (반응형 UI)
*   [ ] 추가적인 숨겨진 이스터에그 명령어 도입

---

## 👨‍💻 개발자 정보

단순히 웹 기술을 사용하는 것을 넘어, 인프라와 개발 환경에 대한 관심을 리눅스 터미널이라는 컨셉으로 녹여낸 포트폴리오입니다.

*   **GitHub:** [@m161awm2](https://github.com/m161awm2)
*   **Blog:** [m161awm.kr](https://m161awm.kr)
*   **Interest:** Cloud, Infrastructure, DevOps, Security, Backend

---
*License: 개인 포트폴리오 프로젝트입니다.*
