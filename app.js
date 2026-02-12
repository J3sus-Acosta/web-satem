const express = require('express');
const path = require('path');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
const mainRoutes = require('./routes/index');
app.use('/', mainRoutes);

// 404 Handler
app.use((req, res, next) => {
    res.status(404).render('index', { 
        title: '404 - Not Found',
        page: '404'
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
