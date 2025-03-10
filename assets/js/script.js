document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnTell').addEventListener('click', function(e) {
        const textOBJ = document.getElementById('text');

        textOBJ.innerHTML = 'Wait HOW did you know that?';
        textOBJ.style.color = 'red';
        document.body.style.backgroundColor = 'black';
        document.getElementById('title').innerHTML = 'The end is coming...';
        document.getElementById('btnTell').style.display = 'none';
        setTimeout(function() {
            textOBJ.innerHTML = 'You love arduino?, I love arduino too!';
            textOBJ.style.color = 'white';
            document.body.classList.add("arduino");
            document.getElementById('title').innerHTML = 'Good ending';
        }, 60000);
    });
});