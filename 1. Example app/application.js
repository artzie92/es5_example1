function Application(appContainer, btnAdd, firstName, lastName, phoneNumber) {
    var people = [];

    var addPerson = function () {
        var firstNameValue = document.getElementById(firstName).value;
        var lastNameValue = document.getElementById(lastName).value;
        var phoneNumberValue = document.getElementById(phoneNumber).value;
        var id = 0;

        if (people.length > 0) {
            id = people[people.length - 1].id + 1;
        }

        people.push({
            id: id, firstName: firstNameValue, lastName: lastNameValue, phoneNumber: phoneNumberValue
        })
        render();
    }

    var removePerson = function (sender) {
        var id = sender.target.dataset["id"];

        for (let index = 0; index < people.length; index++) {
            const person = people[index];
            if (person.id == id) {
                people.splice(index, 1);
                break;
            }
        }
        render();
    }

    var render = function () {
        var container = document.getElementById(appContainer);
        var html = '<table class="table">' +
            '<thead><tr><th>First Name</th><th>Last Name</th><th>Phone number</th><th></th></tr></thead' +
            '<tbody>';

        for (var index = 0; index < people.length; index++) {
            const person = people[index];
            html += '<tr>' +
                '<td>' + person.firstName + '</td>' +
                '<td>' + person.lastName + '</td>' +
                '<td>' + person.phoneNumber + '</td>' +
                '<td><button class="btn-remove" data-id="' + person.id + '">Remove</button></td>' +
                '</tr>';
        }

        html += '</tbody></table>'
        container.innerHTML = html;

        var buttons = document.getElementsByClassName("btn-remove");
        for (let index = 0; index < buttons.length; index++) {
            const element = buttons[index];
            element.onclick = removePerson;
        }

    }

    this.run = function () {
        render();
        document.getElementById(btnAdd).onclick = addPerson;
    }
}