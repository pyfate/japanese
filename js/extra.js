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

function convertFurigana() {
    // 選擇所有帶有 class 'jp' 的 span
    const elements = document.querySelectorAll('.jp');

    elements.forEach(element => {
        // 提取內容
        let text = element.innerHTML;

        // 正則表達式查找 [A|B] 格式
        const regex = /\[([^\?]+)\?([^\]]+)\]/g;
        let matches;

        // 替換 [A|B] 格式為 <ruby> 標籤的結構
        while ((matches = regex.exec(text)) !== null) {
            const kanji = matches[1]; // 漢字部分
            const furigana = matches[2]; // 振假名部分
            
            // 構造 ruby 標籤結構
            const ruby = `<ruby>${kanji}<rp>(</rp><rt>${furigana}</rt><rp>)</rp></ruby>`;
            
            // 用 <ruby> 標籤替換 [A|B] 的部分
            text = text.replace(matches[0], ruby);
        }

        // 更新 HTML 內容
        element.innerHTML = text;
    });
}

// 當 DOM 加載完成後執行轉換
document.addEventListener('DOMContentLoaded', convertFurigana);