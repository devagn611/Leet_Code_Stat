// controllers/leetCardController.js

const { LeetCard } = require('../src/dataGen');

exports.generateCard = (req, res) => {
  try {
    const { username, theme, font, extension, site } = req.query;
    const hosturl = `${req.protocol}://${req.get('host')}`;
    const card = new LeetCard(username, theme, font, extension, site, hosturl);
    const cardUrl = card.generateUrl();
    res.send(cardUrl.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.generateCardDetail = (req, res) => {
  try {
    const { username, theme, font, extension, site } = req.query;
    const hosturl = `${req.protocol}://${req.get('host')}`;
    const card = new LeetCard(username, theme, font, extension, site, hosturl);
    const embedHtml = card.generateEmbed();
    const markdown = card.generateMarkdown();
    res.json({ embedHtml, markdown });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.generatePreview = (req, res) => {
  try {
    const { username, theme, font, extension, site } = req.query;
    const hosturl = `${req.protocol}://${req.get('host')}`;
    const card = new LeetCard(username, theme, font, extension, site, hosturl);
    const cardUrl = card.generateUrl();
    res.send(cardUrl.url2);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};