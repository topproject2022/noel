const form = document.getElementById('main_form');
const formCount = document.getElementById('count');
const formResult = document.querySelector('.count_total');
const level = document.getElementById('level');
const resultContainer = document.querySelector('.result_container');
const table = document.querySelector(".iksweb");
const warn = document.getElementById("text-warn");
let depositIndex = '';
let depositLevel = '';
let countRes = 0;
let dayRes = 0;
let mesRes = 0;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checker(formCount);
});


function checker(count) {
    if (count.value < 50) count.value = 50;
    else if (count.value >= 50 && count.value < 450) {
        depositIndex = 1;
    } else if (count.value >= 500 && count.value < 3950) {
        depositIndex = 2;
    } else if (count.value >= 4000 && count.value < 9950) {
        depositIndex = 3;
    } else if (count.value >= 10000 && count.value < 29950) {
        depositIndex = 4;
    } else if (count.value >= 30000 && count.value < 49950) {
        depositIndex = 5;
    } else if (count.value >= 50000) {
        depositIndex = 6;
    }
    depositLevel = level.value;
    calc(+count.value, +depositIndex, +depositLevel);
}


function calc(invest, count, lev) {
    if (lev === 1) {
        oneLevel(invest, count, lev);
    } else if (lev === 2) {
        secondLevel(invest, count, lev);
    } else if (lev === 3) {
        thirdLevel(invest, count, lev);
    }
}

function oneLevel(invest, depIndex, level) {
    switch (depIndex) {
        case 1:
            calcProfit(invest, 0.5, 14, level);
            break;
        case 2:
            calcProfit(invest, 0.6, 30, level);
            break;
        case 3:
            calcProfit(invest, 0.7, 65, level);
            break;
        case 4:
            calcProfit(invest, 0.8, 100, level);
            break;
        case 5:
            calcProfit(invest, 0.9, 165, level);
            break;
        case 6:
            calcProfit(invest, 1.0, 200, level);
            break;

        default:
            break;
    }
}

function secondLevel(invest, depIndex, level) {
    switch (depIndex) {
        case 1:
            calcProfit(invest, 1.0, 285, level);
            break;
        case 2:
            calcProfit(invest, 1.2, 285, level);
            break;
        case 3:
            calcProfit(invest, 1.4, 285, level);
            break;
        case 4:
            calcProfit(invest, 1.6, 285, level);
            break;
        case 5:
            calcProfit(invest, 1.8, 285, level);
            break;
        case 6:
            calcProfit(invest, 2.0, 285, level);
            break;

        default:
            break;
    }
}


function thirdLevel(invest, depIndex, level) {
    switch (depIndex) {
        case 1:
            calcProfit(invest, 1.4, 365, +level);
            break;
        case 2:
            calcProfit(invest, 1.6, 365, +level);
            break;
        case 3:
            calcProfit(invest, 1.8, 365, +level);
            break;
        case 4:
            calcProfit(invest, 2.0, 365, +level);
            break;
        case 5:
            calcProfit(invest, 2.2, 365, +level);
            break;
        case 6:
            calcProfit(invest, 2.4, 365, +level);
            break;

        default:
            break;
    }
}


function calcProfit(invest, percent, days, lv) {
    countRes;
    dayRes;
    mesRes;
    if (+lv === 1) {
        Math.floor(dayRes = (invest * ((percent * 1) / 100 )));
        Math.floor(countRes = (invest * ((percent * days) / 100)) + invest);
        table.innerHTML = 
        `
            <tbody>
                <tr>
                    <td>Ingresos por dia</td>
                    <td>Ingresos totales</td>
                </tr>
                <tr>
                    <td>$<span>${dayRes.toFixed(2)}</span></td>
                    <td>$<span class="count_total">${countRes.toFixed(2)}</span></td>
                </tr>
            </tbody>
        `
        warn.style.display = 'none';
    }
    else if (+lv === 2) {
        Math.floor(dayRes = (invest * ((percent * 1) / 100 )));
        Math.floor(mesRes = (invest * ((percent * 31) / 100 )));
        Math.floor(countRes = (invest * ((percent * days) / 100)) + invest);
        table.innerHTML = 
        `
            <tbody>
                <tr>
                    <td>Ingresos por dia</td>
                    <td>Ingreso mensual</td>
                    <td>Ingresos totales</td>
                </tr>
                <tr>
                    <td>$<span>${dayRes.toFixed(2)}</span></td>
                    <td>$<span>${mesRes.toFixed(2)}</span></td>
                    <td>$<span class="count_total">${countRes.toFixed(2)}</span></td>
                </tr>
                </tbody>
        `
        warn.style.display === 'block' ? true : warn.style.display = 'block';
    }
    else if (+lv === 3) {
        Math.floor(dayRes = (invest * ((percent * 1) / 100 )));
        Math.floor(mesRes = (invest * ((percent * 31) / 100 )));
        Math.floor(countRes = (invest * ((percent * days) / 100)));
        table.innerHTML = 
        `
            <tbody>
                <tr>
                    <td>Ingresos por dia</td>
                    <td>Ingreso mensual</td>
                    <td>Ingresos totales</td>
                </tr>
                <tr>
                    <td>$<span>${dayRes.toFixed(2)}</span></td>
                    <td>$<span>${mesRes.toFixed(2)}</span></td>
                    <td>$<span class="count_total">${countRes.toFixed(2)}</span></td>
                </tr>
            </tbody>
        `
        warn.style.display === 'block' ? true : warn.style.display = 'block';
    }
}
