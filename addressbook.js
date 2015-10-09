var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var david = {
    firstName: "David",
    lastName: "Johnson",
    phoneNumber: "(650) 999-9999",
    email: "david.johnson@example.com"
};

var edward = {
    firstName: "Edward",
    lastName: "Stone",
    phoneNumber: "(650) 666-6666",
    email: "edward.stone@example.com"
};

var emma = {
    firstName: "Emma",
    lastName: "Ratcliffe",
    phoneNumber: "(650) 111-1111",
    email: "emma.ratcliffe@example.com"
};

var chris = {
    firstName: "Chris",
    lastName: "Nicholson",
    phoneNumber: "(650) 222-2222",
    email: "chris.nicholson@example.com"
};

var paul = {
    firstName: "Paul",
    lastName: "Brown",
    phoneNumber: "(650) 333-3333",
    email: "paul.brown@example.com"
};

var jenny = {
    firstName: "Jenny",
    lastName: "Smith",
    phoneNumber: "(650) 444-4444",
    email: "jenny.smith@example.com"
};

var ashley = {
    firstName: "Ashley",
    lastName: "Jackson",
    phoneNumber: "(650) 555-5555",
    email: "mary.johnson@example.com"
};


var contacts = [bob, mary, david, edward, emma, chris, paul, jenny, ashley];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/
//linea search

function search (lastName) {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        if (lastName === contacts[i].lastName) {
            printPerson(contacts[i]);
        }else{break;}
    };
};

search("Jones");

//adding contacts - function to do so

function add(firstName, lastName, email, phoneNumber) {
    object = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber;
    };
    contacts[contacts.length] = object;
}

add("Harry", "Ramsden", "harry.ramsden@example.com", "(350) 101-1010");

list();







