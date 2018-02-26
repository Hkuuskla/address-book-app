var restify = require('restify');
var mysql = require('mysql');
const corsMiddleware = require('restify-cors-middleware');

const server = restify.createServer({
  name: 'address-book-app',
  version: '1.0.0'
});

const cors = corsMiddleware({
  preflightMaxAge: 5, //Optional
  origins: ['http://localhost:4200'],
  allowHeaders: ['API-Token'],
  exposeHeaders: ['API-Token-Expiry']
})

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'helin',
  password: 'password',
  database: 'addressBook'
})

connection.connect();

server.pre(cors.preflight);
server.use(cors.actual);

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser({mapParams: true}));



function addContact(contact) {
  serverContact = {
    id: null,
    company: contact.company,
    country: contact.country,
    city: contact.city,
    address: contact.address
  }
  var queryString = 'INSERT INTO contacts SET ?';
  connection.query(queryString, serverContact, function(err, rows, field) {
    if (err) throw err;
  })
}

function getContact(done) {
  var queryString = 'SELECT * FROM contacts';
  connection.query(queryString, function(err, rows, field) {
    if (err) throw err;
    done(rows);
  })
}

function updateContact(contact) {
  var queryString = 'UPDATE contacts WHERE id = serverContact.id ';
  connection.query(querystring, serverContact, function(err, rows, fields) {
  if (err) throw err;
  })
}

// Võtab vastu aadressi ja salvestab andmebaasi
server.post('/contact',  function (req, res, next) {
  addContact (req.params);
  res.send();
  return next();
});

// Võtab aadressid andmebaasist ja saadab rakendusse
server.get('/contact', function (req, res, next) {
  getContact(function(rows) {
    res.send(rows);
    return next();
  });

server.put('/contact', function(req, res, next) {
  updateContact(req.params);
  res.send()
})

  /*server.delete('',function())
*/
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});


// put ja delete juurde
