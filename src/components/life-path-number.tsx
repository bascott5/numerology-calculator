export default function LifePathNumber({user}: any) {
    user = user.split('');
    user = user.map(Number);
    user = user.reduce((num: number, sum: number) => num + sum);
        while (user > 9) {
            if ((user != 11) && (user != 22) && (user != 33)) {
                user = Array.from(String(user), Number);
                user = user.reduce((num: number, sum: number) => num + sum);
            }
        }
    switch(user) {
        case 1:
            return (
                <h1>1. Individualism</h1>
            )
        case 2:
            return (
                <h1>1. Partnership</h1>
            )
        case 3:
            return (
                <h1>1. Creativity</h1>
            )
        case 4:
            return (
                <h1>1. Work</h1>
            )
        case 5:
            return (
                <h1>1. Adventure</h1>
            )
        case 6:
            return (
                <h1>1. Service</h1>
            )
        case 7:
            return (
                <h1>1. Mysticism</h1>
            )
        case 8:
            return (
                <h1>1. Power</h1>
            )
        case 9:
            return (
                <h1>1. Wisdom</h1>
            )
        case 11:
            return (
                <h1>1. Brilliance</h1>
            )
        case 22:
            return (
                <h1>1. Community</h1>
            )
        case 33:
            return (
                <h1>1. Artistry</h1>
            )
        default:
            return (
                <p>Your fate isn't clear, try again.</p>
            )
        }
}

//Birthday Number: take the day you were born, and if it's double digits, add the two digits together to find your birthday number
//Initial Impression Number: add birth day and month then minimizing to a single digit
//Destiny Number: each letter in the alphabet represents a certain number, add all of the letters in your full name then minimize if double digit
//Inner Soul Number: add all of the vowel sounds in your full name then divide by a single figure
//Character Number: add all consonant clusters in full name then divide by two