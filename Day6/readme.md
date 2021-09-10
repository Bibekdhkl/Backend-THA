## Event Loop

* All Golang,python, java were developed for system but later on they were edited to work on the browser later on while js was born for browser.
* but since js works on low memory so that it can't work on mult thread so they came up with event loop: which is an algorithm that handles async nature

### some features of JS
* async(Asynchronous) = doing the task turn by turn, here light task is done first then the halted heavy task is performed later on which results the execution is not affected
* single threaded = doesn't have the power of whole system(RAM/Memory)
* Concurrent = can work parallelly 
* non-blocking = doesn't block tasks

###notes of js
 * JS has a V8 compiler but also there's many other compiler which has call Stack and Heap.
 * Call stack can do one thing at a time
 * You can use Loupe to understand Javascript's call stack/event loop/call back queue || Search "event loop website" in google [IMPORTANT]
 	* call stack executes in LIFO to empty the stack which executes the commands that don't take time like console.log
 	* Set timeout, event takes time so it's part of Web Api's which stores the commands that takes time
 	* A loop which check stack is empty and  queue has something then the loop takes the commands in FIFO manner til both the stack and queue are empty then event loop is performed in this manner
 
 	So, it is a funny langauage as this concept is not used in any other language
 	It doesn't have any memory so this algorithm is made to handle large task.
 	
 	Because of this powerful method, node js is powerful framework.
