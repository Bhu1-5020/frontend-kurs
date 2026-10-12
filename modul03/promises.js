function warteAuf(ms) {
    return new Promise(function (resolve, reject) {
        if (ms < 0) {
            reject("error : negative Zahl");
        }
        setTimeout(function () {
            resolve("Fertig nach " + ms + "ms");
        }, ms);
    });
}
warteAuf(300).then(function (message) { console.log(message); })
    .catch(function (error) { console.log(error); });
function zufaelligerErflog() {
    return new Promise(function (resolve, reject) {
        if (Math.random() < 0.5) {
            resolve(Math.floor(Math.random() * 100));
        }
        else {
            reject(new Error("Fehler"));
        }
    });
}
for (var i = 0; i < 5; i++) {
    zufaelligerErflog().then(function (msg) { console.log(msg); })
        .catch(function (error) { console.log(error.message); });
}
