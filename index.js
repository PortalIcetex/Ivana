const si = document.querySelector('#si');

si.addEventListener('click',function(){
    alert('Salgo a las 7 :3')
});

const no = document.querySelector('#no');
no.addEventListener('mouseover', function(){
    const x = parseInt(Math.random()*100);
    const y = parseInt(Math.random()*100);
    no.style.setProperty('top',y+'%');
    no.style.setProperty('left',x+'%');
    no.style.setProperty('transform', 'traslate(-${x}%,-${y}%)');
});