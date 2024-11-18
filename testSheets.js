import { GoogleSpreadsheet } from 'google-spreadsheet';
import credentials from 'pages/utils/credentials.json' assert { type: 'json' }; // Explicitly declare the file type

const doc = new GoogleSpreadsheet(
  '10BzoAxaSy-qnD95M51MsH2hYVen26bBQ97VbVkiyhDM'
);

(async () => {
  try {
    console.log('Authenticating with Google Sheets...');
    await doc.useServiceAccountAuth(credentials);

    console.log('Loading Google Sheets document...');
    await doc.loadInfo(); // Load spreadsheet metadata
    console.log(`Spreadsheet title: ${doc.title}`);

    const sheetName = 'YourSheetName'; // Replace with your sheet's name
    const sheet = doc.sheetsByTitle[sheetName]; // Access the sheet by name

    if (!sheet) {
      throw new Error(`Sheet with name "${sheetName}" not found`);
    }

    console.log(`Using sheet: ${sheet.title}`);

    const rows = await sheet.getRows(); // Load all rows
    console.log('Rows fetched:', rows.length);

    rows.forEach((row) => {
      console.log({
        name: row.FullName,

        arabic: row.Total,
      });
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
})();
