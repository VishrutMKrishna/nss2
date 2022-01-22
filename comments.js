var d = new Date()
const name = document.getElementById("name")
const ans = document.getElementById("ans")
const val = document.getElementById("comment")
const sub = document.getElementById("sub")
sub.onclick=()=>{ send()}
function send () {  var comments = []  
   
    comments.push(val.value)  
     for (let i = 0;i<comments.length;i++){  ans.innerHTML+= "<span>" + d.getHours() + ":" + d.getMinutes() + " " +  name.value + ":" + "<b>" + "     " + "<b>"+comments[i] + "</b>"+"</span>" + "<br>"  }}
