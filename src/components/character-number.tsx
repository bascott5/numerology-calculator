export default function CharacterNumber({user}: any) {
    let consonants: number = 0;
    user = user.toUpperCase();
    for (let i = 0; i < user.length; i++) {
        if ((user[i].includes("B")) || (user[i].includes("C")) || (user[i].includes("D")) || (user[i].includes("F")) || (user[i].includes("G")) || (user[i].includes("H")) || (user[i].includes("J")) || (user[i].includes("K")) || (user[i].includes("L")) || (user[i].includes("M")) || (user[i].includes("N")) || (user[i].includes("P")) || (user[i].includes("Q")) || (user[i].includes("R")) || (user[i].includes("S")) || (user[i].includes("T")) || (user[i].includes("V")) || (user[i].includes("W")) || (user[i].includes("X")) || (user[i].includes("Y")) || (user[i].includes("Z"))) {
            consonants += 1;
        }
    }
    user = Math.floor(consonants / 2);
    while(user > 9) {
        user = user.toString().split('').map(Number);
        user = user.reduce((num: number, sum: number) => num + sum);
    }

    switch(user) {
        case 1:
            return (
                <h1>6. 1</h1>
            )
        case 2:
            return (
                <h1>6. 2</h1>
            )
        case 3:
            return (
                <h1>6. 3</h1>
            )
        case 4:
            return (
                <h1>6. 4</h1>
            )
        case 5:
            return (
                <h1>6. 5</h1>
            )
        case 6:
            return (
                <h1>6. 6</h1>
            )
        case 7:
            return (
                <h1>6. 7</h1>
            )
        case 8:
            return (
                <h1>6. 8</h1>
            )
        case 9:
            return (
                <h1>6. 9</h1>
            )
        default:
            return (
                <p>Your fate isn't clear, try again.</p>
            )
    }
}