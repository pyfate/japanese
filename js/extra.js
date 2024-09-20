// 選取所有 <span> 元素
var spans = document.querySelectorAll('span.tts');

// 為每個 <span> 元素添加點擊事件
spans.forEach(function(span) {
    span.addEventListener('click', function() {
        // 取得被點擊的 <p> 內的文字
        var text = span.innerText;
        
        // 取得 lang 屬性
        var lang = span.getAttribute('lang');

        // 建立 SpeechSynthesisUtterance 物件
        var utterance = new SpeechSynthesisUtterance(text);
        
        // 設定語言
        utterance.lang = lang;

        // 使用 TTS 朗讀文字
        window.speechSynthesis.speak(utterance);
    });
});