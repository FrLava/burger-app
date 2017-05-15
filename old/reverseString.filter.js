export function ReverseString () {
    return function (string) {
        if(typeof string !== 'string') return
        return string.split("").reverse().join("")
    }
    
}