const Client = require("../models/client");

exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.findAll();
    res.status(200).json(clients);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des clients" });
  }
};

exports.getClientById = async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (!client) {
      return res.status(404).json({ error: "Client non trouvé" });
    }
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération du client" });
  }
};

exports.createClient = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    if (!firstname || !lastname || !email || !password) {
      return res.status(400).json({ error: "Tous les champs sont requis" });
    }

    const client = await Client.create({
      firstname,
      lastname,
      email,
      password,
    });
    res.status(201).json({ message: "Client créé avec succès", client });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la création du client" });
  }
};

exports.updateClient = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    const client = await Client.findByPk(req.params.id);
    if (!client) {
      return res.status(404).json({ error: "Client non trouvé" });
    }

    await client.update({ firstname, lastname, email, password });
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la mise à jour du client" });
  }
};

exports.deleteClient = async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (!client) {
      return res.status(404).json({ error: "Client non trouvé" });
    }

    await client.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la suppression du client" });
  }
};
