const express = require('express')
const cors = require('cors')

const PORT = 3001

const mysql = require('mysql2')

const app = express()

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({ //Create connection to the MySQL database
    user: 'root',
    host: 'localhost',
    password: 'MySql0510',
    database: 'taskTracker'
})

app.post('/new', (req, res) => {
    const id = req.body.id;
    const task = req.body.task;
    const day = req.body.day;
    const reminder = req.body.reminder;

    db.query('INSERT INTO tasks (id, task, day, reminder) VALUES (?,?,?,?)', 
    [id, task, day, reminder],
        (err, result) =>{
            if(err){
                console.log(err)
            } else{
                res.send('Values Inserted')
            }
    }
    );
})

app.delete('/delete', (req, res) => {
    
})

app.update('/update', (req, res) => {
    
})

app.get('/get', (req, res) => {
    
})




app.listen(PORT, () => {console.log(`Server running on http://localhost:${PORT}`)})