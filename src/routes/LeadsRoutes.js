const express = require('express')
const Leads = require('../models/Leads')

const routes = express.Router();

routes.post('/leads', async (req, res) => {
  const { name, phone, email, enterprise_name, site, cnpj, modality, status, sector } = req.body;
  
  await Leads.create({
    name,
    phone,
    email,
    enterprise_name,
    site,
    cnpj,
    modality,
    status,
    sector
  }).then((lead) => {
    res.status(201).json({ lead })
  }).catch((erro) => {
    res.json({
      'erro': erro.errors[0].message,
      'field': erro.fields
    });
  });

});

routes.get('/leads', async (req, res) => {
  await Leads.findAll({order: [['id', 'DESC']]}).then((leads) => {
    return res.json({ leads });
  });
});

routes.put('/leads', async (req, res) => {
  const { id, name, phone, email, enterprise_name, site, cnpj, modality, status, sector } = req.body;
  await Leads.update({
    name,
    phone,
    email,
    enterprise_name,
    site,
    cnpj,
    modality,
    status,
    sector
  },
	{ where: { id }	}).then((lead) => {
    res.status(200).json({ lead })
  }).catch((erro) => {
    res.json({
      'erro': erro
    });
  })
});

routes.delete('/leads/:id', async (req, res) => {
  await Leads.destroy({where: {'id': req.params.id}}).then((lead) => {
    res.status(200).json({ lead })
  }).catch((erro) => {
		res.json({
      'erro': erro
    });
	});
}); 

module.exports = routes;