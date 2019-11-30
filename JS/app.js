const name = 'Tharindu Kavishna';
const age = 22;
const job = 'Web Development';
const city = 'panama';

let html;

// without templete string (es5)

html = '<ul><li>Name: ' + name + '</li><li> Age: ' + age + '</li><li>Job: ' + job + '</li><li>:City ' + city + '</li></ul>';

html = '<ul>' + 
        '<li>Name: ' + name + '</li>' +
        '<li>age: ' + age + '</li>' +
        '<li>Job: ' + job + '</li>' +
        '<li>City: ' + city + '</li>' +
        '</ul>';

// without templete string (es6)

html =`
    <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    </ul>
`;
document.body.innerHTML = html;