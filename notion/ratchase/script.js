document.addEventListener('mousemove', function(event) {
    const cat = document.getElementById('cat');
    const mouseX = event.pageX;
    const mouseY = event.pageY;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const catWidth = cat.offsetWidth;
    const catHeight = cat.offsetHeight;

    let newX = mouseX - catWidth / 2;
    let newY = mouseY - catHeight / 2;

    newX = Math.max(0, Math.min(newX, viewportWidth - catWidth));
    newY = Math.max(0, Math.min(newY, viewportHeight - catHeight));

    cat.style.transition = 'transform 0.5s ease-out'; 
    cat.style.transform = `translate(${newX}px, ${newY}px)`;
});

document.addEventListener('mousemove', function(event) {
    const fish = document.getElementById('fish');
    fish.style.left = event.pageX + 'px';
    fish.style.top = event.pageY + 'px';
});
