export default function foldl <a, t> (func: Function, list: Array<a>, init: t): t {
    let accumulator = init;

    list.slice().forEach((value: a) => {
        accumulator = func(value, accumulator);
    })

    return accumulator;
}