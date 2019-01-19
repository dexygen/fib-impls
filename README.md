# fib-impls

For comparing AssemblyScript vs. JavaScript implementations of the same, slow, recursive, Fibonacci algorithm

A webserver will be needed (since the .wasm file is retrieved using `fetch`) that you can control the mime-type configuration for, I'm using NGinx and merely had to add the following line to mimes.type

    	application/wasm                                 wasm;
