var test,test1,Rup,all
var start=100000
var end=100010
var options=''


function one(x){
    return document.getElementById(x); }
function load(){
    
     document.getElementById('demo').style.visibility='hidden';
     document.getElementById('bi').style.visibility='hidden';
     document.getElementById('btn').style.visibility='hidden';
     
    

}
login=()=>
{
    var name = document.getElementById('name').value;
    var pas=document.getElementById('pas').value;
    if (name=='anil' && pas=='123')
    {
   
    window.location.href= 'main.html';
    return false;
    
    }
   
}

price=()=>{
 
    var Rupees= document.getElementById('ticket').value;
   
    if(Rupees=='Monsoon Bumper'){
       
        Rup=200
        price='5 crore'}
     
    if(Rupees=='pournami'){
            Rup=30
           price='70,00000'}
    else if(Rupees=='pournami'){
        Rup=30
        price='70,00000'}

      else if(Rupees=='win win'){
            Rup=30
            price='65,00000'}
           else  if(Rupees=='sthre shakthi'){
                Rup=30
                price='60,0000'}
               else if(Rupees=='Akshaya'){
                    Rup=50
                    price='1coroe'}
                   else  if(Rupees=='karunyaa'){
                        Rup=50
                        price='6 croro'}
       
        test = one("Rupees");  
        test.innerHTML ="<h3> Cost of a ticket is  "+Rup+"rs </h3>";
        test1 = one("price");  
        test1.innerHTML ="<h3>  Winning Price of a ticket is  "+price+"rs </h3>";
        document.getElementById('demo').style.visibility='Visible';
        document.getElementById('bi').style.visibility='Visible';
        document.getElementById('btn').style.visibility='hidden';
        document.getElementById('ne').style.visibility='hidden';

}
vai=()=>{
    var ltnum= document.getElementById('num').value;
    if(ltnum=='kc-112346'){
        test = one("vai");  
        test.className='text-danger'
        price='Ticket is already booked try another one'
        test.innerHTML ="<h3>  "+price+" </h3>";
        one('btn').style.visibility='hidden';
        one('ne').style.visibility='hidden';
    }
    else{
        
        test = one("vai");  
        test.className='text-success'
        price='Selected ticket is available ' 
        test.innerHTML ="<h3>  "+price+" </h3>";
        one('btn').style.visibility='visible'
        one('ne').style.visibility='hidden';
    }
all=ltnum
}
bu=()=>{
    one('ne').style.visibility='visible'
    test = one("disp");  
       test.innerHTML ="<br><h3> you bought ticket number"+"  "+"  "+all+"  For rs   "+Rup+"  </h3>";
    
}
