const nav=document.querySelector('.navin'),hamb=document.querySelector('.hamb');if(hamb)hamb.onclick=()=>nav.classList.toggle('open');
const slides=[...document.querySelectorAll('.slide')],dots=[...document.querySelectorAll('.dot')];let si=0;function showSlide(n){slides.forEach((x,i)=>x.classList.toggle('active',i===n));dots.forEach((x,i)=>x.classList.toggle('active',i===n));si=n}dots.forEach((d,i)=>d.onclick=()=>showSlide(i));if(slides.length)setInterval(()=>showSlide((si+1)%slides.length),10000);

const form=document.getElementById('loanForm');if(form)form.addEventListener('submit',e=>{e.preventDefault();const n=document.getElementById('name').value.trim(),m=document.getElementById('mobile').value.trim(),c=document.getElementById('city').value.trim(),l=document.getElementById('loanType').value;if(!/^[6-9]\d{9}$/.test(m)){alert('Please enter a valid 10-digit mobile number.');return}const msg=`Loan Enquiry - MN Tech Finsolutions\nName: ${n}\nMobile: ${m}\nCity: ${c}\nLoan Type: ${l}\nApproximate Amount (INR): ${document.getElementById('amount')?.value || 'Not specified'}`;window.open(`https://wa.me/917397270023?text=${encodeURIComponent(msg)}`,'_blank','noopener,noreferrer')});

document.querySelectorAll('.product,.process-card,.review,.partner,.content-card').forEach(el=>{
 el.addEventListener('mousemove',e=>{
   const r=el.getBoundingClientRect();
   el.style.backgroundImage=`radial-gradient(circle at ${e.clientX-r.left}px ${e.clientY-r.top}px, rgba(25,181,233,.10), transparent 120px)`;
 });
 el.addEventListener('mouseleave',()=>el.style.backgroundImage='');
});

// Preselect a product when linked as contact.html?loan=Business%20Loan
const loanParam=new URLSearchParams(location.search).get('loan');const loanSelect=document.getElementById('loanType');if(loanParam&&loanSelect&&[...loanSelect.options].some(o=>o.value===loanParam))loanSelect.value=loanParam;
