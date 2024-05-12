function style1(txt)
{
    let str =txt;
  localStorage.setItem('value1', `${str}`);
    if(txt==="i1")
    {document.getElementById('p1').innerHTML = "Pink-Black";}
    if(txt==="i2")
    {document.getElementById('p1').innerHTML = "Purple-White";}
    if(txt==="i3")
    {document.getElementById('p1').innerHTML = "Yellow-White";}
    if(txt==="i4")
    {document.getElementById('p1').innerHTML = "Yellow-Black";}


}
function style2()
{
    let str = localStorage.getItem('value1');
    if (str==="i1") {
        document.getElementById("hed2").style.background="linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(177,27,83,1) 50%, rgba(201,22,98,1) 100%)"
        document.getElementById("hed").style.background="black";
    const cards = document.querySelectorAll('.card');
    cards.forEach(cr => {
    cr.style.boxShadow="0 3px 20px 0 white";});
    
    }
    
    if (str==="i2") {
        document.getElementById("hed2").style.background=" linear-gradient(0deg, rgba(255,255,255,1) 42%, rgba(136,22,201,1) 100%)"
        document.getElementById("hed").style.background="white";
    const cards = document.querySelectorAll('.card');
    cards.forEach(cr => {
    cr.style.boxShadow="0 3px 20px 0 black";});
    
    }

    if (str==="i3") {
        document.getElementById("hed2").style.background="linear-gradient(0deg, rgba(255,255,255,1) 42%, rgba(177,132,27,1) 100%)"
        document.getElementById("hed").style.background="white";
    const cards = document.querySelectorAll('.card');
    cards.forEach(cr => {
    cr.style.boxShadow="0 3px 20px 0 black";});
    
    }

    if (str==="i4") {
        document.getElementById("hed2").style.background="linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(177,102,27,1) 50%, rgba(201,121,22,1) 100%)"
        document.getElementById("hed").style.background="black";
    const cards = document.querySelectorAll('.card');
    cards.forEach(cr => {
    cr.style.boxShadow="0 3px 20px 0 white";});
    
    }


}