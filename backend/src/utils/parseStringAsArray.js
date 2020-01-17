module.exports = function parseStringasArray(arrayasString){
    return arrayasString.split(',').map(tech => tech.trim());
}