export function Reverse () {
    return function (input) {
        if(!angular.isArray(input)) return
        return input.reverse()
    
    }
}