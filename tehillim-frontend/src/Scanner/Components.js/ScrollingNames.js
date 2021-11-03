import "../style/scrolling.css";

export default function ScrollingNames({ currentStudents }) {
  console.log(currentStudents);
  const namesLiList = () => {
    let LiList = [];
    for (let i = 0; i < currentStudents.length; i++) {
      LiList.unshift(<span key={i}>{currentStudents[i]}</span>);
    }
    if (currentStudents.length >= 10) {
      for (let i = 0; i < currentStudents.length; i++) {
        LiList.unshift(
          <span key={currentStudents.length + i}>{currentStudents[i]}</span>
        );
      }
      for (let i = 0; i < currentStudents.length; i++) {
        LiList.unshift(
          <span key={currentStudents.length * 2 + i}>{currentStudents[i]}</span>
        );
      }
    } /**duplicating ensures each name appears clearly in scrolling list */
    return LiList;
  };

  return (
    <>
      <div
        className="wrap-container scroll-fast"
        id="wrap-scroll"
        style={{
          animationDuration: `${currentStudents.length * 1.2}s`,
          height:
            currentStudents.length * 300 /* = height of all spans*/ + "px",
        }}
      >
        {namesLiList()}
      </div>
    </>
  );
}
