const elements = [
    { name: "氫", symbol: "H", position: "1-1", description: "氫是宇宙中含量最多的元素，也是最輕的元素。" },
    { name: "氦", symbol: "He", position: "1-18", description: "氦是第二輕的元素，常用於填充氣球和飛艇。" },
    { name: "鋰", symbol: "Li", position: "2-1", description: "鋰是一種輕金屬，常用於製造電池。" },
    { name: "鈹", symbol: "Be", position: "2-2", description: "鈹是一種輕金屬，具有高熔點和良好的導熱性。" },
    { name: "硼", symbol: "B", position: "2-13", description: "硼是一種非金屬元素，常用於製造玻璃和陶瓷。" },
    { name: "碳", symbol: "C", position: "2-14", description: "碳是生命的基礎元素，存在於所有有機物中。" },
    { name: "氮", symbol: "N", position: "2-15", description: "氮是大氣中含量最多的氣體，常用於製造肥料。" },
    { name: "氧", symbol: "O", position: "2-16", description: "氧是生命必需的氣體，支持燃燒和呼吸。" },
    { name: "氟", symbol: "F", position: "2-17", description: "氟是最活潑的非金屬元素，常用於製造牙膏和殺蟲劑。" },
    { name: "氖", symbol: "Ne", position: "2-18", description: "氖是一種惰性氣體，常用於霓虹燈。" },
    { name: "鈉", symbol: "Na", position: "3-1", description: "鈉是一種活潑金屬，常用於製造食鹽和肥皂。" },
    { name: "鎂", symbol: "Mg", position: "3-2", description: "鎂是一種輕金屬，常用於製造合金和煙火。" },
    { name: "鋁", symbol: "Al", position: "3-13", description: "鋁是一種輕金屬，具有良好的導電性和耐腐蝕性。" },
    { name: "硅", symbol: "Si", position: "3-14", description: "硅是地殼中含量第二多的元素，常用於製造半導體和玻璃。" },
    { name: "磷", symbol: "P", position: "3-15", description: "磷是一種非金屬元素，常用於製造肥料和火柴。" },
    { name: "硫", symbol: "S", position: "3-16", description: "硫是一種非金屬元素，常用於製造硫酸和火藥。" },
    { name: "氯", symbol: "Cl", position: "3-17", description: "氯是一種有毒氣體，常用於消毒和製造塑料。" },
    { name: "氬", symbol: "Ar", position: "3-18", description: "氬是一種惰性氣體，常用於焊接和照明。" },
    { name: "鉀", symbol: "K", position: "4-1", description: "鉀是一種活潑金屬，常用於製造肥料和肥皂。" },
    { name: "鈣", symbol: "Ca", position: "4-2", description: "鈣是一種金屬元素，常用於製造水泥和骨骼。" },
    { name: "鈧", symbol: "Sc", position: "4-3", description: "鈧是一種稀土金屬，常用於製造高強度合金。" },
    { name: "鈦", symbol: "Ti", position: "4-4", description: "鈦是一種輕金屬，具有良好的耐腐蝕性和高強度。" },
    { name: "釩", symbol: "V", position: "4-5", description: "釩是一種過渡金屬，常用於製造高強度鋼材。" },
    { name: "鉻", symbol: "Cr", position: "4-6", description: "鉻是一種過渡金屬，常用於製造不鏽鋼和鍍鉻製品。" },
    { name: "錳", symbol: "Mn", position: "4-7", description: "錳是一種過渡金屬，常用於製造鋼材和電池。" },
    { name: "鐵", symbol: "Fe", position: "4-8", description: "鐵是一種過渡金屬，是地殼中含量最多的金屬元素。" },
    { name: "鈷", symbol: "Co", position: "4-9", description: "鈷是一種過渡金屬，常用於製造磁鐵和電池。" },
    { name: "鎳", symbol: "Ni", position: "4-10", description: "鎳是一種過渡金屬，常用於製造不鏽鋼和硬幣。" },
    { name: "銅", symbol: "Cu", position: "4-11", description: "銅是一種過渡金屬，具有良好的導電性和導熱性。" },
    { name: "鋅", symbol: "Zn", position: "4-12", description: "鋅是一種過渡金屬，常用於製造鍍鋅鋼材和電池。" }
];

let currentElement;

// 骰子功能：隨機選擇一個元素
function rollDice() {
    const randomIndex = Math.floor(Math.random() * elements.length);
    currentElement = elements[randomIndex];
    document.getElementById('current-element').innerText = `當前元素：${currentElement.symbol} (${currentElement.name})`;
}

// 點擊格子放置元素
document.querySelectorAll('#periodic-table td').forEach(cell => {
    cell.addEventListener('click', () => {
        if (!currentElement) {
            alert("請先骰出一個元素！");
            return;
        }
        if (cell.getAttribute('data-position') === currentElement.position) {
            cell.innerText = `${currentElement.symbol}\n${currentElement.name}`;
            cell.style.backgroundColor = '#aaffaa';
            showKnowledge(currentElement);
            currentElement = null;
            document.getElementById('current-element').innerText = '';
            checkCompletion();
        } else {
            document.body.classList.add('flash');
            setTimeout(() => {
                document.body.classList.remove('flash');
                resetGame();
            }, 500);
        }
    });
});

// 顯示科普知識
function showKnowledge(element) {
    alert(`${element.name}（${element.symbol}）：${element.description}`);
}

// 檢查是否完成
function checkCompletion() {
    const cells = document.querySelectorAll('#periodic-table td');
    let isComplete = true;
    cells.forEach(cell => {
        if (cell.innerText === '') {
            isComplete = false;
        }
    });
    if (isComplete) {
        alert("恭喜！你完成了元素拼圖！\n你已經學會了前30號元素的知識！");
    }
}

// 重置遊戲
function resetGame() {
    document.querySelectorAll('#periodic-table td').forEach(cell => {
        cell.innerText = '';
        cell.style.backgroundColor = '#fff';
    });
    currentElement = null;
    document.getElementById('current-element').innerText = '';
}