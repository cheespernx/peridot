const db = require('./db');

const Leads = db.sequelize.define('leads', {
	name: {
		type: db.Sequelize.STRING,
		allowNull: false
  },
  phone: {
    type: db.Sequelize.STRING
  },
  email: {
    type: db.Sequelize.STRING
  },
  enterprise_name: {
    type: db.Sequelize.STRING
  },
  site: {
    type: db.Sequelize.STRING
  },
  cnpj: {
    type: db.Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  modality:{
    type: db.Sequelize.STRING
  },
  status:{
    type: db.Sequelize.STRING
  },
  sector: {
    type: db.Sequelize.STRING
  }

});

// Leads.sync({force: true});

module.exports = Leads;