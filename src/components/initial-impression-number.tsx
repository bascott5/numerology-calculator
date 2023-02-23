export default function InitialImpressionNumber({user}: any) {
    user = user.substring(0, 4);
    user = parseInt(user);
    user = Math.floor((user / 100) + (user % 100));
    while (user > 9) {
        user = Array.from(String(user), Number);
        user = user.reduce((num: number, sum: number) => num + sum);
    }
    
    switch(user) {
        case 1:
            return (
                <h1>3. 1</h1>
            )
        case 2:
            return (
                <h1>3. 2</h1>
            )
        case 3:
            return (
                <h1>3. 3</h1>
            )
        case 4:
            return (
                <h1>3. 4</h1>
            )
        case 5:
            return (
                <h1>3. 5</h1>
            )
        case 6:
            return (
                <h1>3. 6</h1>
            )
        case 7:
            return (
                <h1>3. 7</h1>
            )
        case 8:
            return (
                <h1>3. 8</h1>
            )
        case 9:
            return (
                <h1>3. 9</h1>
            )
        default:
            return (
                <p>Your fate isn't clear, try again.</p>
            )
    }
}