const dots = document.getElementsByClassName("dot");
const disappear = "#8B0210";
const dice1 = [dots[0], dots[1], dots[2], dots[3], dots[4], dots[5], dots[6]];
const dice2 = [dots[7], dots[8], dots[9], dots[10], dots[11], dots[12], dots[13]];
const switcher = (list, arr) => {
    for (let i = 0; i < 7; i++) {
        if (list.includes(i)) {
            arr[i].style.backgroundColor = "white";
        }
        else {
            arr[i].style.backgroundColor = disappear;
        }
    }
};
const controller = (val, arr) => {
    switch (val) {
        case 1:
            switcher([3], arr);
            break;
        case 2:
            switcher([1, 5], arr);
            break;
        case 3:
            switcher([1, 3, 5], arr);
            break;
        case 4:
            switcher([0, 1, 5, 6], arr);
            break;
        case 5:
            switcher([0, 1, 3, 5, 6], arr);
            break;
        case 6:
            switcher([0, 2, 5, 1, 4, 6], arr);
            break;
    }
};
window.addEventListener("load", () => {
    let a = Math.floor(Math.random() * 6) + 1;
    let b = Math.floor(Math.random() * 6) + 1;
    console.log(a);
    console.log(b);
    controller(a, dice1);
    controller(b, dice2);
    if (a > b) {
        let h1 = document.getElementsByTagName("h1");
        h1[0].innerHTML = "🚩Player 1 Wins";
    }
    else if (a < b) {
        let h1 = document.getElementsByTagName("h1");
        h1[0].innerHTML = "Player 2 Wins!🚩";
    }
    else {
        let h1 = document.getElementsByTagName("h1");
        h1[0].innerHTML = "🏁Draw🏁";
    }
});
