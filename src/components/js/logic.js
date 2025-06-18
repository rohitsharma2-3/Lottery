function genRandomNumber(n) {
    let num = new Array()
    for (let i = 0; i <= n; i++) {
        num[i] = Math.floor(Math.random() * 10)
    }
    return num
}

function sum(ticket) {
    return ticket.reduce((acc, curr) => acc + curr, 0)
}

export { genRandomNumber, sum }