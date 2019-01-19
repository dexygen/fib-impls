WebAssembly.instantiateStreaming(fetch("../out/main.wasm"), {
  env: {
    abort(msg, file, line, column) {
      console.error("abort called at main.ts:" + line + ":" + column);
    }
  },
}).then(result => {
  const exports = result.instance.exports;
  const beganAt = new Date().getTime();
  const fib45 = exports.fibonacci(45);
  console.log(new Date().getTime() - beganAt);
  console.log(fib45);
}).catch(console.error);
