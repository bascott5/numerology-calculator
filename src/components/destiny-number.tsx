export default function DestinyNumber({user}: any) {
    user = user.toUpperCase();
    user = user.split('');
    for (let i = 0; i < user.length; i += 1) {
        if ((user.includes("A")) || (user.includes("J")) || (user.includes("S"))) {
            user.shift();
            user.push(1);
        } else if ((user.includes("B")) || (user.includes("K")) || (user.includes("T"))) {
            user.shift();
            user.push(2);
        } else if ((user.includes("C")) || (user.includes("L")) || (user.includes("U"))) {
            user.shift();
            user.push(3);
        } else if ((user.includes("D")) || (user.includes("M")) || (user.includes("V"))) {
            user.shift();
            user.push(4);
        } else if ((user.includes("E")) || (user.includes("N")) || (user.includes("W"))) {
            user.shift();
            user.push(5);
        } else if ((user.includes("F")) || (user.includes("O")) || (user.includes("X"))) {
            user.shift();
            user.push(6);
        } else if ((user.includes("G")) || (user.includes("P")) || (user.includes("Y"))) {
            user.shift();
            user.push(7);
        } else if ((user.includes("H")) || (user.includes("Q")) || (user.includes("Z"))) {
            user.shift();
            user.push(8);
        } else if ((user.includes("I")) || (user.includes("R"))) {
            user.shift();
            user.push(9);
        }
    }
    user = user.reduce((num: number, sum: number) => num + sum);
    while(user > 9) {
        user = Array.from(String(user), Number);
        user = user.reduce((num: number, sum: number) => num + sum);
    }

    switch(user) {
        case 1:
            return (
                <h1>4. 1</h1>
            )
        case 2:
            return (
                <h1>4. 2</h1>
            )
        case 3:
            return (
                <h1>4. 3</h1>
            )
        case 4:
            return (
                <h1>4. 4</h1>
            )
        case 5:
            return (
                <h1>4. 5</h1>
            )
        case 6:
            return (
                <h1>4. 6</h1>
            )
        case 7:
            return (
                <h1>4. 7</h1>
            )
        case 8:
            return (
                <h1>4. 8</h1>
            )
        case 9:
            return (
                <h1>4. 9</h1>
            )
        default:
            return (
                <p>Your fate isn't clear, try again.</p>
            )
    }
}