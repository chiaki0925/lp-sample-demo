document.addEventListener("DOMContentLoaded", () => {
    const summaries = document.querySelectorAll(".qa__item summary");
    summaries.forEach(summary => {
        const checkLine = () => {
            // 要素内のテキスト高さを判定
            const lineHeight = parseFloat(getComputedStyle(summary).lineHeight);
            const lines = Math.round(summary.scrollHeight / lineHeight);
            if (lines > 1) {
                summary.classList.add("is-multiline");
            } else {
                summary.classList.remove("is-multiline");
            }
        };
        checkLine();
        // ウィンドウ幅で改行が変わるのでリサイズでも再判定
        window.addEventListener("resize", checkLine);
    });
});
