import Folder from "./components/Folder";
import explorer from "./data/folder-data";
import { useState } from "react";
import useTraversalData from "./hooks/use-traversal-data";
export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraversalData();
  const handleInsertNode = (id, item, isfolder) => {
    const finalNode = insertNode(explorer, id, item, isfolder);
    setExplorerData(finalNode);
  };
  return (
    <>
      <Folder explorerData={explorerData} handleInsertNode={handleInsertNode} />
    </>
  );
}
