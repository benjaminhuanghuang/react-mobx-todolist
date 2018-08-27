/*
    https://www.imooc.com/video/17455
*/

// decorator for class
function log(target) {
    // get all properties
    const desc = Object.getOwnPropertyDescriptors(target.prototype);
    for (const key of Object.keys(desc)) {
        if (key === 'constructor')
            continue;

        const func = desc[key].value;
        if ('function' === typeof func) {
            Object.defineProperty(target.prototype, key, {
                value(...args) {
                    console.log('before ' + key);
                    const ret = func.apply(this, args);
                    console.log('after ' + key);

                    return ret;
                }
            })
        }
    }
}

// decorator for property
function readonly(target, key, descriptor){
    descriptor.writable = false;
}

// decorator for unciton
function validate(target, key, descriptor)
{
    const func = descriptor.value;
    descriptor.value = function(...args){
        for(let num of args){
            if('number' !==typeof num)
            {
                throw new Error(`"${num}" is not a number`);
            }
        }
        return func.apply(this, args);
    }
}

@log
class Numeric {
    @readonly
    PI = 3.1415926;

    @validate
    add(...nums) {
        return nums.reduce((sum, n) => (sum + n), 0);
    }
}

new Numeric().add(1, 2, 3);
new Numeric().PI = 111;
new Numeric().add(1, 2, '3');
