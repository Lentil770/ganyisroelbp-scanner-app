const fetchCurrentStudents = async () => {
  //await fetch and return
  console.log("hello");
};

const handleCurrentStudentsResponse = (responseObject) => {
  //return array of names
  let namesArray = [];
  console.log(responseObject);
  for (let i = 0; i < responseObject.data.length; i++) {
    namesArray.push(responseObject.data[i].studentID);
  }
  console.log(namesArray);
  return namesArray;
};

export { fetchCurrentStudents, handleCurrentStudentsResponse };
