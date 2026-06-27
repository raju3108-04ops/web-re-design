import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;

if (!ACCESS_KEY) {
  console.warn('WEB3FORMS_ACCESS_KEY is not set. Form submission will fail.');
}

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '..')));

app.post('/api/web3forms', async (req, res) => {
  if (!ACCESS_KEY) {
    return res.status(500).json({ success: false, error: 'Server form key not configured.' });
  }

  const payload = {
    access_key: ACCESS_KEY,
    ...req.body
  };

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Form submission failed.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
