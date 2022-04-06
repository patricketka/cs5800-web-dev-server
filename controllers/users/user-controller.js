import people from './users.js'
let users = people;

const userController = (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUserById);
    app.post('/api/users', createUser);
    app.delete('/api/users/:uid', deleteUser)
    app.put('/api/users/:uid', updateUser);
}

const updateUser = (req, res) => {
    const updatedUserId = req.params.uid;
    const updatedUser = req.body;
    users = users.map(user => user._id === updatedUserId ? updatedUser: user);
    res.sendStatus(200);
}

const deleteUser = (req, res) => {
    const userId = req.params.uid;
    users = users.filter(user => user._id !== userId);
    res.sendStatus(200);
}

const createUser = (req, res) => {
    const newUser = req.body;
    newUser._id = (new Date()).getTime() + '';
    users.push(newUser);
    res.json(newUser);
}

const findUserById = (req, res) => {
    const userId = req.params.uid;
    const user = users.find(user => user._id === userId);
    res.json(user)
}

const findAllUsers = (req, res) => {
    const type = req.query.type;
    if(type) {
        res.json(findUsersByType(type))
        return;
    }
    res.json(users)
}

const findUsersByType = (type) => {
    return users.filter(user => user.type === type)
}

export default userController;