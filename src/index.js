const bcrypt = require('bcrypt');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function hashPassword() {
    const myPassword = 'my-password-secret';
    const hash = await bcrypt.hash(myPassword, 10);
    console.log('Encrypted password:', hash);
    setTimeout(() => {
        verifyPassword();
    }, 1000);
}

async function verifyPassword() {
    rl.question('Please enter your password: ', async (hash) => {
        const myPassword = 'my-password-secret';
        const comparePassword = await bcrypt.compare(myPassword, hash);
        console.log('Verified password: ', comparePassword);
        rl.close();
    })
}

hashPassword();