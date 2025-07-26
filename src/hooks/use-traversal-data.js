const useTraversalData = () => {
  const insertNode = (explorer, id, item, isFolder) => {
    if (explorer.id == id && explorer.isFolder) {
      explorer.items.unshift({
        id: new Date().getTime(),
        name: item,
        items: [],
        isFolder: isFolder,
      });
    }

    let latestNode = [];
    latestNode = explorer.items?.map((obj) => {
      return insertNode(obj, id, item, isFolder);
    });
    return { ...explorer, latestNode };
  };

  return { insertNode };
};
export default useTraversalData;
