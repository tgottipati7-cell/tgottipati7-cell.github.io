const container =
document.getElementById("particles");

for(let i = 0; i < 100; i++){

    const particle =
    document.createElement("div");

    particle.style.position = "absolute";

    particle.style.width = "2px";
    particle.style.height = "2px";

    particle.style.background =
    "rgba(255,255,255,.4)";

    particle.style.left =
    Math.random()*100 + "%";

    particle.style.top =
    Math.random()*100 + "%";

    particle.style.borderRadius =
    "50%";

    particle.style.animation =
    `float ${5 + Math.random()*10}s linear infinite`;

    container.appendChild(particle);
}

const style =
document.createElement("style");

style.innerHTML = `
@keyframes float{

    0%{
        transform:
        translateY(0px);
    }

    100%{
        transform:
        translateY(-100vh);
    }
}
`;

document.head.appendChild(style);
