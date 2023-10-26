import React, { useEffect, useState } from "react";
import { getDummyListItems } from "../../core/requests";
import { IDummyList, IDummyListItem } from "./types";
import { styles } from "./styles";
import Loader from "../../components/loader";

export default function DummyList({ title }: IDummyList) {
  const [listData, setListData] = useState<IDummyListItem[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDummyListItems();
        setListData(res.data);
      } catch (error) {
        console.log(error);
        return setListData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderList = listData?.map((item) => (
    <li key={item.id}>
      <div style={styles.listItem}>
        <p style={styles.listTitle}>Title: {item.title}</p>
        <span>Body: {item.body}</span>
      </div>
    </li>
  ));

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>{title}</h1>
      <ul style={styles.list}>{renderList}</ul>
      {isLoading && <Loader />}
    </div>
  );
}
