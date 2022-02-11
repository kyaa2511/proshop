import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jean Luc',
        email: 'picard@starfleet.com',
        password: bcrypt.hashSync('makeitso', 10),

    },
    {
        name: 'Yoda',
        email: 'meangreen@jedicouncil.com',
        password: bcrypt.hashSync('Mmmmmmm', 10),

    },
]

export default users