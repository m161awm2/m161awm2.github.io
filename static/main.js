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
    }else if(input == "cat skills.txt"){
        systemMsg=`<br>Cloud & Infrastructure: AWS LINUX DOCKER NGINX<br>Languages & Tools: FLASK SQL GITHUB_ACTIONS JS TS NESTJS<br>아직 배울게 많지만 추후 우선순위로 IaC 도구와 k8s를 배울 예정입니다!<br>`
    }else if(input == "cat contact.txt"){
        systemMsg=`Github:<a href="https://github.com/m161awm2" target="_blank">깃허브(클릭 이동)</a><br>blog:<a href="https://velog.io/@m161awm/posts">벨로그(클릭 이동)</a>`
    }else if(input == "cat projects.txt"){
        systemMsg=`NestCal : <a href="http://http://3.105.80.123:3000>이동하기</a><br>
        이 프로젝트도 반쯤 유기한 상태입니다, 솔직히 지금은 그렇게 많은 프로젝트를 만들진 않을 계획입니다 아직 배울 단계고.. 조금만 기다려주세요!`
    }
    else if (input === "cat about.txt") {
    fetch('./data/data.json')
        .then(response => response.json())
        .then(data => {

            document.getElementById("terminalList").innerHTML += `
m161awm@localhost:~$${input}
<div>${data[0].title}</div>
<div>${data[0].content}</div>
`;

        });

    document.getElementById("commandInput").value = "";
    return;
}
    else{
        systemMsg = `command not found: ${input}`
    }
    document.getElementById("terminalList").innerHTML += `
m161awm@localhost:~$${input}
<div>${systemMsg}</div>
`;
document.getElementById('commandInput').value = "";
});
