let num =0;
    for (let i = 1; i <= 50; i++) {
        if (i.toString().includes('3') || i.toString().includes('6') || i.toString().includes('9')) {
            console.log("짝");
        } else {
            console.log(i);
        }
    }

