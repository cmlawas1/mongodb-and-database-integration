import {saveStudent, updateStudent, removeUser, removeAllUser, findUser, findMembers} from './controller.js';

const router = (app) =>{
    app.post('/save-student', saveStudent);
    app.post('/update', updateStudent);
    app.post('/remove-user', removeUser);
    app.post('/remove-all-user', removeAllUser);
    app.get('/user', findUser);
    app.get('/members', findMembers);
}

export default router;