const rejection = ['Stop it, Karen!', 'mooom, let me sleep!', 'Dont bother me you imbacill', 'Go home and let me be', 'Hey Karen, shut up and call someone else!', 'No Karen, i dont wanna play with you today'  ]

function randomRejection() {
    return rejection[Math.floor(Math.random() * rejection.length)];
}

function createRejection() {
    return randomRejection();
}

module.exports = { createRejection };
