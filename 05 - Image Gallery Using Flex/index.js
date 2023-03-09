let panels = Array.from(document.querySelectorAll('.panel'));

panels.forEach(function(panel) {  
    panel.addEventListener('click', function() {
        panels.forEach(p => {
            p.classList.remove('open')
        });
        panel.classList.add('open');
    })
    panel.addEventListener('transitionend', function(event) {
        if (panel.classList.contains('open')) {
            panel.children[0].classList.add("inhere","active");
            panel.children[1].classList.add('active');
            panel.children[2].classList.add("inhere","active");
        }
        else {
            panel.children[0].classList.remove("inhere","active");
            panel.children[1].classList.remove('active');
            panel.children[2].classList.remove("inhere","active");
        }
    })
})