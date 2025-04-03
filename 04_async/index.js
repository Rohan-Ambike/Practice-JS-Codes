function _prom(isTrue, delay) {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                let ans = true;
                console.log("Made Choice :", ans);
                isTrue ? resolve() : reject();
            }, delay)
        }
    )
}

console.log("Start");

_prom(true, 2000);

console.log("End");