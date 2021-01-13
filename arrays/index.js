Array.prototype.flatCustom = function() {
    return this.reduce((acc, cur) => {
        if (Array.isArray(cur)) {
            acc.push(...cur.flat(Infinity).map(
                    curElement => typeof curElement === 'object' ? Object.values(curElement) : curElement
                ).flat(Infinity)
            )
        }
        else if (typeof cur === 'object') {
            acc.push(...Object.values(cur).flat(Infinity))
        }
        else {
            acc.push(cur)
        }
        return acc;
    }, []);
};

const arr1 = [[2], 3, {}, [1, 2]]; // [2, 3, 1, 2]
const arr2 = [2, 3, [[1, {a: "text"}], [[2]]], 5]; // [2, 3, 1, "text", 2, 5]
const arr3 = [5, {a: 1}, [ 1,[ 3, {}, {c: "a", d: [2, 2]} ] ,[[ 6 ]]]]; // [5, 1, 1, 3, "a", 2, 2, 6]

console.log("Given array:" , arr1);
console.log("flatCustom: ", arr1.flatCustom());

console.log("Given array:" , arr2);
console.log("flatCustom: ", arr2.flatCustom());


console.log("Given array:" , arr3);
console.log("flatCustom: ", arr3.flatCustom());