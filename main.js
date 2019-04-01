const gallery = [
    "zombie1.png", // 0
    "zombie2.png", // 1
];

// obtenemos el tiempo inicial
let init_time = Date.now();

function getRandom(limit) {
    return Math.floor((Math.random() * limit) + 1);
}

// la acción del click del zombie
function change_zombie() {
    let zombie_container = document.getElementById("zombie");
    let final_time = Date.now();
    let currentScore = document.getElementById("currentScore");
    currentScore.innerText = `Score actual: ${(final_time - init_time) / 1000}s`;
    const index = Math.random() > 0.5 ? 0 : 1;
    zombie_container.src = gallery[index];
    let final_position_x = `${getRandom(100)}%`;
    let final_position_y = `${getRandom(100)}%`;
    zombie_container.style.left = final_position_x;
    zombie_container.style.top = final_position_y;
    console.log(final_position_x);
    console.log(final_position_y);
    init_time = Date.now();
}

setInterval(function(){
    let final_time = Date.now();
    document.getElementById("realTime").innerText = ((final_time - init_time)/1000) + "s";
}, 20);