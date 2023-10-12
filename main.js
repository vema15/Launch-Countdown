
const output = document.querySelector('.output');


for (let i = 10; i>=0; i--) {
    const para = document.createElement('p');
    if (i == 0) {
        para.textContent = `Blast off!`;
        output.appendChild(para);
       
    } else {
        para.textContent = `Countdown ${i}`;
        output.appendChild(para);
       
    }
} 



