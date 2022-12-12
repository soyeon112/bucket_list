/* 버킷리스트 done표시 */
const bucket = document.querySelectorAll(".bucket");

for (let i = 0; i < bucket.length; i++) {
  bucket[i].addEventListener("click", () => clickDone(i));
}

/**
 * 버킷리스트 클릭시 done표시 되는 함수
 */
function clickDone(i) {
  console.log("click", i);
  bucket[i].className += " done";
}

/* 버킷리스트 추가하기 */
const addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", AddBucket);

const bucketWrap = document.querySelector(".wrap");
/**
 * 버킷리스트 항목 추가 함수
 */
function AddBucket() {
  console.log("add버튼 클릭");
  const bucketText = prompt("버킷리스트 항목을 작성해주세요.");
  alert(bucketText + "가 추가 되었습니다.");
  console.log(bucketText);
  const newDiv = document.createElement("div"); //div태그 생성
  newDiv.innerHTML = bucketText;
  newDiv.setAttribute("class", "bucket img1 center");
  bucketWrap.appendChild(newDiv);
}
