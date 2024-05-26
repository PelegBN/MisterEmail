import { utilService } from './util.service.js'

export const userService = {
    getUser
}

const demoUser = { email: 'peleg@misteremail.com', fullname: 'Peleg Bar Natan' }
const STORAGE_KEY = 'userDB'

utilService.saveToStorage(STORAGE_KEY, demoUser) // Creates demo user

function getUser() {
    const user = utilService.loadFromStorage(STORAGE_KEY)
    return user
}