const lowerCase = document.querySelector(".lower-case");
const mainInput = document.querySelector(".main-input");
const upperCase = document.querySelector(".upper-case");
const trimSpaces = document.querySelector(".trim-spaces");
const camelCase = document.querySelector(".camel-case");
const kebabCase = document.querySelector(".kebab-case");
const snakeCase = document.querySelector(".snake-case");
const pascalCase = document.querySelector(".pascal-case");
document.querySelectorAll(".input-value").forEach(e => {
    e.disabled = true;
})

mainInput.addEventListener("input",()=> {
    lowerCase.value = mainInput.value.toLowerCase();
    upperCase.value = mainInput.value.toUpperCase();
    kebabCase.value = mainInput.value.toLowerCase().split(" ").join("-");
    snakeCase.value = mainInput.value.toLowerCase().split(" ").join("_");
    pascalCase.value = (mainInput.value.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())).join("");
    camelCase.value = (mainInput.value.split(" ").map((word, i) => {if( i === 0) {
        return word.toLowerCase();
    }
else {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}})).join("");
    trimSpaces.value = mainInput.value.trim().replace(/\s/g,"");
})


const a = "HELLO KASE HO";
 const c = (a.split(" ").map((w,i)=> {
    if(i === 0) {
     return w.toLowerCase();
    }
    else {
    return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()}})).join("");
const b = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
console.log(b)
console.log(c)