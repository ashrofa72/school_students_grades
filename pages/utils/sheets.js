import { google } from 'googleapis';

export async function getSheetData() {
  const jwt = new google.auth.JWT(
    process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    null,
    process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/spreadsheets.readonly']
  );

  const sheets = google.sheets({ version: 'v4', auth: jwt });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: 'Sheet1!A1:Z',
  });

  const rows = response.data.values;
  const headerRow = rows[0];
  const dataRows = rows.slice(1);

  // Map column names to indices
  const columnMap = headerRow.reduce((acc, colName, index) => {
    acc[colName] = index;
    return acc;
  }, {});

  // Filter and sort the data rows
  const filteredAndSortedDataRows = dataRows
    .map((row) => ({
      FullName: row[columnMap['FullName']],
      Course: row[columnMap['Course']],
      Total: row[columnMap['Total']],
    }))
    .filter((row) => row.FullName && row.Course && row.Total)
    .sort((a, b) => a.FullName.localeCompare(b.FullName));

  return filteredAndSortedDataRows;
}
