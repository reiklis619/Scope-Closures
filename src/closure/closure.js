function greeting() {
    let userName = 'Reinier';

    function displayUserName(){
        return `Hello ${userName}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());