const fs = require('fs')

fs.writeFileSync("notes.txt", "Welcome to nodejs course.")

fs.appendFileSync("notes.txt", " i am srilakshmi")