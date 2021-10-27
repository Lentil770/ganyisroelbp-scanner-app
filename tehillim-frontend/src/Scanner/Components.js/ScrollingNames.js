import "../style/scrolling.css";
// import { scrollWrap } from "../Functions/Scrolling";

export default function ScrollingNames({ currentStudents }) {
  const namesLiList = () => {
    console.log("naemsllisr");
    let LiList = [];
    for (let i = 0; i < currentStudents.length; i++) {
      LiList.push(<span key={i}>{currentStudents[i]}</span>);
    }
    return LiList;
  };
  return (
    <>
      <div id="scroll-container">
        <div className="wrap-container" id="wrap-scroll">
          {/* <ul id="ul-scroll"> */}
          {namesLiList()}
          {/* </ul> */}
        </div>
      </div>
      <svg>
        <defs>
          <linearGradient id="gradient" x1="0" y1="0%" x2="0" y2="50%">
            <stop stopColor="black" offset="0" />
            <stop stopColor="white" offset="1" />
          </linearGradient>

          <mask
            id="masking"
            maskUnits="objectBoundingBox"
            maskContentUnits="objectBoundingBox"
          >
            <rect y="0" width="1" height="1" fill="url(#gradient)" />
          </mask>
        </defs>
      </svg>
    </>
  );
}
