import React, { useEffect, useState } from "react";
import { getDummyTableItems } from "../../core/requests";
import { IDummyTable, IDummyTableItem } from "./types";
import { styles } from "./styles";
import Loader from "../../components/loader";

export default function DummyTable({ title }: IDummyTable) {
  const [tableData, setTableData] = useState<IDummyTableItem[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDummyTableItems();
        setTableData(res.data);
      } catch (error) {
        console.log(error);
        return setTableData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  const renderTable = tableData?.map((item) => (
    <tr key={item.id}>
      <td>{item.username}</td>
      <td>{item.name}</td>
      <td>{item.phone}</td>
      <td>{item.company.name}</td>
    </tr>
  ));

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>{title}</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <td style={styles.columnTitle}>Username:</td>
            <td style={styles.columnTitle}>Name:</td>
            <td style={styles.columnTitle}>Phone:</td>
            <td style={styles.columnTitle}>Company:</td>
          </tr>
        </thead>
        <tbody>{renderTable}</tbody>
      </table>
      {isLoading && <Loader />}
    </div>
  );
}
