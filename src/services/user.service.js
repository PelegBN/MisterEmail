import { utilService } from './util.service.js'

export const userService = {
    getUser,
    setDemoUser,
    validateUser
}

const STORAGE_KEY = 'userDB'
const SECURITY_KEY = 'aSecretKey'

const demoUser = {
    email: 'peleg@misteremail.com',
    fullname: 'Peleg Bar Natan',
    password: 'U2FsdGVkX1/a1ZB0bgiE+dSePwQs2Dy+d3dBrYC1VVI=' // Encryped '1234'
}

function setDemoUser() {
    try {
        utilService.saveToStorage(STORAGE_KEY, { 'email': demoUser.email , 'fullname': demoUser.fullname }) // Creates demo user
        return { success: true, message: "Demo user saved successfully.", data: utilService.loadFromStorage(STORAGE_KEY) };
    } catch (error) {
        return { success: false, message: `Failed to save demo user: ${error.message}` };
    }
}

function getUser() {
    const user = utilService.loadFromStorage(STORAGE_KEY)
    return user
}

function validateUser(email, password) {
    if (email === demoUser.email && password === _decrypt(demoUser.password, SECURITY_KEY)) {
        return true
    } else {
        return false
    }
}

//===== Private functions =====//

// Encrypt function
function _encrypt(text, SECURITY_KEY) {
    return CryptoJS.AES.encrypt(text, SECURITY_KEY).toString();
}

// Decrypt function
function _decrypt(encryptedText, SECURITY_KEY) {
    const bytes = CryptoJS.AES.decrypt(encryptedText, SECURITY_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
}