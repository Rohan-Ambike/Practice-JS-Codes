const express = require('express');
const path = require('path');
const multer = require('multer');
const { mergePdfs } = require('./merge');
const fs = require('fs');
const app = express();
app.use('/static', express.static('public'))
const port = 3000;

// Ensure upload directory exists
const uploadDir = path.join(__dirname, 'upload');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Configure multer for file uploads
const upload = multer({ dest: 'upload/' });

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates/index.html'));
});


// Handle the merge route
app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
    console.log('Uploaded Files:', req.files); // Debug log
    let name = await mergePdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))
    req.files.forEach(file => fs.unlinkSync(file.path));
    res.redirect(`/static/${name}.pdf`);
    // res.send({ data: req.files });
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
