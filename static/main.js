document.getElementById("input_line").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const input = document.getElementById("commandInput").value;    
    const sudoMsg = "sudo: you don't have permission to do that";
    let systemMsg = "";
    if(input === "help"){ 
        systemMsg = "command list : cat, ls, pwd, clear, echo, eval";
    }
    else if(input === "cat"){
        systemMsg = "cat: missing file operand\nTry 'cat --help' for more information.";
    }
    else if(input === "cat --help"){
        systemMsg=`Usage: cat [OPTION]... [FILE]...<br>
        Concatenate FILE(s) to standard output.<br><br>

        Examples:<br>
        cat about.txt       자기소개 파일 출력<br>
        cat skills.txt      기술 스택 파일 출력<br>
        cat projects.txt    프로젝트 목록 출력<br>
        cat contact.txt     연락처 출력<br>
            <br>
Options:<br>
  --help              display this help and exit`;
    }
    else if(input === "ls"){
        systemMsg="about.txt  skills.txt  projects.txt  contact.txt";
    }
    else if(input === "pwd"){
        systemMsg="/home/m161awm";
    }
    else if(input === "clear"){
        systemMsg="";
        document.getElementById("terminalList").innerText = "";
    }
    else if(input.startsWith("echo ")){
        systemMsg=input.slice(5);
    }
    else if(input === "echo"){
        systemMsg="";
        }
    else if(input.startsWith("eval ")){
        eval(input.slice(5));
    }
    else if(input === "eval"){
        systemMsg = "";
    }
    else if(input.startsWith("sudo ")){
        systemMsg=sudoMsg;
    }
    else if(input === "sudo"){
        systemMsg=sudoMsg;
    }
    else if(input === "rm -rf /"){
        systemMsg="Nice try! :)"
    }
    else if(input === "sudo rm -rf /"){
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1";
        systemMsg = "RICK ROLLED!"
    }
    else if(input === "cat about.txt"){
        systemMsg = `
<div>
    <p>
        <b>세명컴고 1학년 2반, 보안과의 심장이 될 구본무입니다!</b>
    </p>
    <p>
        MBTI : INTJ
        싫어하는 MBTI : <b>ESFP</b>

        Detail : <a href="https://m161awm.kr>m161awm.kr</a>
    </p>
    <p>
        2년 전까지만 해도 일반적인 개발에 관심이 많았었습니다. <br>
        하지만 중학교 1학년 때 등장한 <b>ChatGPT</b>와 <b>Gemini(Bard)</b> 같은 LLM의 발전 속도에 큰 당황을 느꼈습니다. <br>
        결국 개발의 흐름이 AI로 넘어가는 것을 보고 새로운 길을 고민하게 되었죠.
    </p>

    <p>
        처음에는 보안을 생각했지만, 뛰어난 사람들이 너무 많았고 문제 풀이의 스트레스도 컸었습니다. <br>
        그러다 어쩌다 찾게 된 <b>클라우드 인프라</b>는 확실한 <b style="color=red;">터닝포인트</b>가 되었죠! 이 부분은 정말 할 말이 많지만 아끼겠습니다!
    </p>

    <p>
        아직 배우는 중이지만, 이 길에 대한 확신이 있습니다. <br>
        나중에 이 이야기를 더 자세히 풀 수 있는 기회가 있으면 좋겠습니다.
    </p>
</div>
`;
    }else if(input == "cat skills.txt"){
        systemMsg=`<br>Cloud & Infrastructure: AWS LINUX DOCKER NGINX<br>Languages & Tools: FLASK SQL GITHUB_ACTIONS JS TS NESTJS<br>아직 배울게 많지만 추후 우선순위로 IaC 도구와 k8s를 배울 예정입니다!<br>`
    }else if(input == "cat contact.txt"){
        systemMsg=`Github:<a href="https://github.com/m161awm2" target="_blank">깃허브(클릭 이동)</a><br>blog:<a href="https://velog.io/@m161awm/posts">벨로그(클릭 이동)</a>`
    }else if(input == "cat projects.txt"){
        systemMsg=`NestCal : <a href="http://http://3.105.80.123:3000>이동하기</a><br>
        이 프로젝트도 반쯤 유기한 상태입니다, 솔직히 지금은 그렇게 많은 프로젝트를 만들진 않을 계획입니다 아직 배울 단계고.. 조금만 기다려주세요!`
    }
    else{
        systemMsg = `command not found: ${input}`
    }
    document.getElementById("terminalList").innerHTML += `m161awm@localhost:~$${input}
    <div>${systemMsg}</div>
    `; 

    document.getElementById("commandInput").value = "";
});
