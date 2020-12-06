export function Task3() {
    const element = document.querySelector('.wrapper');
    const fragmant = document.createDocumentFragment();
    const heading = document.createElement('h2');
    heading.textContent = 'Task 3';
    fragmant.appendChild(heading)

    let fields = ['Name', 'Surname', 'Email', 'Date'];
    const form = document.createElement('form');
    fields.forEach(function (field) {
        const input = document.createElement('input');
        input.classList.add(field.toLocaleLowerCase());
        input.setAttribute("id", field.toLocaleLowerCase());
        input.required = true;
        input.setAttribute("placeholder", `${field} entry`);
        input.setAttribute("type", field);
        form.appendChild(input)
    });
    const button = document.createElement('button');
    button.textContent = 'Add to table';
    button.setAttribute("type", 'submit');;
    form.appendChild(button);
    fragmant.appendChild(form);

    const table = document.createElement('div');
    const hedindT =  document.createElement('h3');
    const row =  document.createElement('div');
    table.classList.add('table');
    row.classList.add('row');
    hedindT.textContent = 'Table';
    table.appendChild(hedindT)
    table.appendChild(row)

    fields.forEach(function (field) {
        const div = document.createElement('div');
        div.textContent = field;
        div.classList.add(field.toLocaleLowerCase(), 'table-item');
        row.appendChild(div)
    });
    fragmant.appendChild(table);

    function addToTable(e){
        e.preventDefault();
        const row =  document.createElement('div');
        row.classList.add('row');
        fields.forEach(function (field) {
            const div = document.createElement('div');
            const valueField = field.toLocaleLowerCase() + "";
            div.textContent = fragmant.ownerDocument.all.namedItem(`${valueField}`).value;
            div.classList.add(field.toLocaleLowerCase(), 'table-item');
            row.appendChild(div)
        });
        table.appendChild(row)
    }
    button.addEventListener("click",  (e) => addToTable(e));
    element.appendChild(fragmant);
}