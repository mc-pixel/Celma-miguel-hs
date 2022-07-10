const data = [
    { id: 56, parentId: 62 },
    { id: 81, parentId: 80 },
    { id: 74, parentId: null },
    { id: 76, parentId: 80 },
    { id: 63, parentId: 62 },
    { id: 80, parentId: 86 },
    { id: 87, parentId: 86 },
    { id: 62, parentId: 74 },
    { id: 86, parentId: 74 },
  ];
  const idMapping = data.reduce((acc, el, i) => {
    acc[el.id] = i;
    return acc;
  }, {});
let root;
data.forEach((el) => {
  // Handle the root element
  if (el.parentId === null) {
    root = el;
    return;
  }
  // Use our mapping to locate the parent element in our data array
  const parentEl = data[idMapping[el.parentId]];
  // Add our current el to its parent's `children` array
  parentEl.children = [...(parentEl.children || []), el];
});