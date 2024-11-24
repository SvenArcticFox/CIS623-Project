export default function foldr <a, t> (func: Function, list: Array<a>, init: t): t {
    let accumulator = init;

    list.slice().reverse().forEach((value: a) => {
        accumulator = func(value, accumulator);
    })

    return accumulator;
}