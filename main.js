
// at the begin

prompt("Welcome to play our game. \nHere are some functions you may use in this game. \nstart(); You can use this function to start this game.(shortcut: alt + S) \nrestart(); you can restart the game when you are wrong.(shortcut: alt + R) \nmove(\"up\"); move the role up.(shortcut: shift + up) \nmove(\"left\"); move the role left.(shortcut: shift + left) \nmove(\"right\"); move the role right.(shortcut: shift + right) \nmove(\"down\"); move the role down.(shortcut: shift + down) \nshop(); to see the roles. \nbuy(); buy roles \ncheck_money(); see how much dollars you have\nhelper(); see the this manual(shortcut: alt+H)\nEnter any key to continue.");
function helper(){
    prompt("Welcome to play our game. \nHere are some functions you may use in this game. \nstart(); You can use this function to start this game.(shortcut: alt + S) \nrestart(); you can restart the game when you are wrong.(shortcut: alt + R) \nmove(\"up\"); move the role up.(shortcut: shift + up) \nmove(\"left\"); move the role left.(shortcut: shift + left) \nmove(\"right\"); move the role right.(shortcut: shift + right) \nmove(\"down\"); move the role down.(shortcut: shift + down) \nshop(); to see the roles. \nbuy(); buy roles \ncheck_money(); see how much dollars you have\nhelper(); see the this manual(shortcut: alt+H)\nEnter any key to continue");
}
//
// define hash_map & hash_role

let hash_map = [0, 0, 0, 0, 0, 0, 0, 0];
let hash_role = [0, 1, 0, 0, 0];

// define end.

function painting_to_rune(array, n, m){
    function translate(n){
        if(n === 0){
            return blank;
        }else if(n === 1){
            return white(square);
        }else if(n === 2){
            return black(square);
        }else if(n === 3){
            return blue(square);
        }else if(n === 4){
            return brown(square);
        }else if(n === 5){
            return red(square);
        }else if(n === 6){
            return yellow(square);
        }else if(n === 7){
            return orange(square);
        }else if(n === 8){
            return color(square, 0.9, 0.7, 0.7);
        }else if(n === 9){
            return green(square);
        }else{
            prompt("error: when translate map to picture");
        }
    }
    function helper_m(f_n,f_m){
        return f_m === m-1
            ? translate(array[f_n][f_m])
            : beside_frac(1/(m - f_m),
                translate(array[f_n][f_m]),
                helper_m(f_n, f_m + 1)
            );
    }


    function helper_n(f_n){
        return f_n === n-1
            ? helper_m(f_n, 0)
            : stack_frac(1/(n - f_n),
                helper_m(f_n, 0),
                helper_n(f_n +1)
            );
    }

    return helper_n(0);
}


//mario
function get_mario(x){
    const mario_array=
        [
            [0,0,0,0,0,2,2,2,2,2,0,0,0,0,0,0],
            [0,0,0,0,2,5,5,5,5,5,2,2,2,0,0,0],
            [0,0,0,2,5,5,5,5,5,5,5,5,5,2,0,0],
            [0,0,0,2,2,2,1,1,2,1,2,2,2,0,0,0],
            [0,0,2,1,1,2,2,1,2,1,1,1,1,2,0,0],
            [0,0,2,1,1,2,2,1,1,2,1,1,1,2,0,0],
            [0,0,0,2,2,1,1,1,2,2,2,2,2,0,0,0],
            [0,0,0,2,2,2,1,1,1,1,1,2,0,0,0,0],
            [0,0,2,5,5,5,3,3,5,5,2,2,2,0,0,0],
            [0,2,2,5,5,5,5,3,3,5,5,3,5,2,0,0],
            [2,1,1,1,5,5,3,3,3,3,3,3,5,3,2,0],
            [2,1,1,1,3,3,3,3,6,3,3,6,3,3,2,0],
            [0,2,1,1,3,3,3,3,3,3,3,3,4,2,0,0],
            [0,0,2,2,3,3,3,3,3,3,4,4,4,2,0,0],
            [0,2,4,4,4,2,0,0,2,4,4,4,2,0,0,0],
            [0,0,2,2,2,0,0,0,0,2,2,2,0,0,0,0]
        ];
    return painting_to_rune(mario_array, 16, 16);
}
const mario_rune = get_mario(0);

//ironman
function get_ironman(x){
    const ironman_array=
        [
            [0,0,0,0,0,2,2,2,2,2,2,2,2,0,0,0,0],
            [0,0,0,0,2,5,5,5,5,5,5,5,5,2,0,0,0],
            [0,0,0,2,5,6,6,5,5,5,6,6,5,5,2,0,0],
            [0,0,0,2,6,6,6,5,5,5,6,6,6,5,2,0,0],
            [0,0,0,2,6,1,1,6,6,6,1,1,6,5,2,0,0],
            [0,0,0,2,6,6,6,6,6,6,6,6,6,5,2,0,0],
            [0,0,0,2,5,6,6,6,6,6,6,6,5,5,2,0,0],
            [0,0,0,2,5,6,6,2,2,2,6,6,5,5,2,0,0],
            [0,0,0,2,2,5,6,6,6,6,6,5,5,2,2,0,0],
            [0,0,0,0,0,2,2,2,2,2,2,2,2,0,0,0,0],
            [0,0,0,0,2,5,5,5,5,5,5,5,5,2,0,0,0],
            [0,0,0,2,6,2,5,3,3,3,5,5,2,6,2,0,0],
            [0,0,0,2,6,2,5,5,3,5,5,5,2,6,2,0,0],
            [0,0,2,5,2,2,5,5,5,5,5,5,2,2,5,2,0],
            [0,0,2,2,0,2,6,5,5,5,6,6,2,0,2,2,0],
            [0,0,0,0,0,2,2,5,2,2,5,5,2,0,0,0,0],
            [0,0,0,0,0,0,2,2,2,0,2,2,2,0,0,0,0]
        ];
    return painting_to_rune(ironman_array, 17, 17);
}
const ironman_rune = get_ironman(0);

//pikachu
function get_pikachu(x){
    const pikachu_array=
        [
            [2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0],
            [2,2,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0],
            [2,2,6,2,0,0,0,0,0,0,0,0,0,2,6,2,2,0,0,0,0,0],
            [0,2,6,6,2,0,2,2,2,2,2,0,2,6,6,2,0,0,0,0,0,0],
            [0,2,6,6,2,2,6,6,6,6,6,2,2,6,6,2,0,0,0,0,0,0],
            [0,0,2,2,6,6,6,6,6,6,6,6,6,2,2,0,0,0,0,0,0,0],
            [0,0,2,6,6,6,6,6,6,6,6,6,6,6,2,0,0,0,0,0,0,0],
            [0,0,2,2,6,6,6,6,6,6,6,6,6,2,2,0,2,2,2,2,2,2],
            [0,2,6,6,2,2,6,6,6,6,2,2,6,6,6,2,6,6,6,6,6,2],
            [0,2,6,6,2,2,6,6,6,6,2,2,6,6,6,2,6,6,6,6,6,2],
            [0,2,6,5,5,6,6,2,6,6,6,6,5,5,6,2,6,6,6,6,6,2],
            [0,2,6,5,5,6,2,6,2,6,6,6,5,5,6,2,6,6,6,6,6,2],
            [0,0,2,6,6,6,6,6,6,6,6,6,6,6,2,6,2,2,2,2,2,2],
            [0,0,0,2,2,6,6,6,6,6,6,6,2,2,6,6,2,0,0,0,0,0],
            [0,0,0,0,2,6,2,6,6,6,6,6,6,2,6,6,2,0,0,0,0,0],
            [0,0,0,2,6,2,2,6,6,6,6,6,6,6,2,6,6,2,0,0,0,0],
            [0,0,0,2,6,6,6,6,6,6,6,6,6,6,2,6,6,2,0,0,0,0],
            [0,0,2,6,2,6,6,6,6,6,2,2,6,6,2,6,2,0,0,0,0,0],
            [0,0,2,6,6,6,6,6,6,6,2,6,2,6,2,2,0,0,0,0,0,0],
            [0,0,0,2,6,6,6,6,6,6,6,6,6,6,2,0,0,0,0,0,0,0],
            [0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ];
    return painting_to_rune(pikachu_array, 22, 22);
}
const pikachu_rune = get_pikachu(0);

//kirby
function get_kirby(x){
    const kirby_array=
        [
            [0,0,2,2,0,2,2,2,2,2,0,0,0,0,0,0],
            [0,2,8,8,2,8,8,8,8,8,2,2,0,0,0,0],
            [2,8,8,2,8,8,8,8,8,8,8,8,2,0,0,0],
            [2,8,8,8,8,8,2,8,2,8,8,8,8,2,0,0],
            [2,8,8,8,8,8,2,8,2,8,8,8,8,2,0,0],
            [2,8,8,8,8,8,2,8,2,8,8,8,8,8,2,0],
            [2,8,8,5,5,5,8,8,8,5,5,5,8,8,8,2],
            [2,8,8,8,8,8,8,2,8,8,8,8,8,8,8,2],
            [0,2,8,8,8,8,8,2,8,8,8,8,8,8,8,2],
            [0,2,8,8,8,8,8,8,8,8,8,8,2,2,2,0],
            [0,2,8,8,8,8,8,8,8,8,8,2,5,5,5,2],
            [0,0,2,8,8,8,8,8,8,8,2,5,5,5,5,2],
            [0,0,2,2,8,8,8,8,8,8,2,5,5,5,5,2],
            [0,2,5,5,2,2,8,8,8,2,5,5,5,5,2,2],
            [2,5,5,5,5,5,2,2,2,2,2,5,5,2,0,0],
            [0,2,2,2,2,2,2,0,0,0,2,2,2,0,0,0]
        ];
    return painting_to_rune(kirby_array, 16, 16);
}
const kirby_rune = get_kirby(0);


//box
function get_box(x){
    const box_array=
        [
            [2,2,2,2,2,2,2,2,2,2,2],
            [2,2,7,7,7,7,7,7,7,2,2],
            [2,7,2,7,7,7,7,7,2,7,2],
            [2,7,7,2,7,7,7,2,7,7,2],
            [2,7,7,7,2,7,2,7,7,7,2],
            [2,7,7,7,7,2,7,7,7,7,2],
            [2,7,7,7,2,7,2,7,7,7,2],
            [2,7,7,2,7,7,7,2,7,7,2],
            [2,7,2,7,7,7,7,7,2,7,2],
            [2,2,7,7,7,7,7,7,7,2,2],
            [2,2,2,2,2,2,2,2,2,2,2]
        ];
    return painting_to_rune(box_array, 11, 11);
}
const box_rune = get_box(0);

//wall
function get_wall(x){
    const wall_array=
        [
            [4,4,4,4,4,4,4,2,4,4,4,4,4,4,4,4],
            [4,4,4,4,4,4,4,2,4,4,4,4,4,4,4,4],
            [4,4,4,4,4,4,4,2,4,4,4,4,4,4,4,4],
            [4,4,4,4,4,4,4,2,4,4,4,4,4,4,4,4],
            [4,4,4,4,4,4,4,2,4,4,4,4,4,4,4,4],
            [4,4,4,4,4,4,4,2,4,4,4,4,4,4,4,4],
            [4,4,4,4,4,4,4,2,4,4,4,4,4,4,4,4],
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
            [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,2],
            [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,2],
            [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,2],
            [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,2],
            [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,2],
            [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,2],
            [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,2],
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]

        ];
    return painting_to_rune(wall_array, 16, 16);
}
const unit = get_wall(0);
const wall_rune = stack(beside(unit, unit), beside(unit,unit));


//determination
function get_det(x){
    const det_array =
        [
            [0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,6,0,0,0,0,0,0],
            [0,0,0,0,0,0,6,0,0,0,0,0,0],
            [0,0,0,0,0,6,6,6,0,0,0,0,0],
            [0,0,0,0,0,6,6,6,0,0,0,0,0],
            [0,0,0,6,6,6,6,6,6,6,0,0,0],
            [0,6,6,6,6,6,6,6,6,6,6,6,0],//
            [0,0,0,6,6,6,6,6,6,6,0,0,0],
            [0,0,0,0,0,6,6,6,0,0,0,0,0],
            [0,0,0,0,0,6,6,6,0,0,0,0,0],
            [0,0,0,0,0,0,6,0,0,0,0,0,0],
            [0,0,0,0,0,0,6,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0]

        ];
    return painting_to_rune(det_array, 13, 13);
}
const det_rune = get_det(0);

//win
function get_win(x){
    const win_array =
        [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,7,0,0,0,7,0,0,7,7,0,0,7,0,0,7],
            [0,0,7,0,7,0,0,7,0,0,7,0,7,0,0,7],
            [0,0,0,7,0,0,0,7,0,0,7,0,7,0,0,7],
            [0,0,0,7,0,0,0,7,0,0,7,0,7,0,0,7],
            [0,0,0,7,0,0,0,0,7,7,0,0,0,7,7,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,7,0,0,0,7,0,0,7,0,0,7,0,0,0,7],
            [0,7,0,7,0,7,0,0,7,0,0,7,7,0,0,7],
            [0,7,0,7,0,7,0,0,7,0,0,7,0,7,0,7],
            [0,7,0,7,0,7,0,0,7,0,0,7,0,0,7,7],
            [0,0,7,0,7,0,0,0,7,0,0,7,0,0,0,7],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ];
    return painting_to_rune(win_array, 16, 16);
}
const win_rune = get_win(0);


//--------------------------------------------------------
//shop
function get_lock(x){
    const lock_array=
        [
            [0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,2,2,2,0,0,0,0],
            [0,0,0,2,0,0,0,2,0,0,0],
            [0,0,0,2,0,0,0,2,0,0,0],
            [0,0,0,2,2,2,2,2,0,0,0],
            [0,0,2,7,7,7,7,7,2,0,0],
            [0,0,2,7,7,2,7,7,2,0,0],
            [0,0,2,7,7,2,7,7,2,0,0],
            [0,0,2,7,7,7,7,7,2,0,0],
            [0,0,0,2,2,2,2,2,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0]
        ];
    return painting_to_rune(lock_array, 11, 11);
}
const lock = get_lock(0);


function shop(){
    const g1 =
        hash_role[1] === 1
            ? mario_rune
            : overlay(lock, mario_rune);
    const g2 =
        hash_role[2] === 1
            ? kirby_rune
            : overlay(lock, kirby_rune);
    const g3 =
        hash_role[3] === 1
            ? pikachu_rune
            : overlay(lock, pikachu_rune);
    const g4 =
        hash_role[4] === 1
            ? ironman_rune
            :overlay( lock, ironman_rune);

    return show(stack(beside(g1, g2),
        beside(g3, g4)));
}


//------------------------------------------------------
//define the runes

const wall = wall_rune;
const passage = overlay_frac(4/5, blank, green(square));
const box = box_rune;
const deter = overlay_frac(1/100, det_rune,passage);
const win = win_rune;

function choose_character(){
    const x = prompt("Enter a number to choose your role, °¢\n1:Mario \n2:Kirby \n3:Pikachu \n4:Ironman");
    if(x === "1"){
        return mario_rune;
    }else if((x === "2") && (hash_role[2] === 1)){
        return kirby_rune;
    }else if((x === "3") && (hash_role[3] === 1)){
        return pikachu_rune;

    }else if((x === "4") && (hash_role[4] === 1)){
        return ironman_rune;
    }
    else{
        prompt("Please choose the role you have:");
        return choose_character();
    }
}

let character = [overlay_frac(1/100, choose_character(), passage)];



//----------------------------------------------------------
// map define
//test
function map_test(){
    let array_test =
        [
            [1,0,0,0,0,1],
            [1,0,1,4,0,1],
            [1,0,1,2,0,1],
            [1,0,0,3,0,1],
            [1,0,0,0,0,1],
            [1,1,1,1,1,1]

        ];

    let current_local = [1, 3];
    let current_box = 0;
    let box_number = 1;
    let map = [array_test, 6, 6, 0, current_local, current_box, box_number];
    return map;
}

//1
function map_1(){
    let array_1 =
        [
            [1,1,0,0,0,1,1,1],
            [1,1,0,3,0,1,1,1],
            [1,1,0,1,0,0,0,0],
            [0,0,0,2,1,2,3,0],
            [0,3,1,2,4,0,0,0],
            [0,0,0,0,2,0,1,1],
            [1,1,1,0,3,0,1,1],
            [1,1,1,0,0,0,1,1]
        ];

    let current_local = [4, 4];
    let current_box = 0;
    let box_number = 4;
    let map = [array_1, 8, 8, 0, current_local, current_box, box_number];
    return map;
}

//2
function map_2(){
    let array_2 =
        [
            [1,0,0,0,0,0,0,0,1],
            [1,0,1,1,3,3,3,0,1],
            [1,0,1,1,1,0,0,0,0],
            [0,0,0,2,1,1,2,1,0],
            [0,1,1,1,0,1,0,1,0],
            [0,1,2,1,0,1,4,1,0],
            [0,1,1,1,0,0,0,0,0],
            [0,0,0,0,0,1,1,1,1],
            [1,1,1,1,1,1,1,1,1]
        ];

    let current_local = [5, 6];
    let current_box = 0;
    let box_number = 3;
    let map = [array_2, 9, 9, 0, current_local, current_box, box_number];
    return map;
}

//3
function map_3(){
    let array_3 =
        [
            [0,0,0,0,0,1,1,1,1],
            [0,1,1,4,0,1,1,1,1],
            [0,1,2,2,0,1,0,0,0],
            [0,1,2,1,0,1,0,3,0],
            [0,0,0,1,0,0,0,3,0],
            [1,0,0,1,1,1,1,3,0],
            [1,0,1,1,1,0,1,1,0],
            [1,0,1,1,1,0,0,0,0],
            [1,0,0,0,0,0,1,1,1]
        ];

    let current_local = [1, 3];
    let current_box = 0;
    let box_number = 3;
    let map = [array_3, 9, 9, 0, current_local, current_box, box_number];
    return map;
}

//4
function map_4(){
    let array_4 =
        [
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,0,0,0,0,0,0,1],
            [1,0,0,0,1,1,1,1,0,1],
            [0,0,3,1,2,0,0,1,0,0],
            [0,3,3,2,1,2,1,1,4,0],
            [0,3,3,1,2,1,2,1,0,0],
            [0,0,0,0,0,0,1,1,0,1],
            [1,1,1,1,1,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1]
        ];

    let current_local = [4, 8];
    let current_box = 0;
    let box_number = 5;
    let map = [array_4, 10, 10, 0, current_local, current_box, box_number];
    return map;
}


//5
function map_5(){
    let array_5 =
        [
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,0,0,0,0,0,0,0],
            [1,1,0,0,1,1,0,1,4,0],
            [1,1,0,1,1,1,0,1,1,0],
            [1,1,0,2,1,2,1,2,1,0],
            [1,1,0,1,2,0,0,1,1,0],
            [0,0,0,1,2,1,0,1,0,0],
            [0,3,3,3,3,3,1,1,0,1],
            [0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1]
        ];

    let current_local = [2, 8];
    let current_box = 0;
    let box_number = 5;
    let map = [array_5, 10, 10, 0, current_local, current_box, box_number];
    return map;
}

// 6 - mao
const map_6 = () => {
    let array_6 =
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 2, 0, 0, 0, 1, 1, 1, 0],
            [0, 1, 4, 1, 2, 1, 1, 2, 1, 0],
            [0, 1, 3, 3, 0, 1, 2, 1, 0, 0],
            [0, 0, 3, 3, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];

    let current_local = [4, 2];
    let current_box = 0;
    let box_number = 4;
    let map = [array_6, 10, 10, 0, current_local, current_box, box_number];
    return map;
};
//end 6


// 7 - map
const map_7 = () => {
    let array_7 =
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 0, 0],
            [0, 1, 2, 1, 2, 2, 1, 0],
            [0, 3, 3, 3, 3, 3, 3, 0],
            [0, 1, 2, 2, 1, 2, 1, 0],
            [0, 0, 0, 1, 4, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ];

    let current_local = [5, 4];
    let current_box = 0;
    let box_number = 6;
    let map = [array_7, 8, 8, 0, current_local, current_box, box_number];
    return map;
};
//end
//--------------------------------------------------------



function init(){
    const x = prompt("Please enter number 1 to 7 to choose a map:");
    //now_level = x;
    if( x === "1"){
        return pair(1, map_1());
    }else if(x === "2"){
        return pair(2, map_2());
    }else if(x === "3"){
        return pair(3, map_3());
    }else if(x === "4"){
        return pair(4, map_4());
    }else if(x === "5"){
        return pair(5, map_5());
    }else if(x === "6"){
        return pair(6, map_6());
    }else if(x === "7"){
        return pair(7, map_7());
    }else{
        prompt("Please enter 1 to 7. \nEnter any key to continue.");
        return init();
    }
}

let info = init();
let now_x = head(info);
let map = tail(info);

function restart(){
    function helper(){
        if( now_x === 1){
            return  map_1();
        }else if(now_x === 2){
            return  map_2();
        }else if(now_x === 3){
            return map_3();
        }else if(now_x === 4){
            return  map_4();
        }else if(now_x === 5){
            return map_5();
        }else if(now_x === 6){
            return map_6();
        }else if(now_x === 7){
            return map_7();
        }else{
            prompt("error");
            return init();
        }

    }
    map = helper();
    return show(map_to_picture(map));
}


function start(){
    character[0] = overlay_frac(1/100, choose_character(), passage);
    info = init();
    map = tail(info);
    now_x = head(info);
    return show(map_to_picture(map));
}

//--------------------------------------------------------
const get_array = 0;
const get_n = 1;
const get_m = 2;
const get_step = 3;
const get_local = 4;
const get_current_box = 5;
const get_box_number = 6;


// transform data structure to the picture

function map_to_picture(map){
    const array = map[get_array];
    const n = map[get_n];
    const m = map[get_m];

    function translate(n){
        if(n === 0){
            return wall;
        }else if(n === 1){
            return passage;
        }else if(n === 2 || n === 5){
            return box;
        }else if(n === 3){
            return deter;
        }else if(n === 4 || n === 6){
            return character[0];
        }else{
            prompt("error: when translate map to picture");
        }
    }

    function helper_m(f_n,f_m){
        return f_m === m-1
            ? translate(array[f_n][f_m])
            : beside_frac(1/(m - f_m),
                translate(array[f_n][f_m]),
                helper_m(f_n, f_m + 1)
            );
    }


    function helper_n(f_n){
        return f_n === n-1
            ? helper_m(f_n, 0)
            : stack_frac(1/(n - f_n),
                helper_m(f_n, 0),
                helper_n(f_n +1)
            );
    }

    return helper_n(0);
}

// god sys
let money = [0];

const role_prz = [500, 1000, 1500];
const plus_money = x => x + 500;

const buy= () => {
    let id = prompt("plz choose the role you want to buy.\n1:Kirby: 500 \n2:Pikachu: 1000 \n3:Ironman: 1500");
    id = id === "1" ? 1 : id === "2" ? 2 : 3;
    if (hash_role[id + 1] === 1){
        prompt("You have had this role!\nEnter any key to continue.");
    } else {
        if (money[0] >= role_prz[id - 1]){
            money[0] = money[0] - role_prz[id - 1];
            hash_role[id + 1] = 1;
            prompt("buy role succeed\nEnter any key to continue.");
        } else {
            prompt("you don't have enought money\nEnter any key to continue.");
        }
    }
};
//god sys end.


//------------------------------------------------------------------------------
// move ( main function )

const check_can_move = (direction, present_local) => {
    let x = present_local[0];
    let y = present_local[1];
    let delt_x = direction === "up" ? -1 : direction === "down" ? 1 : 0;
    let delt_y = direction === "left" ? -1 : direction === "right" ? 1 : 0;
    x = x + delt_x;
    y = y + delt_y;
    if (map[get_array][x][y] === 1 || map[get_array][x][y] === 3) {
        return true;
    } else {
        if (map[get_array][x][y] === 2 || map[get_array][x][y]===5 ) {
            x = x + delt_x;
            y = y + delt_y;
            if (map[get_array][x][y] === 1  || map[get_array][x][y] === 3){
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
};

const plus_one = step => step + 1;

const move_direction = (direction, present_local) => {
    let x = present_local[0];
    let y = present_local[1];
    let delt_x = direction === "up" ? -1 : direction === "down" ? 1 : 0;
    let delt_y = direction === "left" ? -1 : direction === "right" ? 1 : 0;
    x = x + delt_x;
    y = y + delt_y;
    if (map[get_array][x][y] === 1  || map[get_array][x][y] === 3) {
        map[get_array][x][y] = map[get_array][x][y] === 3 ? 6 : 4;
        map[get_array][x - delt_x][y - delt_y] =  map[get_array][x - delt_x][y - delt_y] === 6 ? 3 : 1;
    } else {
        map[get_array][x - delt_x][y - delt_y] =  map[get_array][x - delt_x][y - delt_y] === 6 ? 3 : 1;
        map[get_array][x][y] = map[get_array][x][y] === 3 || map[get_array][x][y] === 5 ? 6 : 4;
        map[get_array][x + delt_x][y + delt_y] = map[get_array][x + delt_x][y + delt_y]===3 ? 5 : 2;
    }
};

const check_complete = (map, current_number) => {
    return map[get_box_number] === current_number;
};

const change = (map, present_local, step, current_number) => {
    map[get_local] = present_local;
    map[get_step] = step;
    map[get_current_box] = current_number;
    return map;
};

const search_complete = (i, j) => {
    if (i === map[get_n]){
        return 0;
    } else {
        if ( j === map[get_m] ){
            return search_complete(i + 1, 0);
        } else {
            if (map[get_array][i][j] === 5){
                return search_complete(i, j + 1) + 1;
            } else {
                return search_complete(i, j + 1);
            }
        }
    }
};

const present_change = (direction, present_local) => {
    let x = present_local[0];
    let y = present_local[1];
    let delt_x = direction === "up" ? -1 : direction === "down" ? 1 : 0;
    let delt_y = direction === "left" ? -1 : direction === "right" ? 1 : 0;
    x = x + delt_x;
    y = y + delt_y;
    return [x, y];
};

// test function

const throw_error = info =>{
    prompt(info);
};

// end test
const check_money = () => money[0];

const move = direction => {
    let present_local = map[get_local];
    let step = map[get_step];
    if ( check_can_move(direction, present_local) === false ){
        return show(map_to_picture(map) );
    } else {
        move_direction(direction, present_local);
        present_local = present_change(direction, present_local);
        step = plus_one(step);
        current_number = search_complete(0, 0);

        current_number = search_complete(0, 0);

        if (check_complete(map, current_number) === true){
            map = change(map, present_local, step, current_number);
            let pic = map_to_picture(map);
            if (hash_map[now_x] === 0){
                hash_map[now_x] = 1;
                money[0] = plus_money(money[0]);
            } else {
                money = money;
            }
            play(arpeggiator_up(generate_arpeggio("C4", major_arpeggio_interval), 0.1));
            return show(overlay_frac(1/2, win, pic) );
        } else {
            map = change(map, present_local, step, current_number);
            let pic = map_to_picture(map);
            return show(pic);
        }
    }
};

//--------------------------------------------------------------------
//sounds
const major_arpeggio_interval = list(4, 3, 5, 4, 3, 5);
const minor_arpeggio_interval = list(3, 4, 5, 3, 4, 5);

function generate_list_of_note(letter_name, list_of_interval) {
    const basic = letter_name_to_midi_note(letter_name);
    function helper(flag, midi){
        if(!is_null(flag)){
            return pair(midi , helper(tail(flag), midi + head(flag)));
        }else{
            return pair(midi, null);
        }
    }
    return helper(list_of_interval, basic);
}

function list_to_sound(list_of_midi_note, duration) {
    function helper(flag){
        if(!is_null(flag)){
            return pair(sine_sound( midi_note_to_frequency(head(flag)),
                duration),
                helper(tail(flag))
            );
        }else{
            return null;
        }
    }
    return consecutively(helper(list_of_midi_note));
}



function generate_arpeggio(letter_name, list_of_interval) {
    return generate_list_of_note(letter_name, list_of_interval);
}

function arpeggiator_up(arpeggio, duration_each) {
    function list_four(flag, counter){
        if(counter === 4 || is_null(flag) ){
            return null;
        }else{
            return pair(head(flag),
                list_four(tail(flag),
                    counter+1 ));
        }
    }
    function helper( flag){
        if(length(flag) < 4){
            return null;
        }else{
            return append(list_four(flag, 0), helper(tail(flag)));
        }
    }

    return list_to_sound(helper( arpeggio), duration_each);

}

//----------------------------------------

//map = map_7();
show(map_to_picture(map));
