import React, { useState, useEffect } from "react";

const DynamicallyScrolls = () => {
  const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !loading) {
        setLoading(true);
        setTimeout(() => {
          setItems((prevItems) => [
            ...prevItems,
            ...Array.from({ length: 10 }, (_, i) => `Item ${prevItems.length + i + 1}`)
          ]);
          setLoading(false);
        }, 1000);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Infinite Scroll</h2>
      <ul style={{ listStyle: "none" }}>
        {items.map((item, index) => (
          <li key={index} style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>{item}</li>
        ))}
      </ul>
      {loading && <p>Loading more items...</p>}
    </div>
  );
};

export default DynamicallyScrolls;
