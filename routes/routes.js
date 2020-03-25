const express = require('express');
const router = express.Router();
const ticketController = require('../controller/ticketcontroller');

router.get('/info', (req, res) => {
    ticketController.infoPage(req, res);
}); 

router.get('/', (req, res) => {
    ticketController.homePage(req, res);
});

router.get('/sendticket', (req, res) => {
    ticketController.getAddPage(req, res);
});

router.post('/sendticket', (req, res) => {
    ticketController.postAddTicket(req, res);
});

router.get('/ticketsent', (req, res) => {
    ticketController.ticketSent(req, res);
});

//Admin näkymä, kaikki avoimet tiketit
router.get('/tickets', (req, res) => {
    ticketController.findAllTickets(req, res);
}); 

//Admin -toiminnot: Update & Delete
router.get('/update', (req, res) => {
    ticketController.getUpdatePage(req, res);
});

router.post('/update', (req, res) => {
    ticketController.updateTicket(req, res);
});

router.get('/updated', (req, res) => {
    ticketController.updatedPage(req, res);
});

router.get('/delete', (req, res) => {
    ticketController.getDeletePage(req, res);
});

router.post('/delete', (req, res) => {
    ticketController.deleteTicket(req, res);
});

router.get('/deleted', (req, res) => {
    ticketController.deletedPage(req, res);
});

module.exports = router;
