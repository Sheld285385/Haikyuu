document.querySelector(".mult").onclick=function(){
  let one =document.querySelector(".one").value
    let two =document.querySelector(".two").value
    alert(one*two)
}
document.querySelector(".divi").onclick=function(){
    let one =document.querySelector(".one").value
      let two =document.querySelector(".two").value
      alert(one/two)
  }
  document.querySelector(".per").onclick=function(){
    let a =document.querySelector(".one").value
      let b =document.querySelector(".two").value
      alert((+a + +b)*2)
  }
  document.querySelector(".step").onclick=function(){
    let a =document.querySelector(".one").value
      let b =document.querySelector(".two").value
      alert(a ** b)
  }
  document.querySelector(".S").onclick=function(){
    let a =document.querySelector(".one").value
      let b =document.querySelector(".two").value
      alert(a * b)
  }