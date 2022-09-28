function encodeAndDecodeMessages() {
    let [encodeAndSendItBtnElement, decodeAndReadItBtnElement]
     = document.querySelectorAll('button');

    [messageTextareaElement, decodedMessageTextareaElement] 
    = document.querySelectorAll('textarea');

    function encodeDecodeMessage(message, action){
        let result = '';

        for (let i = 0; i < message.length; i++) {
            let currChar = message[i];
            let currCharAsciiCode = action === 'encode' 
            ? currChar.charCodeAt(0) + 1
            : currChar.charCodeAt(0) - 1;
            currChar = String.fromCharCode(currCharAsciiCode);
            result += currChar;
        }

        return result;
    }

    encodeAndSendItBtnElement.addEventListener('click', (e) => {
        let currMessage = messageTextareaElement.value;

        decodedMessageTextareaElement.value = encodeDecodeMessage(currMessage, 'encode');
        messageTextareaElement.value = '';
     });

    decodeAndReadItBtnElement.addEventListener('click', (e) => {
        let currMessage = decodedMessageTextareaElement.value;
        
        decodedMessageTextareaElement.value = encodeDecodeMessage(currMessage, 'decode');
    });
}