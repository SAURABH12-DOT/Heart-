const scene = document.querySelector(".scene");

function burst() {
    for (let i = 0; i < 90; i++) {

        const particle = document.createElement("i");
        particle.className = "particle";

        const angle = Math.random() * Math.PI * 2;
        const distance = 80 + Math.random() * 190;

        particle.style.left = "50%";
        particle.style.top = "50%";

        scene.appendChild(particle);

        particle.animate(
            [
                {
                    transform: "translate(-50%, -50%) scale(.2)",
                    opacity: 0
                },
                {
                    transform:
                        `translate(
                            calc(-50% + ${Math.cos(angle) * distance}px),
                            calc(-50% + ${Math.sin(angle) * distance}px)
                        ) scale(1)`,
                    opacity: 1
                },
                {
                    transform:
                        `translate(
                            calc(-50% + ${Math.cos(angle) * (distance + 35)}px),
                            calc(-50% + ${Math.sin(angle) * (distance + 35)}px)
                        ) scale(0)`,
                    opacity: 0
                }
            ],
            {
                duration: 1500 + Math.random() * 700,
                easing: "cubic-bezier(.2,.7,.2,1)"
            }
        );

        setTimeout(() => {
            particle.remove();
        }, 2300);
    }
}


// Floating glowing particles
function floatingParticle() {

    const particle = document.createElement("i");

    particle.className = "particle";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.top = "105%";

    scene.appendChild(particle);

    particle.animate(
        [
            {
                transform: "translateY(0)",
                opacity: 0
            },
            {
                opacity: 1
            },
            {
                transform:
                    `translate(
                        ${Math.random() * 120 - 60}px,
                        -${window.innerHeight + 100}px
                    )`,
                opacity: 0
            }
        ],
        {
            duration: 5000 + Math.random() * 2500
        }
    );

    setTimeout(() => {
        particle.remove();
    }, 8000);
}


// Page load particle explosion
burst();


// Automatic heart particle bursts
setInterval(() => {
    burst();
}, 3600);


// Continuous floating particles
setInterval(() => {
    floatingParticle();
}, 180);


// Tap / click anywhere → particle explosion
scene.addEventListener("click", () => {
    burst();
});
