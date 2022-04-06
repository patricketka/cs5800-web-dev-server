import posts from "./tuits.js";
let tuits = posts;


export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0;
    tuits.push(newTuit);
    res.json(newTuit);
}

const updateTuit = (req, res) => {
    const updateId = req.params['tid'];
    const updatedTuit = req.body;
    tuits = tuits.map(tuit =>
        tuit._id === updateId ?
        updatedTuit:
        tuit);
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitIdToDelete  = req.params.tid;
    tuits = tuits.filter(t => t._id !== tuitIdToDelete);
    res.sendStatus(200);
}

const findAllTuits = (req, res) =>
    res.json(tuits);

