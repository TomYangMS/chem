const elements = [
    { name: "氫", symbol: "H", position: "1-1", type: "non-metal", description: "氫是宇宙中含量最多的元素，也是最輕的元素。" },
    { name: "氦", symbol: "He", position: "1-18", type: "non-metal", description: "氦是第二輕的元素，常用於填充氣球和飛艇。" },
    { name: "鋰", symbol: "Li", position: "2-1", type: "metal", description: "鋰是一種輕金屬，常用於製造電池。" },
    { name: "鈹", symbol: "Be", position: "2-2", type: "metal", description: "鈹是一種輕金屬，具有高熔點和良好的導熱性。" },
    { name: "硼", symbol: "B", position: "2-13", type: "non-metal", description: "硼是一種非金屬元素，常用於製造玻璃和陶瓷。" },
    { name: "碳", symbol: "C", position: "2-14", type: "non-metal", description: "碳是生命的基礎元素，存在於所有有機物中。" },
    { name: "氮", symbol: "N", position: "2-15", type: "non-metal", description: "氮是大氣中含量最多的氣體，常用於製造肥料。" },
    { name: "氧", symbol: "O", position: "2-16", type: "non-metal", description: "氧是生命必需的氣體，支持燃燒和呼吸。" },
    { name: "氟", symbol: "F", position: "2-17", type: "non-metal", description: "氟是最活潑的非金屬元素，常用於製造牙膏和殺蟲劑。" },
    { name: "氖", symbol: "Ne", position: "2-18", type: "non-metal", description: "氖是一種惰性氣體，常用於霓虹燈。" },
    { name: "鈉", symbol: "Na", position: "3-1", type: "metal", description: "鈉是一種活潑金屬，常用於製造食鹽和肥皂。" },
    { name: "鎂", symbol: "Mg", position: "3-2", type: "metal", description: "鎂是一種輕金屬，常用於製造合金和煙火。" },
    { name: "鋁", symbol: "Al", position: "3-13", type: "metal", description: "鋁是一種輕金屬，具有良好的導電性和耐腐蝕性。" },
    { name: "硅", symbol: "Si", position: "3-14", type: "non-metal", description: "硅是地殼中含量第二多的元素，常用於製造半導體和玻璃。" },
    { name: "磷", symbol: "P", position: "3-15", type: "non-metal", description: "磷是一種非金屬元素，常用於製造肥料和火柴。" },
    { name: "硫", symbol: "S", position: "3-16", type: "non-metal", description: "硫是一種非金屬元素，常用於製造硫酸和火藥。" },
    { name: "氯", symbol: "Cl", position: "3-17", type: "non-metal", description: "氯是一種有毒氣體，常用於消毒和製造塑料。" },
    { name: "氬", symbol: "Ar", position: "3-18", type: "non-metal", description: "氬是一種惰性氣體，常用於焊接和照明。" },
    { name: "鉀", symbol: "K", position: "4-1", type: "metal", description: "鉀是一種活潑金屬，常用於製造肥料和肥皂。" },
    { name: "鈣", symbol: "Ca", position: "4-2", type: "metal", description: "鈣是一種金屬元素，常用於製造水泥和骨骼。" },
    { name: "鈧", symbol: "Sc", position: "4-3", type: "metal", description: "鈧是一種稀土金屬，常用於製造高強度合金。" },
    { name: "鈦", symbol: "Ti", position: "4-4", type: "metal", description: "鈦是一種輕金屬，具有良好的耐腐蝕性和高強度。" },
    { name: "釩", symbol: "V", position: "4-5", type: "metal", description: "釩是一種過渡金屬，常用於製造高強度鋼材。" },
    { name: "鉻", symbol: "Cr", position: "4-6", type: "metal", description: "鉻是一種過渡金屬，常用於製造不鏽鋼和鍍鉻製品。" },
    { name: "錳", symbol: "Mn", position: "4-7", type: "metal", description: "錳是一種過渡金屬，常用於製造鋼材和電池。" },
    { name: "鐵", symbol: "Fe", position: "4-8", type: "metal", description: "鐵是一種過渡金屬，是地殼中含量最多的金屬元素。" },
    { name: "鈷", symbol: "Co", position: "4-9", type: "metal", description: "鈷是一種過渡金屬，常用於製造磁鐵和電池。" },
    { name: "鎳", symbol: "Ni", position: "4-10", type: "metal", description: "鎳是一種過渡金屬，常用於製造不鏽鋼和硬幣。" },
    { name: "銅", symbol: "Cu", position: "4-11", type: "metal", description: "銅是一種過渡金屬，具有良好的導電性和導熱性。" },
    { name: "鋅", symbol: "Zn", position: "4-12", type: "metal", description: "鋅是一種過渡金屬，常用於製造鍍鋅鋼材和電池。" }
];

let currentElement;
let remainingElements = [...elements]; // 剩餘未骰出的元素

// 初始化格子顏色
document.addEventListener('DOMContentLoaded', function() {
    const cells = document.querySelectorAll('#periodic-table td');
    cells.forEach(cell => {
        const position = cell.getAttribute('data-position');
        if (position) {
            const element = elements.find(e => e.position === position);
            if (element) {
                cell.setAttribute('data-type', element.type);
                if (element.type === 'metal') {
                    cell.style.backgroundColor = '#006400';
                    cell.style.color = 'white';
                } else {
                    cell.style.backgroundColor = '#aaffaa';
                }
            }
        }
    });
});

// 骰子功能：隨機選擇一個元素（不重複）
function rollDice() {
    if (remainingElements.length === 0) {
        alert("所有元素都已骰出！");
        return;
    }
    const randomIndex = Math.floor(Math.random() * remainingElements.length);
    currentElement = remainingElements[randomIndex];
    remainingElements.splice(randomIndex, 1); // 從剩餘元素中移除
    document.getElementById('current-element').innerText = `當前元素：${currentElement.symbol} (${currentElement.name})`;
    document.getElementById('info-text').innerText = ""; // 清空基本信息
}

// 點擊格子放置元素
document.querySelectorAll('#periodic-table td').forEach(cell => {
    cell.addEventListener('click', () => {
        if (!currentElement) {
            alert("請先骰出一個元素！");
            return;
        }
        if (cell.getAttribute('data-position') === currentElement.position) {
            cell.innerHTML = `${currentElement.symbol}<br>${currentElement.name}`;
            cell.setAttribute('data-type', currentElement.type); // 設置格子類型
            showInfo(currentElement);
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

// 顯示元素基本信息
function showInfo(element) {
    const infoText = `
        <h3>${element.name} (${element.symbol})</h3>
        <p>位置：${element.position}</p>
        <p>類型：${element.type === "metal" ? "金屬" : "非金屬"}</p>
        <p>描述：${element.description}</p>
    `;
    document.getElementById('info-text').innerHTML = infoText;
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
        document.body.classList.add('golden-background');
        alert("你好棒棒啊！");
    }
}

// 重置遊戲
function resetGame() {
    document.querySelectorAll('#periodic-table td').forEach(cell => {
        cell.innerText = '';
        cell.style.backgroundColor = '#fff';
        cell.removeAttribute('data-type'); // 移除格子類型
    });
    currentElement = null;
    document.getElementById('current-element').innerText = '';
    document.getElementById('info-text').innerHTML = "這裡會顯示元素的基本信息。";
    remainingElements = [...elements]; // 重置剩餘元素
    document.body.classList.remove('golden-background'); // 移除金色背景
}
