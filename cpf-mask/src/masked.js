export default value => {
    return value
        .replace(/\D/g, '') // replaces any character that is not number for nothing
        .replace(/(\d{3})(\d)/, '$1.$2') // captures 2 groups of numbers the first of 3 and the second of 1, after capturing the first group it adds a point before the second group of numbers
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1') // capture 2 numbers followed by a dash and do not let anything else be typed
}