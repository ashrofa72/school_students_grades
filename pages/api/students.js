// /pages/api/students.js
import { fetchStudentMarks } from 'pages/utils/sheets.js';

export default async function handler(req, res) {
  try {
    const data = await fetchStudentMarks(); // Fetch data from Google Sheets
    res.status(200).json(data); // Return data as JSON
  } catch (error) {
    console.error('Error in API handler:', error);
    res.status(500).json({ error: 'Failed to fetch student marks' });
  }
}
