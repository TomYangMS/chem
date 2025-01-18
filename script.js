const elements = [
    { name: "氫", symbol: "H", position: "1-1" },
    { name: "氦", symbol: "He", position: "1-18" },
    { name: "鋰", symbol: "Li", position: "2-1" },
    { name: "鈹", symbol: "Be", position: "2-2" },
    { name: "硼", symbol: "B", position: "2-13" },
    { name: "碳", symbol: "C", position: "2-14" },
    { name: "氮", symbol: "N", position: "2-15" },
    { name: "氧", symbol: "O", position: "2-16" },
    { name: "氟", symbol: "F", position: "2-17" },
    { name: "氖", symbol: "Ne", position: "2-18" },
    { name: "鈉", symbol: "Na", position: "3-1" },
    { name: "鎂", symbol: "Mg", position: "3-2" },
    { name: "鋁", symbol: "Al", position: "3-13" },
    { name: "硅", symbol: "Si", position: "3-14" },
    { name: "磷", symbol: "P", position: "3-15" },
    { name: "硫", symbol: "S", position: "3-16" },
    { name: "氯", symbol: "Cl", position: "3-17" },
    { name: "氬", symbol: "Ar", position: "3-18" },
    { name: "鉀", symbol: "K", position: "4-1" },
    { name: "鈣", symbol: "Ca", position: "4-2" },
    { name: "鈧", symbol: "Sc", position: "4-3" },
    { name: "鈦", symbol: "Ti", position: "4-4" },
    { name: "釩", symbol: "V", position: "4-5" },
    { name: "鉻", symbol: "Cr", position: "4-6" },
    { name: "錳", symbol: "Mn", position: "4-7" },
    { name: "鐵", symbol: "Fe", position: "4-8" },
    { name: "鈷", symbol: "Co", position: "4-9" },
    { name: "鎳", symbol: "Ni", position: "4-10" },
    { name: "銅", symbol: "Cu", position: "4-11" },
    { name: "鋅", symbol: "Zn", position: "4-12" }
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
        alert("恭喜！你完成了元素拼圖！");
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