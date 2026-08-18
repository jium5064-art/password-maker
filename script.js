let realPassword = "";

function makePassword() {
    let input = document.getElementById("passwordLength").value;
    let message = document.getElementById("message");
    let result = document.getElementById("result");

    message.textContent = "";
    result.textContent = "●●●●●●";
    realPassword = "";

    if (input === "") {
        message.textContent = "비밀번호 길이를 입력하세요!";
        return;
    }

    if (input.endsWith(".")) {
        input = input.slice(0, -1);
    }

    let length = Number(input);

    if (isNaN(length)) {
        message.textContent = "숫자를 입력하세요!";
        return;
    }

    if (!Number.isInteger(length)) {
        message.textContent = "소수는 사용할 수 없습니다!";
        return;
    }

    if (length < 1) {
        message.textContent = "1 이상의 숫자를 입력하세요!";
        return;
    }

    if (length > 100) {
        message.textContent = "최대 100자리까지 만들 수 있습니다!";
        return;
    }

    let chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "abcdefghijklmnopqrstuvwxyz" +
        "0123456789" +
        "!@#$%^&*";

    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * chars.length);
        realPassword += chars[random];
    }

    result.textContent = "●".repeat(length);
}

async function copyPassword() {
    let message = document.getElementById("message");

    if (realPassword === "") {
        message.textContent = "먼저 비밀번호를 만들어 주세요!";
        return;
    }

    try {
        await navigator.clipboard.writeText(realPassword);
        message.textContent = "✅ 복사 완료!";
    } catch (error) {
        message.textContent = "❌ 복사하지 못했습니다.";
    }
}

// 화면의 ●●●는 일반 복사(Ctrl+C)로 복사되지 않게 함
// 복사는 오직 📋 복사 버튼을 통해서만 가능
document.addEventListener("copy", function(event) {
    const result = document.getElementById("result");
    const selection = window.getSelection();

    if (result && selection && result.contains(selection.anchorNode)) {
        event.preventDefault();
    }
});
