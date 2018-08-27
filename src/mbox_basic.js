import { observable, isArrayLike } from 'mobx';

// array
const arr = observable([1, 2, 3]);
console.log(arr, Array.isArray(arr), Array.isArrayLike(arr));
console.log(arr[0]);

// Object
const obj = observable({
    a: 1,
    b: 2
});

console.log(obj.b);

// map
const map = observable(new Map());
map.set('a', 1);
console.log(map.has('a'));
map.delete('a');

//
const num = observable.box(20);
const str = observable.box('hello');
const bool = observable.box(true);

const val = num.get();
bool.set(false);

class Store {
    @observable array = [];
    @observable obj = {};
    @observable map = new Map();
    @observable str = 'hello';
    @observable num = 1;
    @observable bool = false;
}



