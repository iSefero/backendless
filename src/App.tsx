import React, { ReactElement, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { listTabs } from "./core/requests";
import { ITab } from "./types/requests.types";
import DummyTable from "./pages/dummyTable";
import DummyList from "./pages/dummyList";
import DummyChart from "./pages/dummyChart";
import NotFound from "./pages/notFound";
import LayoutWithNavigation from "./components/layouts/LayoutWithNavigation";
import Loader from "./components/loader";

export default function App(): ReactElement {
  const [tabs, setTabs] = useState<ITab[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await listTabs();
        const filteredTabs = res.data.sort(
          (a: ITab, b: ITab) => a.order - b.order,
        );
        setTabs(filteredTabs);
      } catch (error) {
        console.log(error);
        return setTabs([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const pageDefinition = (pageName: string, item: ITab): ReactElement => {
    switch (pageName) {
      case "dummyChart":
        return <DummyChart title={item.title} />;
      case "dummyTable":
        return <DummyTable title={item.title} />;
      case "dummyList":
        return <DummyList title={item.title} />;
      default:
        return <NotFound />;
    }
  };

  const defaultPath: string = tabs ? `/${tabs[0].id}` : "/";

  const renderRoute = tabs?.map((item) => (
    <Route
      path={`/${item.id}`}
      key={item.id}
      element={pageDefinition(item.id, item)}
    />
  ));

  return (
    <div>
      <LayoutWithNavigation navigationList={tabs}>
        <Routes>
          <Route path="/" element={<Navigate to={defaultPath} />} />
          {renderRoute}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LayoutWithNavigation>
      {isLoading && <Loader />}
    </div>
  );
}
