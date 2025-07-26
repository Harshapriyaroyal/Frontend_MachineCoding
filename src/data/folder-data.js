const explorer = {
  name: "Root",
  id: 1,
  isFolder: true,
  items: [
    {
      name: "Public",
      isFolder: true,
      id: 2,
      items: [
        {
          name: "assets",
          isFolder: true,
          id: 3,
          items: [
            {
              name: "sample.jsx",
              isFolder: false,
              id: 4,
            },
          ],
        },
        {
          name: "index.html",
          isFolder: false,
          id: 5,
        },
      ],
    },
    {
      name: "src",
      isFolder: true,
      id: 6,
      items: [
        {
          name: "xyz.txt",
          isFolder: false,
          id: 7,
        },
      ],
    },
  ],
};
export default explorer;
