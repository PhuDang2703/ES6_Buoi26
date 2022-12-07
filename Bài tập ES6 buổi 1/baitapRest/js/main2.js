let getEle = (id) => {
    return document.getElementById(id);
}

average = (...nums) =>{
let total = 0;
for (const num of nums) {
    total += num;
  }
  return total / nums.length;

}
let diemToan = getEle('inpToan').value;
let diemLy = getEle('inpLy').value;
let diemHoa = getEle('inpHoa').value;

