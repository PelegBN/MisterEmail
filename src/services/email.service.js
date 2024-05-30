import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { emailsDemoData } from './emails-demo-data.js'

export const emailService = {
    query,
    save,
    remove,
    getById,
    getFormattedtime
}

const STORAGE_KEY = 'emailDB'

_createEmails()

async function query(filterBy) {
    const emails = await storageService.query(STORAGE_KEY)
    // console.log(emails)
    // if (filterBy) {
    // var { type, maxBatteryStatus, minBatteryStatus, model } = filterBy
    // maxBatteryStatus = maxBatteryStatus || Infinity
    // minBatteryStatus = minBatteryStatus || 0
    // emails = emails.filter(email => email.type.toLowerCase().includes(type.toLowerCase()) && email.model.toLowerCase().includes(model.toLowerCase())
    //     && (email.batteryStatus < maxBatteryStatus)
    //     && email.batteryStatus > minBatteryStatus)
    // }
    return emails
}

function getById(id) {
    return storageService.get(STORAGE_KEY, id)
}

function remove(id) {
    return storageService.remove(STORAGE_KEY, id)
}

function save(emailToSave) {
    if (emailToSave.id) {
        return storageService.put(STORAGE_KEY, emailToSave)
    } else {
        emailToSave.isOn = false
        return storageService.post(STORAGE_KEY, emailToSave)
    }
}

function getFormattedtime(timestamp) {
    if (_isToday(timestamp)) {
        return _getToday(timestamp)
    } else if (_isThisYear(timestamp)) {
        return _getThisYear(timestamp)
    } else {
        return _getFullYear(timestamp)
    }
}

function setIsRead() {

}

function setIsStarred() {

}

// Private functions
function _isToday(timestamp) {
    const date = new Date(timestamp)
    const now = new Date()
    return _isThisMonth(timestamp) &&
        date.getDate() === now.getDate()
}

function _isYesterday(timestamp) {
    const date = new Date(timestamp)
    const now = new Date()
    return _isThisMonth(timestamp) &&
        date.getDate() === now.getDate() - 1
}

function _isThisMonth(timestamp) {
    const date = new Date(timestamp)
    const now = new Date()
    return _isThisYear(timestamp) &&
        date.getMonth() === now.getMonth()
}

function _isThisYear(timestamp) {
    const date = new Date(timestamp)
    const now = new Date()
    return date.getFullYear() === now.getFullYear()
}

function _getToday(timestamp) {
    const date = new Date(timestamp)
    return `
    ${date.getHours()} : ${date.getMinutes()}`
}

function _getMonthName(timestamp) {
    const date = new Date(timestamp)
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return months[date.getMonth()]
}

function _getThisYear(timestamp) {
    const date = new Date(timestamp)
    const month = _getMonthName(timestamp)
    return `${month} ${date.getDate()}`
}

function _getFullYear(timestamp) {
    const date = new Date(timestamp)
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
}

function _createEmail() {
}

function _createEmails() {
    let emails = utilService.loadFromStorage(STORAGE_KEY)
    if (!emails || !emails.length) {
        emails = emailsDemoData.getEmails();
        utilService.saveToStorage(STORAGE_KEY, emails)
    }
}




