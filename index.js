const express = require('express');
const cors = require('cors');
const app = express();
const port =process.env.PORT || 5000;

app.use(cors());
app.use(express.json())   //its kind of middleware

app.get('/' , (req, res) => {
    res.send('Look habib mia how  are you?! I can code Node now!')
});

const users =[
    {id:1, name:'Sabana', email:'sabana@gmail.com', phone:'01745838572'},
    {id:2, name:'Sabnur', email:'sabnura@gmail.com', phone:'0179999999'},
    {id:3, name:'Boby', email:'boby@gmail.com', phone:'01745222222'},
    {id:4, name:'opu', email:'opu@gmail.com', phone:'017492929292'},
    {id:5, name:'popo', email:'popo@gmail.com', phone:'0174777777'},
    {id:6, name:'doly', email:'doly@gmail.com', phone:'017450909090'},
    {id:7, name:'dazy', email:'dazy@gmail.com', phone:'01745866666'},
]

app.get('/users', (req, res) =>{
    // filter by  search query parameter 
    if(req.query.name){
      const search = req.query.name.toLowerCase();
      const matched = users.filter(user => user.name.toLowerCase().includes(search));
      res.send(matched);
    }
    else{
        res.send(users);
    }
    
})

app.get('/user/:id', (req, res) =>{
    // console.log(req.params);
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.post('/user', (req, res) =>{
     console.log('request ',req.body);
     const user = req.body;
     user.id = users.length + 1;
     users.push(user)
    res.send(user);
})

app.get('/fruits', (req, res) =>{
    res.send(['mango', 'guaba', 'papaya']);
})
app.get('fruits/mango/orange', (req, res) => {
    res.send('orange kahbo dance korbo');
})


app.listen(port, () =>{
    console.log('Listenting to port', port);
})
