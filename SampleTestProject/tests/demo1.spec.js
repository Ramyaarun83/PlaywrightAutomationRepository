import {test, expect} from '@playwright/test'
import { clear } from 'node:console';

test("First Playwright Testcase", function show() {
    console.log(" Welcome to first playwright testcase");

} )
 test("Second Playwright Testcase", function()
 {
    console.log("Anonymous function");
 })

  test("Third Playwright Testcase", ()=>
 {
    console.log("Arrow function");
 })