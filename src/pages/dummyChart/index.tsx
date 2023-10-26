import React, { useEffect, useState } from "react";
import { getDummyChartItems } from "../../core/requests";
import { IDummyChart, IDummyChartItem } from "./types";
import { styles } from "./styles";
import Loader from "../../components/loader";

export default function DummyChart({ title }: IDummyChart) {
  const [chartData, setChartData] = useState<IDummyChartItem[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDummyChartItems();
        setChartData(res.data);
      } catch (error) {
        console.log(error);
        return setChartData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  function widthHandler() {
    if (chartData) {
      const completedTodos =
        chartData.filter((item) => item.completed).length / 2;
      const unCompletedTodos =
        chartData.filter((item) => !item.completed).length / 2;

      return {
        completedTodos,
        unCompletedTodos,
      };
    }
  }

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>{title}</h1>
      <div>
        <span>Completed todos</span>
        <div
          style={styles.completedWrapper(widthHandler()?.completedTodos)}
        ></div>
      </div>
      <div>
        <span>Uncompleted todos</span>
        <div
          style={styles.unCompletedWrapper(widthHandler()?.unCompletedTodos)}
        ></div>
      </div>
      {isLoading && <Loader />}
    </div>
  );
}
