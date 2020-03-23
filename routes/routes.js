const express = require('express');
const router = express.Router();
const ticketController = require('../controller/ticketcontroller');

//info sivu
router.get('/info', (req, res) => {
    ticketController.infoPage(req, res);
}); 

//home
router.get('/', (req, res) => {
    ticketController.homePage(req, res);
});

//send ticket page
router.get('/sendticket', (req, res) => {
    ticketController.getAddPage(req, res);
});

//post
router.post('/sendticket', (req, res) => {
    ticketController.postAddTicket(req, res);
});

router.get('/ticketsent', (req, res) => {
    ticketController.ticketSent(req, res);
});

//all tickets and summary
//Tämän oli tarkoitus olla admin -käyttäjän näkymä avoimista tiketeistä

router.get('/tickets', (req, res) => {
    ticketController.findAllTickets(req, res);
}); 

//Admin -toiminnot: Update & Delete

//Tiketin päivitys
router.get('/update', (req, res) => {
    ticketController.getUpdatePage(req, res);
});

router.post('/update', (req, res) => {
    ticketController.updateTicket(req, res);
});

router.get('/updated', (req, res) => {
    ticketController.updatedPage(req, res);
});


//Tiketin poistaminen, kun se on käsitelty
router.get('/delete', (req, res) => {
    ticketController.getDeletePage(req, res);
});

//post metodi, vaikka kyseessä dokumentin deletointi
router.post('/delete', (req, res) => {
    ticketController.deleteTicket(req, res);
});

//Poiston kuittaussivu
router.get('/deleted', (req, res) => {
    ticketController.deletedPage(req, res);
});

module.exports = router;