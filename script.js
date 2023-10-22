document.addEventListener("DOMContentLoaded", function () {
    const copyButton = document.querySelector(".copy-button");
    const saveButton = document.querySelector(".save-button");
    const lockButton = document.querySelector(".lock-button");
    const codeElement = document.getElementById("code");
    const outputContainer = document.querySelector(".output-container");
    const outputElement = document.getElementById("output");
    const messageContainer = document.querySelector(".notification");
    const messageText = document.getElementById("message-text");

    copyButton.addEventListener("click", function () {
        const textArea = document.createElement("textarea");
        textArea.value = codeElement.innerText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        showMessage("Code copied to clipboard.");
    });

    saveButton.addEventListener("click", function () {
        showMessage("Code saved!");
    });

    lockButton.addEventListener("click", function () {
        codeElement.classList.toggle("locked");
        lockButton.textContent = codeElement.classList.contains("locked") ? "Unlock" : "Lock";
        showMessage(codeElement.classList.contains("locked") ? "Code locked." : "Code unlocked.");
    });

    codeElement.addEventListener("input", function () {
        outputContainer.style.display = "none";
    });

    outputContainer.addEventListener("click", function () {
        outputContainer.style.display = "none";
    });

    const runButton = document.querySelector(".run-button");
    runButton.addEventListener("click", function () {
        try {
            const code = codeElement.textContent;
            const result = eval(code);
            outputElement.textContent = result;
            outputContainer.style.display = "block";
        } catch (error) {
            outputElement.textContent = "Error: " + error;
            outputContainer.style.display = "block";
        }
    });

    function showMessage(message) {
        messageText.textContent = message;
        messageContainer.style.display = "flex";
        messageContainer.style.opacity = 1;

        setTimeout(function () {
            messageContainer.style.opacity = 0;
            setTimeout(function () {
                messageContainer.style.display = "none";
            }, 300);
        }, 2000);
    }
});