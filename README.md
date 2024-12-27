# JS-Circular-Deque
A Preload-Based Circular Deque Class in JavaScript.

[Github Repo](https://github.com/Taoran-01/JS-Circular-Deque) | [npm package](https://www.npmjs.com/package/circular-deque)  
Language: [en](https://github.com/Taoran-01/JS-Circular-Deque) | [zh-cn](https://algo-x.cn/articles/JS-Circular-Deque/)  
License: [MIT license](https://github.com/Taoran-01/JS-Circular-Deque?tab=MIT-1-ov-file)

## Principle
The queue is stored in a circular fashion, maintaining both front and back pointers.

When the queue runs out of space, it resizes to $1.75$ times its original size and copies the queue.

## Usage
### Installing and Importing the Module
```bash
npm install circular-deque
```
```javascript
const deque = require('circular-deque');
```

### Creating an Object | `constructor()`
```javascript
const t = new deque();   // #1
const t = new deque(10); // #2
```
Method #1: Does not pre-allocate length.  
Method #2: Pre-allocates a length of `length` as needed by the program.

### Getting Front/Back Elements | `front()` & `back()`
```javascript
let x = t.front();
let x = t.back();
```
Time Complexity: $O(1)$.

### Inserting Elements at the Front/Back | `push_front()` & `push_back()`
```javascript
t.push_front(x);
t.push_back(x);
```
Time Complexity: Most of the time $O(1)$, worst case $O(\text{length})$ (when resizing is needed).

### Popping Elements from the Front/Back | `pop_front()` & `pop_back()`
```javascript
t.pop_front();
t.pop_back();
```
Time Complexity: $O(1)$.

## Function Aliases
```
push_back  <= enqueue | push | pushBack
pop_front  <= dequeue | pop | popFront
pop_back   <= popBack
push_front <= pushFront
```

## Previous Versions
### `v0.9.0`
1. [x] Added `README` documentation.  
2. [x] Optimized `pop` operation to reduce space overhead.

## Development Plan
1. [ ] Optimize parameters based on data structure performance.  
2. [ ] Check for memory leaks.
