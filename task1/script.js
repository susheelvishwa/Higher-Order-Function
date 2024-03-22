// given a arry need to make a saprate with space

// sample input
// arr = ["susheel", "masai-school", "vishwakarma"]

// sample output
// susheel masai-school vishwakarma

let object = {
    arr: ["susheel", "masai-school", "vishwakarma"],
    looped: function () {
        let newarr = this.arr
        let str = ""
        for (let i = 0; i < newarr.length; i++){
            str+= newarr[i] + " "
        }
        return str
    }
}
console.log(object.looped());