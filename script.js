const scoreContainer = document.getElementById('scoreContainer');

let summary

fetch('data.json')
.then(res => res.json())
.then(data => {
    summary = data
    renderSum()
    averageScore()
})

function renderSum() {
    summary.map(sum => {
        let divCategory = document.createElement('div');
        let divAline = document.createElement('div');
        let image = document.createElement('img');
        let p = document.createElement('p');
        let pCategory = document.createElement('p');
        let span = document.createElement('span')
        image.src = sum.icon;
        image.alt = 'icon';
        pCategory.textContent = sum.category
        divCategory.className = sum.category;
        divAline.className = 'aline';
        p.className = 'decriptionP';
        span.className = 'sumOutcome';
        span.textContent = sum.score;
        p.textContent = ' / 100';
        
        scoreContainer.appendChild(divCategory);
        divCategory.appendChild(divAline);
        divAline.appendChild(image);
        divAline.appendChild(pCategory)
        divCategory.appendChild(p);
        p.appendChild(span)
        p.insertBefore(span, p.firstChild)
    })
}

function averageScore() {
    let avgTotal = document.getElementById('avgTotal');
    let avgScore = document.getElementById('avgScore');
    let total = 0;
    summary.forEach(sum => {
        total += sum.score;
    });
    let totalAmount = Math.floor(total / summary.length);
    avgTotal.textContent = totalAmount;
    avgScore.textContent = '65%';
}

