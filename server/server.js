const express = require('express')
const cors = require('cors')

const PORT = 3001

const sqlite3 = require('sqlite3')

const app = express()

app.use(cors())
app.use(express.json())

let db = new sqlite3.Database('./db/tasks.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the tasks database.');
  });



app.post('/new', (req, res) => {
    const id = req.body.id;
    const task = req.body.text;
    const day = req.body.day;
    const reminder = req.body.reminder;

    db.run('INSERT INTO tasks (id, task, day, reminder) VALUES (?,?,?,?)', 
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

// app.delete('/delete', (req, res) => {
    
// })

// app.update('/update', (req, res) => {
    
// })

// app.get('/get', (req, res) => {
    
// })




app.listen(PORT, () => {console.log(`Server running on http://localhost:${PORT}`)})