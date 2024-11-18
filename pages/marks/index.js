import { getSheetData } from '../utils/sheets';
import styles from '../../styles/Table.module.css';

export default function Home({ dataRows }) {
  return (
    <div>
      <h1 className={`${styles.centered} ${styles.header}`}>
        درجات الأختبار الشهري
      </h1>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>FullName</th>
              <th>Course</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {dataRows.map((row, index) => (
              <tr key={index}>
                <td>{row.FullName}</td>
                <td>{row.Course}</td>
                <td>{row.Total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const dataRows = await getSheetData();
  return {
    props: {
      dataRows,
    },
  };
}
