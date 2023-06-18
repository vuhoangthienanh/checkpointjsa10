let n = prompt("Nhập 1 số tự nhiên", "");
Number(n);
let x = 1;
    if (n<0) {
        console.log("Nhập lại số khác");
    }
    else if (n=0) {
        console.log("1");
    }
    else {
        for (let i = 1; i <= n; i++) {
            x = x*i;
        }
        console.log(x);
    }
    
