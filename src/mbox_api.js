/*
    https://www.imooc.com/video/17457
*/

import { observable, isArrayLike, computed, autorun, when, reaction } from 'mobx';

class Store {
    @observable array = [];
    @observable obj = {};
    @observable map = new Map();
    @observable str = 'hello';
    @observable num = 1;
    @observable bool = false;

    @computed get mixed(){
        return store.str + '/' + store.num;
    }
}


var store = new Store();

var foo = computed(function(){
    return store.str + '/' + store.num
})

// console.log(foo);
// console.log(foo.get());

foo.observe(function(change){
    console.log(change);
});

store.str = 'world';

/*
    autorun
*/
autorun(()=>{
    console.log(store.mixed);
})

store.string= '123';

/*
    When
*/
when(()=>store.bool, ()=>{
    console.log('it is true');
})




