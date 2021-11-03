import React from "react";

export default function TitleBar() {
  return (
    <div className="title-bar">
      <span className="title-bar-text-title" style={Styles.title}>
        Shabbos Mevorchim Tehillim!
      </span>
    </div>
  );
}

const Styles = {
  title: {
    fontSize: "3em",
    fontWeight: "bold",
    backgroundColor: "#bc6c25",
    textAlign: "center",
    margin: "0 auto",
    padding: "0.2em",
    width: "100%",
  },
};
