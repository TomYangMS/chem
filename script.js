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

function showInfo(element) {
    const infoText = `
        <h3>${element.name} (${element.symbol})</h3>
        <p>位置：${element.position}</p>
        <p>類型：${element.type === "metal" ? "金屬" : "非金屬"}</p>
        <p>描述：${element.description}</p>
    `;
    document.getElementById('info-text').innerHTML = infoText;
}
