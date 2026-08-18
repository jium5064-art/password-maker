function makePassword() {
    let input = document.getElementById("passwordLength").value;
    let message = document.getElementById("message");
    let result = document.getElementById("result");

    message.textContent = "";
    result.textContent = "아직 생성되지 않았습니다.";

    if (input === "") {
        message.textContent = "비밀번호 길이를 입력하세요!";
        return;
    }

    // "3."은 3으로 처리
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

    let password = "";

    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * chars.length);
        password += chars[random];
    }

    result.textContent = password;
}
