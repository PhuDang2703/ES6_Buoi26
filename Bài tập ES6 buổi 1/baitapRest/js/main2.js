let getEle = (id) => {
    return document.getElementById(id);
}

average = (...nums) =>{
let total = 0;
for (num of nums) {
    total += num;
  }
  return total / nums.length;
}
document.getElementById('btnKhoi1').onclick = () => {
  let diemToan = getEle('inpToan').value*1;
  let diemLy = getEle('inpLy').value*1;
  let diemHoa = getEle('inpHoa').value*1;
  result = average(diemToan, diemLy, diemHoa);
  document.getElementById('tbKhoi1').innerHTML = result;
}
document.getElementById('btnKhoi2').onclick = () => {
  let diemVan = getEle('inpVan').value*1;
  let diemSu = getEle('inpSu').value*1;
  let diemDia = getEle('inpDia').value*1;
  let diemAnh = getEle('inpEnglish').value*1;
  result = average(diemVan, diemSu, diemDia, diemAnh);
  document.getElementById('tbKhoi2').innerHTML = result;
}

tong = (...numbs) => {
console.log(numbs)
}

tong(1,2,3)