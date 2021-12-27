const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 200;
canvas.height = 200;

const image1 = new Image();
image1.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAABvCAMAAADVG25SAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LjE2NDc1MywgMjAyMS8wMi8xNS0xMTo1MjoxMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjMgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTZDRTU1Nzk1Qzk3MTFFQ0FFOUVEOUMyMzEwNjU4QUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTZDRTU1N0E1Qzk3MTFFQ0FFOUVEOUMyMzEwNjU4QUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNkNFNTU3NzVDOTcxMUVDQUU5RUQ5QzIzMTA2NThBRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNkNFNTU3ODVDOTcxMUVDQUU5RUQ5QzIzMTA2NThBRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj8XPRQAAAMAUExURf/jVe3t7f/RADExMg5Fb6qPAEw8ALmbAPHLANa0AP/YDf/ZFfPstCar/v/7AB2HySKc+//hRBd90fb26cqpAP/tAOPWAP/hAPXcTP/9AP/zAEWo9v7+/P/pAEhISP/pdf/kACKZ9/788hyK4ayUAf/eNP/401hYWPHz5lpMAgAzZ/Ly8v799ozI+HG8+E1RL/nRAMGjALexAXpmAP776D81APTvw+vFACKc5hh0vi3M/wAFOfr69IRsAP/rg2hoaP752aKiov/aAP/eMZuCAP//AP/xpfzzwejoAP/dAP/iSv/UAJZ5AP765iGV8vTrq+bCAAAMUf/2AP/XBP/fOP/2xv320d3GAPz67ACE8RuU8/f25v754nRbAP/cKf7umv/mYoh6APXSAPzyvfTx1PTtuf/dLf/zs//++unpyi8TAPvxuP/aGf/qfP/bHiWm/vz8+v31yfnywQBDl5aWlv/3zfr7+Rw6Rv/nayev/yvD//X03hUSAMvIAP/bIXptFAkGABWR8yi1/+3IAP/XAP/gPSGX9f/xqyq9/wVYqWhZAP331h0dHf/cJv/0vNKvAClFVhdnqBpciGpGAAVDgP7WAPr68wiL8vbwxBRemPn11fz9/P79+Pz78SCS8SKf/5aVABNrtP/+9//XCf/0ufv8+n/C+FBFApKOAP/tkf/1wySj//3538CdADkwAApQjZGBAG5nAPz89zAlACWY893d3fXjd/39+xGN8fr45gB48Fyy9gEDFiOg+f/tjKSLAP/VAiADAPzUAAYdNQSI8gYQGf/WA3h4eIiIiNHR0f/cIzKe9P//A/776/fz0VdXAPPZPt+6AO3u3AAgXTRLPyBJaYVgAOvnuAAyhntwACGO5e/XAKGHAPr34P/87sHEAPjaNPbgYf/wn/r56ff37fDy4vv10Q2Z//Hki/j49w9Tl+7kmc7Ozvfxyhp3rv3+/8/QAPnyyPjyzrje+/v0zWlgGP7bJPzbKPvVBiGW8//WAv/WAf///wAAAP/WAP///61/COUAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAKE0lEQVR42ryaDVwT5x3HrxEEkxKBGrPERF4ErI5O6HwZoBiSnhSiSCGgVEWtK6WKgLY6UMYQA1Id2tbqnEWcRUXFV9TGtlitltu0atu5dpvOdbW6zbbrXt2WO+7oveVyr8kFLv4++eSTe/Lc873/89zz8n+eP9AvQyZTGy4TrX7iq7wtOZlM6g9MgH+YKyk3NyqqqclhK22tr6RV39paWlZmsyXiaoqitNk0aJ7LUnSoCIIhXLBAEF97LUmr3hg4z9U99a+lJAiBRSUA4nkXzbu7fUC86oXLY2Ja8RIQUvKIeFKUrSJ3ZcC88okL1cT9CC0Mwz+46AvqJ/VFPAzrcYgM//8oOzDeTkcFjmNYskShaUHAnQB4K2xitslBelX2vFxe8ko17Gk2shRMvhgbsfMffXVtnwyea2GiGkO8uEBobBuxQnXlV/f88sozYc9t2IDlubn+3X1+eG0ANmixGvzy7NU+edtrMNbLjiEDt49qC/jybJMPXnwNq0KQwZhI3k70TM0MkySvOobd5ArUKiHbb6V48THsF0yBdiRKgeHEzeK8+P8Vkrlgld4gJauKXaDKKplRr/KYCMMdm8R4UzNJHAafN+c/IaWUWLsXZ9enSGbMNzM2wrBtnpBXnonRuPNXjqBSCjewedpwyYxhIGb3tA0M574h4O0qpXAq85Xfn5Qs5uhiQyxdpaocMPSoZMaTH2qNKhqID46r+DzTPzWU+fo5qXW8e0d7NARF6x7P11O8nPDH+bghrIxo2Bw9xgBjVvN4qyqpDo6AMwXP+lAfrReJqz+AFK8gVZDxtCfj18TVRoO3BeGDJg7vWhQ9eyKGJ3iFjM265ynmdFYvioZqKZ5xBN+6rO96Mj6UhVv4fQMzY8BwxWw2zwTACD1dCnhZfSz91AdvOjvjWIZHW1jxRxavvJSZXAW8X8nljWVnHO3lUS0IrWLxNmnoeRzBlOdRRKimm+FZKsilCjkpBIsHw+8yvA2FMLNMCQaPGtZa42meaQa5yqTm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';

/*image1.addEventListener('load', function(){
    ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
    const scannedImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
    console.log(scannedImage);
    const scannedData = scannedImage.data;
    for(let i = 0; i < scannedData.length; i+=4){
        const total = scannedData[i] + scannedData[i+1] + scannedData[i+2];
        const averageColorValue = total/3;
        scannedData[i] = averageColorValue + 20;
        scannedData[i+1] = averageColorValue;
        scannedData[i+2] = averageColorValue;
    }
    scannedImage.data = scannedData;
    ctx.putImageData(scannedImage, 0, 0);
})*/

image1.addEventListener('load', function(){
    
    let particlesArray = [];
    const numberOfParticles = 2000;
    ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);

    let mappedImage = [];
    for(let y = 0; y < canvas.height; y++){
        let row = [];
        for(let x = 0; x < canvas.width; x++){
            const red = pixels.data[(y * 4 * canvas.width) + (x * 4)];
            const green = pixels.data[(y * 4 * canvas.width) + (x * 4 + 1)];
            const blue = pixels.data[(y * 4 * canvas.width) + (x * 4 + 2)];
            const brightness = calculateRelativeBrightness(red, green, blue);
            const cell = [
                cellBrightness = brightness,
                cellColor = 'rgb(' + red + ',' + green + ',' + blue + ')'
            ];
            row.push(cell);
        }
        mappedImage.push(row);
    }

    console.log(mappedImage);

    function calculateRelativeBrightness(red, green, blue){
        return Math.sqrt(
            (red * red) * 0.299 +
            (green * green) * 0.587 +
            (blue * blue) * 0.114
        )/100;
    }

    class Particle{
        constructor(){
            this.x = Math.random() * canvas.width;
            this.y = 0;
            this.speed = 0;
            this.velocity = Math.random() * 0.5;
            this.size = Math.random() * 1.5 + 1;
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);
            this.angle = 0;
        }
        update(){
            this.position1 = Math.abs(Math.floor(this.y));         
            this.position2 = Math.abs(Math.floor(this.x));
            this.speed = mappedImage[this.position1][this.position2][0];
            let movement = (2.5 - this.speed) + this.velocity;
            this.angle++;

            this.y += movement + Math.sin(this.angle) * 4;
            this.x += movement;
            if(this.y >= canvas.height){
                this.y = 0;
                this.x = Math.random() * canvas.width;
            }
            if(this.x >= canvas.width){
                this.x = 0;
                this.y = Math.random() * canvas.height;
            }
        }
        draw(){
            ctx.beginPath();
            ctx.fillStyle = mappedImage[this.position1][this.position2][1];
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init(){
        for(let i = 0; i < numberOfParticles; i++){
            particlesArray.push(new Particle);
        }
    }

    init();

    function animate(){
        //ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //ctx.globalAlpha = 0.2;
        for(let i = 0; i < particlesArray.length; i++){
            particlesArray[i].update();
            ctx.globalAlpha = particlesArray[i].speed * 0.5;
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
    }
    animate();
})