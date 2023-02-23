export default function InnerSoulNumber({user}: any) {
    let vowels: number = 0;
    user = user.toUpperCase();
    for (let i = 0; i < user.length; i++) {
        if ((user[i].includes("A")) || (user[i].includes("E")) || (user[i].includes("I")) || (user[i].includes("O")) || (user[i].includes("U"))) {
            vowels += 1;
        }
    }
    user = vowels;
    while(user > 9) {
        user = user.toString().split('').map(Number);
        user = user.reduce((num: number, sum: number) => num + sum);
    }
    
    switch(user) {
        case 1:
            return (
                <h1>5. 1</h1>
            )
        case 2:
            return (
                <h1>5. 2</h1>
            )
        case 3:
            return (
                <h1>5. 3</h1>
            )
        case 4:
            return (
                <h1>5. 4</h1>
            )
        case 5:
            return (
                <h1>5. 5</h1>
            )
        case 6:
            return (
                <h1>5. 6</h1>
            )
        case 7:
            return (
                <h1>5. 7</h1>
            )
        case 8:
            return (
                <h1>5. 8</h1>
            )
        case 9:
            return (
                <h1>5. 9</h1>
            )
        default:
            return (
                <p>Your fate isn't clear, try again.</p>
            )
    }
}