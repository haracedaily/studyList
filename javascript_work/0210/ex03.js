function downup(str) {
    if (str.length == 1) {
        console.log(str);
        return;
    }

    console.log(str);
    downup(str.slice(0, str.length - 1));
    console.log(str);
}


downup('Ate');

const hi = "hihi";

console.log(h1.length);

