import needle from 'needle';

//student 1: Mary Jane Watson
needle.post('http://localhost:3000/save-student', {
    stdnum: '8051495845',
    fname: 'Mary Jane',
    lname: 'Watson',
    age: 20
}, (err,res) => {
    console.log(res.body);
});

//student 2: Na Jaemin
needle.post('http://localhost:3000/save-student', {
    stdnum: '20000813',
    fname: 'Jaemin',
    lname: 'Na',
    age: 23
}, (err,res) => {
    console.log(res.body);
});

//student 3: Huang Renjun
needle.post('http://localhost:3000/save-student', {
    stdnum: '20000323',
    fname: 'Renjun',
    lname: 'Huang',
    age: 23
}, (err,res) => {
    console.log(res.body);
});

//student 4: Mark Lee
needle.post('http://localhost:3000/save-student', {
    stdnum: '19990802',
    fname: 'Mark',
    lname: 'Lee',
    age: 24
}, (err,res) => {
    console.log(res.body);
});

//student 5: Park Jisung
needle.post('http://localhost:3000/save-student', {
    stdnum: '20020206',
    fname: 'Jisung',
    lname: 'Park',
    age: 21
}, (err,res) => {
    console.log(res.body);
});

//updates Mary Jane's last name to Parker
needle.post('http://localhost:3000/update', {
    fname: 'Mary Jan',
    lname: 'Parker'
}, (err,res) => {
    console.log(res.body);
});

// removes Mary Jane from the database
needle.post('http://localhost:3000/remove-user', {
    stdnum: '8051495845'
}, (err,res) => {
    console.log(res.body);
});

// removes all users from the database
needle.post('http://localhost:3000/remove-all-user', {}, (err,res) => {
    console.log(res.body);
});

// gets student with student number 8051495845
needle.get('http://localhost:3000/user?stdnum=8051495845', (err,res) => {
    console.log(res.body);
});

// gets all students
needle.get('http://localhost:3000/members', (err,res) => {
    console.log('All members printed in site.');
});