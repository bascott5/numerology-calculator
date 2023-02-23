export default function BirthdayNumber({user}: any) {
    user = user.substring(0, 2);
    user = user.split('');
    user = user.map(Number);
    user = user.reduce((num: number, sum: number) => num + sum);
    while (user > 9) {
        user = Array.from(String(user), Number);
        user = user.reduce((num: number, sum: number) => num + sum);
    }

    switch(user) {
        case 1:
            return (
                <h1>2. 1</h1>
            )
        case 2:
            return (
                <h1>2. 2</h1>
            )
        case 3:
            return (
                <h1>2. 3</h1>
            )
        case 4:
            return (
                <h1>2. 4</h1>
            )
        case 5:
            return (
                <h1>2. 5</h1>
            )
        case 6:
            return (
                <h1>2. 6</h1>
            )
        case 7:
            return (
                <h1>2. 7</h1>
            )
        case 8:
            return (
                <h1>2. 8</h1>
            )
        case 9:
            return (
                <h1>2. 9</h1>
            )
        default:
            return (
                <p>Your fate isn't clear, try again.</p>
            )
    }
}