let racer1 = function() {
  setTimeout(() => console.log("timeout1"), 0);
  setImmediate(() => console.log("immediate1"));
  process.nextTick(() => console.log("nextTick1"));
}
let racer2 = function() {
  process.nextTick(() => console.log("nextTick2"));
  setTimeout(() => console.log("timeout2"), 0);
  setImmediate(() => console.log("immediate2"));
}
let racer3 = function() {
  setImmediate(() => console.log("immediate3"));
  process.nextTick(() => console.log("nextTick3"));
  setTimeout(() => console.log("timeout3"), 0);
}
racer1()
racer2()
racer3()