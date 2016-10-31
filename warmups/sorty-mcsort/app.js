var nameArray = [
    {
        firstName: "Billy",
        lastName: "Madison", 
        age: 32
    },
    {
        firstName: "Tommy",
        lastName: "Pickles", 
        age: 32
    },
    {
        firstName: "Ray",
        lastName: "Charles", 
        age: 32
    },
    {
        firstName: "Lady",
        lastName: "Gaga", 
        age: 32
    },
    {
        firstName: "Elizabeth",
        lastName: "Taylor", 
        age: 32
    },
    {
        firstName: "Led",
        lastName: "Zeplin", 
        age: 32
    },
    {
        firstName: "Micael",
        lastName: "Johnson", 
        age: 32
    },
    {
        firstName: "Keri",
        lastName: "Strug", 
        age: 32
    },
    {
        firstName: "Chucky",
        lastName: "Finster", 
        age: 32
    },
    {
        firstName: "Angelica",
        lastName: "Pickles", 
        age: 32
    },
];

function mcSorty(array, sortAscending) {
    if(sortAscending) {
        // sort by last name A to Z
        array.sort(function(a = array.lastName, b = array.lastName) {
            return a-b});
        } else {
        // sort by last name Z to A
        console.log("z to a");
    }
    console.log(array);
};

mcSorty(nameArray, true);