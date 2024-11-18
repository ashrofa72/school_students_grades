import { GoogleSpreadsheet } from 'google-spreadsheet';
const credentials = require('../utils/credentials.json'); // Adjust to match your project structure

export default async function handler(req, res) {
  const doc = new GoogleSpreadsheet(
    '10BzoAxaSy-qnD95M51MsH2hYVen26bBQ97VbVkiyhDM'
  );

  try {
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0]; // Access first sheet
    const rows = await sheet.getRows();

    res.status(200).json({
      title: doc.title,
      sheetTitle: sheet.title,
      data: rows.map((row) => ({
        name: row.FullName,

        arabic: row.Total,
      })),
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Unable to fetch data' });
  }
}
