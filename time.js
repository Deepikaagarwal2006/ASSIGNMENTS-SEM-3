console.log("Start");

setTimeout(() => {
    console.log("Timer callback started");

    process.nextTick(() => {
        console.log("nextTick callback");
    });

    console.log("Timer callback finished");
}, 0);

console.log("End");