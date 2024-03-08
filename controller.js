import mongoose from 'mongoose';
await mongoose.connect("mongodb://127.0.0.1:27017/StudentDatabase", {
    useNewUrlParser: true, useUnifiedTopology: true
});

//model
const Student = mongoose.model('Student', {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
    }, 'studentData')

//POST save-student
const saveStudent = async (req,res) => {
    if(Object.values(req.body).length == 4) { //checks if all parameter values are present
        await Student.create({stdnum: req.body.stdnum, fname: req.body.fname, lname: req.body.lname, age: req.body.age});
        res.send({inserted:true}); //value returned by the controller
    } else {
        res.send({inserted:false});
    }
}

//POST updates student's last name given their first name
const updateStudent = async (req,res) => {
    let stud = await Student.findOne({ fname: req.body.fname });

    if(stud) { //if student exists
        stud.lname = req.body.lname;
        await stud.save(); //updateOne in mongoose
        res.send('Student last name updated.');
    }
}

//POST remove user given their student number
const removeUser = async (req,res) => {
    res.send(await Student.deleteOne({ stdnum: req.body.stdnum }));
}

//POST remove all users
const removeAllUser = async (req,res) => {
    let deleteCount = await Student.deleteMany({});
    if(deleteCount.acknowledged == true & deleteCount.deletedCount > 0) {
        res.send({deleted: true});
    } else {
        res.send({deleted: false});
    }
}

//GET user using student number
const findUser = async (req,res) => {
    let user = await Student.find({ stdnum: req.query.stdnum }); //finds users with the student number query
    if(user) { //if found
        res.send(user);
    } else {
        res.send('');
    }
}

//GET members
const findMembers = async (req,res) => {
    res.send(await Student.find({}));
}

export {saveStudent, updateStudent, removeUser, removeAllUser, findUser, findMembers}