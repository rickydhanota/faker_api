const express = require('express');
const faker = require('faker');
const app = express();
const port = 8000;


// we can create a function to return a random / fake "Product"
const createUser = () => {
    const newUser = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
    return newUser;
};

// Cleaner way to do it
// const generateUserObj = () => ({
//     _id: faker.datatype.uuid(),
//     firstName: faker.name.firstName(),
//     lastName: faker.name.lastName(),
//     phoneNumber: faker.phone.phoneNumber(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//   });

//   const generateCompanyObject = () => ({
//     _id: faker.datatype.uuid(),
//     name: faker.company.companyName(),
//     address: {
//       street: faker.address.streetAddress(),
//       city: faker.address.cityName(),
//       state: faker.address.state(),
//       zipcode: faker.address.zipCode(),
//       country: faker.address.country(),
//     },
//   });

    
const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: faker.address.streetAddress(),
        street: faker.address.streetName(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipCode: faker.address.zipCodeByState(),
        country: faker.address.country(),
    };
    return newCompany;
};

const User = createUser();
console.log(User);

const Company = createCompany();
console.log(Company);

app.get('/api', (req, res)=>{
    res.json({message: 'Hi made it here'});
});

app.get('/api/users/new', (req, res) => {
    console.log("Hi I'm here")
    const User = createUser();
    res.json(User);
});

app.get("/api/companies/new", (req, res) => {
    const Company = createCompany();
    res.json(Company);
});

app.get("/api/user/company", (req, res) => {
    const User = createUser();
    const Company = createCompany();

    const responseObject = {
        user: User,
        company: Company,
    };
    res.json(responseObject);
});

app.listen(port, () => console.log(`Listening on port: ${port}`));