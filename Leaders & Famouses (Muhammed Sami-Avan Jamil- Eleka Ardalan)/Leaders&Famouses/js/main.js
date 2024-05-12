
function myFunction(txt)
{
  let str =txt;
  localStorage.setItem('value1', `${str}`);
  
}

function yes()
{
  let str = localStorage.getItem('value1');
  
  if (str === "mb") {masrurB();}
  if (str === "msb") {masoudB();}
  if (str === "nb") {NechirB();}
  if (str === "mus") {MusB();}
  
}

function masrurB()
{
  var actname="President Masrour Barzani";
  var country="Kurdish President";
  var city="Barzan";
  var workn="";
  var movien="";
  var tvn="";
  var text="Masrour Barzani is a Kurdish politician and serving as prime minister of the Kurdistan Region, an autonomous region in Iraq, since June 2019. He is also the chancellor of the Kurdistan Region Security Council and a member of the Kurdistan Democratic Party";
  var birth="Mar,1969";
  var nickname="";
  var hight="1.78 m";
  var oscars="";

  document.getElementById('actorName').innerHTML = actname;
  document.getElementById('countryActing').innerHTML = country;
  document.getElementById('city').innerHTML = city;
  document.getElementById('aboutInfo').innerHTML = text;
  document.getElementById('actBirth').innerHTML = birth;
  document.getElementById('actNickname').innerHTML = nickname;
  document.getElementById('actHight').innerHTML = hight;
  document.getElementById('workNo').innerHTML = workn;
  document.getElementById('movieNo').innerHTML = movien;
  document.getElementById('tvNo').innerHTML = tvn;
  document.getElementById('oscNo').innerHTML = oscars;
 }

 function masoudB()
 {
   var actname="Mr masoud Barzani";
   var country="Kurdistan";
   var city="Barzan";
   var workn="";
   var movien="";
   var tvn="";
   var text="Masoud Barzani is a Kurdish politician who has been leader of the Kurdistan Democratic Party since 1979, and was President of the Kurdistan Region of Iraq from 2005 to 2017.";
   var birth="Aug,1946";
   var nickname="";
   var hight="1.7 m";
   var oscars="";
   document.getElementById('img2').src = "https://live.staticflickr.com/2667/3674985239_744aec1775_b.jpg";
   document.getElementById('actorName').innerHTML = actname;
   document.getElementById('countryActing').innerHTML = country;
   document.getElementById('city').innerHTML = city;
   document.getElementById('aboutInfo').innerHTML = text;
   document.getElementById('actBirth').innerHTML = birth;
   document.getElementById('actNickname').innerHTML = nickname;
   document.getElementById('actHight').innerHTML = hight;
   document.getElementById('workNo').innerHTML = workn;
   document.getElementById('movieNo').innerHTML = movien;
   document.getElementById('tvNo').innerHTML = tvn;
   document.getElementById('oscNo').innerHTML = oscars;
  }
 
  function NechirB()
 {
   var actname="Nechirvan Barzani";
   var country="Kurdistan";
   var city="Barzan";
   var workn="";
   var movien="";
   var tvn="";
   var text="Nechirvan Idris Barzani is a Kurdish politician serving as the second President of Kurdistan Region, Iraq. He was elected into office by the Kurdistan Region Parliament in June 2019. Nechirvan Barzani was appointed as Vice President of the Kurdistan Democratic Party since 2010";
   var birth="Sep,1966";
   var nickname="";
   var hight="1.84 m";
   var oscars="";
   document.getElementById('img2').src = "https://media.shafaq.com/media/arcella/1692174923705.jpeg";
   document.getElementById('actorName').innerHTML = actname;
   document.getElementById('countryActing').innerHTML = country;
   document.getElementById('city').innerHTML = city;
   document.getElementById('aboutInfo').innerHTML = text;
   document.getElementById('actBirth').innerHTML = birth;
   document.getElementById('actNickname').innerHTML = nickname;
   document.getElementById('actHight').innerHTML = hight;
   document.getElementById('workNo').innerHTML = workn;
   document.getElementById('movieNo').innerHTML = movien;
   document.getElementById('tvNo').innerHTML = tvn;
   document.getElementById('oscNo').innerHTML = oscars;
  }

  function MusB()
  {
    var actname="Mala Mustafa Barzani";
    var country="Kurdistan";
    var city="Barzan";
    var workn=" ";
    var movien=" ";
    var tvn=" ";
    var text="Mustafa Barzani, also known as Mela Mustafa, was a Kurdish leader, general and one of the most prominent political figures in modern Kurdish politics. In 1946, he was chosen as the leader of the Kurdistan Democratic Party to lead the Kurdish revolution against the Kingdom of Iraq.";
    var birth="Mar,1903";
    var nickname="";
    var hight="1.79 m";
    var oscars="";
    document.getElementById('img2').src = "https://www.imago-images.com/bild/st/0053706616/s.jpg";
    document.getElementById('actorName').innerHTML = actname;
    document.getElementById('countryActing').innerHTML = country;
    document.getElementById('city').innerHTML = city;
    document.getElementById('aboutInfo').innerHTML = text;
    document.getElementById('actBirth').innerHTML = birth;
    document.getElementById('actNickname').innerHTML = nickname;
    document.getElementById('actHight').innerHTML = hight;
    document.getElementById('workNo').innerHTML = workn;
    document.getElementById('movieNo').innerHTML = movien;
    document.getElementById('tvNo').innerHTML = tvn;
    document.getElementById('oscNo').innerHTML = oscars;
   }

   

    

    

      