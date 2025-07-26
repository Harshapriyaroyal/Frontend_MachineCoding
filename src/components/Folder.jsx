import { useState } from "react";
export default function Folder({ explorerData, handleInsertNode }) {
  const [expanded, setExpanded] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });

  const handleAddInput = (e, isFolder) => {
    e.stopPropagation();
    setExpanded(true);
    setShowInput({ ...showInput, visible: true, isFolder: isFolder });
  };

  const onAddInput = (e) => {
    if (e.keyCode == 13 && e.target.value) {
      handleInsertNode(explorerData.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };
  if (explorerData.isFolder) {
    return (
      <>
        <div className="folder" onClick={() => setExpanded(!expanded)}>
          <span>📁{explorerData.name}</span>
          <div>
            <button onClick={(e) => handleAddInput(e, true)}>Folder +</button>
            <button onClick={(e) => handleAddInput(e, false)}>File +</button>
          </div>
        </div>
        <div
          style={{ paddingLeft: "10px", display: expanded ? "block" : "none" }}
        >
          {showInput.visible && (
            <>
              {showInput.isFolder ? "📁" : "📄"}{" "}
              <input
                autoFocus
                onKeyDown={onAddInput}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </>
          )}
          {explorerData.items.map((item) => {
            return (
              <Folder
                explorerData={item}
                key={item.id}
                handleInsertNode={handleInsertNode}
              />
            );
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <span>📄{explorerData.name}</span>
      </>
    );
  }
}
