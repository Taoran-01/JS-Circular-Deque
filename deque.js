"use strict";

const Alpha = 1.75;

class deque {
	constructor(length = 0) {
		this.head = this.tail = 0;
		this.stor = length, this.data = new Array(this.stor);
	}
	prev(idx) {return (this.stor + idx - 1) % this.stor;}
	next(idx) {return (idx + 1) % this.stor;}
	size() {
		if (this.stor === 0) return 0;
		return (this.stor + this.tail - this.head) % this.stor;
	}
	empty() {return this.tail === this.head;}
	reserve(length) {
		let t = new Array(length), idx = 0;
		while (!this.empty()) t[idx++] = this.front(), this.pop_front();
		this.head = 0, this.tail = idx, this.stor = length, this.data = t;
	}
	clear() {this.head = this.tail = this.stor = 0, this.data = [];}
	chk_empty() {if (this.empty()) throw Error("Deque is empty.");}
	chk_stor() {
		if (this.stor === 0) this.reserve(3);
		if (this.next(this.tail) === this.head) {
			this.reserve(Math.floor(this.stor * Alpha));
		}
	}
	front() {this.chk_empty(); return this.data[this.head];}
	back() {this.chk_empty(); return this.data[this.prev(this.tail)];}
	pop_front() {
		this.chk_empty(); this.data[this.head] = undefined;
		this.head = this.next(this.head);
	}
	pop_back() {
		this.chk_empty();
		this.data[this.tail = this.prev(this.tail)] = undefined;
	}
	push_front(x) {
		this.chk_stor();
		this.data[this.head = this.prev(this.head)] = x;
	}
	push_back(x) {
		this.chk_stor(); this.data[this.tail] = x;
		this.tail = this.next(this.tail);
	}

	get pushFront() {return this.push_front;}
	get pushBack() {return this.push_back;}
	get popFront() {return this.pop_front;}
	get popBack() {return this.pop_back;}
	get push() {return this.push_back;} get pop() {return this.pop_front;}
	get enqueue() {return this.push;} get dequeue() {return this.pop;}
}

deque;
