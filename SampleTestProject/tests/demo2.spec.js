const {test, expect} = require('@playwright/test')
test("First playwright Traditional function", async function show(){
    await console.log("Traditional demo2 function");
})

test("second playwright Traditional function", async function(){
await console.log("Anonymous demo2 function");
})

test("Third playwright Arrow function", async ()=>{
    await console.log("Arrow demo2 function");
})
