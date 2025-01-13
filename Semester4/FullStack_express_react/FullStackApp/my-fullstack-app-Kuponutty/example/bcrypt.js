import bcrypt from 'bcrypt';

bcrypt.hash('myPassword', 10, (err, hash) => {
    console.log(hash);
});