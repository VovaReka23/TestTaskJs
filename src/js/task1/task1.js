export function Task1() {

    const element = document.querySelector('.wrapper');
    const fragmant = document.createDocumentFragment();
    let fields = ['Sum', 'Price']
    const heading = document.createElement('h2');
    heading.textContent = 'Task 1';
    fragmant.appendChild(heading)

    fields.forEach(function (field) {
        const input = document.createElement('input');
        input.classList.add(field.toLocaleLowerCase());
        input.setAttribute("id", field.toLocaleLowerCase());
        input.setAttribute("placeholder", `${field} entry`);
        input.setAttribute("type", 'number');
        input.setAttribute("step", '0.01');
        input.setAttribute("min", '0');
        fragmant.appendChild(input)
    });

    const button = document.createElement('button');
    button.textContent = 'Return the rest';
    fragmant.appendChild(button)

    const result = document.createElement('div');
    result.setAttribute("id", 'result');
    fragmant.appendChild(result)

    button.addEventListener("click", calc);
    element.appendChild(fragmant);
    function calc() {
        const sum = fragmant.ownerDocument.all.namedItem('sum');
        const price = fragmant.ownerDocument.all.namedItem('price');
        const result = fragmant.ownerDocument.all.namedItem('result');

        const rest = (sum.value - price.value).toFixed(2);
        const dollars = parseInt(rest) >= 2  ? `${parseInt(rest)} dollars` : parseInt(rest) == 1 ? `${parseInt(rest)} dollar` : '';
        let cents = parseInt(rest.toString().split('.')[1]);
        let cent = cents >= 2  ? `, ${cents} cents` : cents == 1 ? `, ${cents} cent`: '';
        if(rest >= 0) {
            result.textContent = `Your rest is ${dollars && dollars} ${cent && cent}`;
        } else {
            alert('You entered an incorrect value')
            sum.value = 0
            price.value = 0
        }
    }


}