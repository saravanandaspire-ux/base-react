import React from "react";
import { FixedSizeList as List } from "react-window";

const LargeList = () => {
  const Row = ({ index, style }) => (
    <div style={{ ...style, padding: "10px", borderBottom: "1px solid #ccc" }}>
      Item {index + 1}
    </div>
  );

  return (
    <List height={400} width={300} itemCount={1000} itemSize={35}>
      {Row}
    </List>
  );
};

export default LargeList;
