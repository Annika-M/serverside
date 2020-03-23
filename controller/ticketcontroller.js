const Ticket = require('../models/tickets');

const infoPage = (req, res) => {
    res.render('info');
}
const homePage = (req, res) => {
    res.render('home');
}

const getAddPage = (req, res) => {
    res.render('addticket', { title: 'Add a new ticket' });
}

const postAddTicket = (req, res) => {
    const addTicket = new Ticket(req.body);
    addTicket.save().then(result => {
        console.log(result + 'Ticket saved!');
        res.redirect('ticketsent');
    }).catch(err => console.log(err));
}

const ticketSent = (req, res) => {
    res.render('ticketsent');
}

const findAllTickets = (req, res) => {
    Ticket.find((err, tickets) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render('tickets', { tickets: tickets });
        }
    });
}

const getUpdatePage = (req, res) => {
    res.render('update', { title: 'Update ticket' });
}

const updateTicket = (req, res) => {
    Ticket.findOneAndUpdate({_id: req.body.id}, 
        {$set: {description: req.body.description}},
        {new: true, upsert: true} ).then(result => {
            console.log(result + ' Ticket updated!');
            res.redirect('updated');
        }).catch(err => console.log(err));
}

const updatedPage = (req, res) => {
    res.render('updated');
}

const getDeletePage = (req, res) => {
    res.render('delete', { title: 'Delete ticket by ID' });
}

const deleteTicket = (req, res) => {
    Ticket.findOneAndDelete(req.body.id).then(result => {
        console.log(result + ' Ticket deleted!');
        res.redirect('deleted');
    }).catch(err => console.log(err));
}

const deletedPage = (req, res) => {
    res.render('deleted');
}

module.exports = {
    homePage, infoPage,
    getAddPage, postAddTicket, ticketSent, findAllTickets,
    getUpdatePage, updateTicket, updatedPage,
    getDeletePage, deleteTicket, deletedPage
};