
function useTraverseTree() {
  function insertNode(tree, folderId, nodeItem, isFolder) {
    //finding in whole tree for  folderid
    if (tree.id == folderId && tree.isFolder) {
      tree.items?.unshift({
        id: new Date().getTime,
        name: nodeItem,
        isFolder,
        items: [],
      });
      return tree;
    }
    let lastestNode = [];
    // so we can find in child array
    lastestNode = tree.items?.map((data) => {
      return insertNode(data, folderId, nodeItem, isFolder);
    });

    return { ...tree, items: lastestNode };
  }
  return { insertNode };
}

export default useTraverseTree;
