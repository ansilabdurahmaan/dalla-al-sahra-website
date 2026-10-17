
const SUPABASE_URL = "https://tlrcrozxknaclrgshmld.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_VBkz8FC2_UO7-8FEPiuxiw_VYKUaxXy";



// all your photos (they are in the images folder)
var IM=["images/photo-01.jpg", "images/photo-02.jpg", "images/photo-03.jpg", "images/photo-04.jpg", "images/photo-05.jpg", "images/photo-06.jpg", "images/photo-07.jpg", "images/photo-08.jpg", "images/photo-09.jpg", "images/photo-10.jpg", "images/photo-11.jpg", "images/photo-12.jpg", "images/photo-13.jpg", "images/photo-14.jpg", "images/photo-15.jpg", "images/photo-16.jpg", "images/photo-17.jpg", "images/photo-18.jpg"];
var alts=["Host holding a golden dallah","Tray of Arabic teas in gold-rimmed glasses","Luqaimat in a silver bowl","Host serving Arabic coffee to a guest","Presenting a silver incense burner","Tea tray with six cups","Host pouring coffee in a grand hall","Colorful drinks in cocktail glasses","Iced coffee cups with cream and chocolate","Orange juice cups with strawberry flowers","Host carrying a tray of green drinks","Colorful drinks on a mirror tray with yellow roses","Creamy drinks on a gold tray with white flowers","Fruit drinks in glasses on a round tray","Golden glasses on a gold tray","Hosts serving guests in a grand majlis","Chocolate drinks with cream on a gold tray","Orange drinks with mint on a black tray"];

// moving strip + gallery
var tr=document.getElementById('track'),gr=document.getElementById('grid'),h='',g='';
for(var r=0;r<2;r++)IM.forEach(function(s){h+='<img src="'+s+'" alt="">'});
tr.innerHTML=h;
var wideL=[7,14,15],bigL=[0,10];
IM.forEach(function(s,i){var k=bigL.indexOf(i)>-1?' class="big"':(wideL.indexOf(i)>-1?' class="wide"':'');g+='<img'+k+' src="'+s+'" alt="'+alts[i]+'" loading="lazy">'});
gr.innerHTML=g;

// welcome slideshow (top of each photo shown)
(function(){var box=document.getElementById('ss'),SS=["images/slide-01.jpg", "images/slide-02.jpg", "images/slide-03.jpg"],SA=["Host in traditional dress holding a silver and gold dallah", "Host serving Arabic coffee to a guest", "Host pouring coffee in a grand hall"],els=[],cur=0;
SS.forEach(function(u,i){var im=document.createElement('img');im.src=u;im.alt=SA[i];box.appendChild(im);els.push(im)});
els[0].classList.add('on');
if(els.length>1&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){setInterval(function(){els[cur].classList.remove('on');cur=(cur+1)%els.length;els[cur].classList.add('on')},3800)}})();

// menu photos viewer
var mv=document.getElementById('menu-photos');
var mvIO=('IntersectionObserver' in window)?new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');mvIO.unobserve(x.target)}})},{threshold:.12}):null;
mv.querySelectorAll('img').forEach(function(i){if(mvIO)mvIO.observe(i);else i.classList.add('in')});
function mvOpen(e){if(e)e.preventDefault();mv.classList.add('on');mv.scrollTop=0;document.body.style.overflow='hidden'}
function mvClose(){mv.classList.remove('on');document.body.style.overflow=''}
document.querySelectorAll('.mpo').forEach(function(a){a.addEventListener('click',mvOpen)});
document.getElementById('mvx').addEventListener('click',mvClose);
document.addEventListener('keydown',function(e){if(e.key=='Escape')mvClose()});

// click a gallery photo to open it large
var lb=document.getElementById('lb'),li=lb.querySelector('img');
gr.addEventListener('click',function(e){
 if(e.target.tagName=='IMG'){li.src=e.target.src;li.alt=e.target.alt;lb.classList.add('on')}
});
lb.addEventListener('click',function(){lb.classList.remove('on')});
document.addEventListener('keydown',function(e){if(e.key=='Escape')lb.classList.remove('on')});

// booking form sends the details to your WhatsApp
document.getElementById('f').addEventListener('submit',function(e){
 e.preventDefault();
 var d=new FormData(this);
 var m='Hello Dalla Al-Sahra, I would like to book an event.'
  +'\nName: '+d.get('n')
  +'\nPhone: '+d.get('p')
  +'\nEmail: '+(d.get('e')||'-')
  +'\nDate: '+d.get('d')
  +'\nTime: '+(d.get('t')||'-')
  +'\nEvent: '+(d.get('k')||'-');
 window.open('https://wa.me/971552336249?text='+encodeURIComponent(m),'_blank');
 document.getElementById('ok').style.display='block';
 this.reset();
});

// menu items slide in a little from left to right while scrolling
var lis=document.querySelectorAll('.cols li');
if('IntersectionObserver' in window){
 var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.2});
 document.querySelectorAll('.cols ul').forEach(function(ul){ul.querySelectorAll('li').forEach(function(li,i){li.style.transitionDelay=(i*70)+'ms';io.observe(li)})});
}else{lis.forEach(function(l){l.classList.add('in')})}

// services: first card shows in the center, the others come one under another while scrolling and stay
var cards=document.querySelectorAll('.card');
if('IntersectionObserver' in window){
 var so=new IntersectionObserver(function(es){
  var k=0;es.forEach(function(x){if(x.isIntersecting){x.target.style.transitionDelay=(k*350)+'ms';x.target.classList.add('in');so.unobserve(x.target);k++}});
 },{threshold:.3});
 cards.forEach(function(cd){so.observe(cd)});
}else{cards.forEach(function(cd){cd.classList.add('in')})}

// gallery photos move in while scrolling
var gi=gr.querySelectorAll('img');
if('IntersectionObserver' in window){
 var go=new IntersectionObserver(function(es){var k=0;es.forEach(function(x){if(x.isIntersecting){x.target.style.transitionDelay=(k*120)+'ms';x.target.classList.add('in');go.unobserve(x.target);k++}})},{threshold:.15});
 gi.forEach(function(im){go.observe(im)});
}else{gi.forEach(function(im){im.classList.add('in')})}
