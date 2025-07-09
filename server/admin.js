const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb+srv://abirpaulbkp:IoHpDrUCl12xCl8t@cluster0.jmnactn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const loginLogSchema = new mongoose.Schema({
  email: String,
  loginTime: Date,
});

const AdminLoginLog = mongoose.model('AdminLoginLog', loginLogSchema);

app.use(bodyParser.json());

app.post('/api/admin-login-log', async (req, res) => {
  const { email, loginTime } = req.body;

  try {
    const log = new AdminLoginLog({ email, loginTime });
    await log.save();
    res.status(200).json({ message: 'Login time logged successfully' });
  } catch (err) {
    console.error('Error saving login log:', err);
    res.status(500).json({ error: 'Failed to log login time' });
  }
});

const PORT = 2000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
