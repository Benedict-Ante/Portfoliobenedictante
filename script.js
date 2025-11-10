function openImage(imgSrc) {
    document.getElementById("lightbox-img").src = imgSrc;
    document.getElementById("lightbox").style.display = "flex";
}

function closeImage() {
    document.getElementById("lightbox").style.display = "none";
}


window.addEventListener('scroll', function() {
    const skills = document.querySelectorAll('.skill-level');
    const triggerBottom = window.innerHeight * 0.85;

    skills.forEach(skill => {
        const skillTop = skill.getBoundingClientRect().top;

        if(skillTop < triggerBottom){
            skill.style.width = skill.classList.contains('html-css-js') ? '90%' :
                                skill.classList.contains('c-cpp') ? '75%' :
                                skill.classList.contains('troubleshooting') ? '85%' : '0';
        }
    });
});
