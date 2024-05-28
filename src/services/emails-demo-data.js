export const emailsDemoData = {
    getEmails
}

const demoEmails = [
    {
        id: 'e101',
        subject: 'Subject One',
        body: 'Body one',
        isRead: _randBool(),
        isStarred: _randBool(),
        sentAt: _randomDate(),
        removedAt: null, //for later use 
        from: 'one@one.com',
        to: 'peleg@mistermail.com'
    }, {
        id: 'e102',
        subject: 'Subject Two',
        body: 'Body Two',
        isRead: _randBool(),
        isStarred: _randBool(),
        sentAt: _randomDate(),
        removedAt: null, //for later use 
        from: 'two@two.com',
        to: 'peleg@mistermail.com'
    }, {
        id: 'e103',
        subject: 'Subject Three',
        body: 'Body Three',
        isRead: _randBool(),
        isStarred: _randBool(),
        sentAt: _randomDate(),
        removedAt: null, //for later use 
        from: 'three@three.com',
        to: 'peleg@mistermail.com'
    }, {
        id: 'e104',
        subject: 'Subject Four',
        body: 'Body Four',
        isRead: _randBool(),
        isStarred: _randBool(),
        sentAt: _randomDate(),
        removedAt: null, //for later use 
        from: 'four@four.com',
        to: 'peleg@mistermail.com'
    }, {
        id: 'e105',
        subject: 'Subject Five',
        body: 'Body Five',
        isRead: _randBool(),
        isStarred: _randBool(),
        sentAt: _randomDate(),
        removedAt: null, //for later use 
        from: 'five@five.com',
        to: 'peleg@mistermail.com'
    }, {
        id: 'e106',
        subject: 'Subject Six',
        body: 'Body Six',
        isRead: _randBool(),
        isStarred: _randBool(),
        sentAt: _randomDate(),
        removedAt: null, //for later use 
        from: 'six@six.com',
        to: 'peleg@mistermail.com'
    }, {
        id: 'e107',
        subject: 'Subject Seven',
        body: 'Body Seven',
        isRead: _randBool(),
        isStarred: _randBool(),
        sentAt: _randomDate(),
        removedAt: null, //for later use 
        from: 'seven@seven.com',
        to: 'peleg@mistermail.com'
    }, {
        id: 'e108',
        subject: 'Subject Eight',
        body: 'Body Eight',
        isRead: _randBool(),
        isStarred: _randBool(),
        sentAt: _randomDate(),
        removedAt: null, //for later use 
        from: 'eight@eight.com',
        to: 'peleg@mistermail.com'
    }, {
        id: 'e109',
        subject: 'Subject Nine',
        body: 'Body Nine',
        isRead: _randBool(),
        isStarred: _randBool(),
        sentAt: _randomDate(),
        removedAt: null, //for later use 
        from: 'nine@nine.com',
        to: 'peleg@mistermail.com'
    }, {
        id: 'e110',
        subject: 'Subject Ten',
        body: 'Body Ten',
        isRead: _randBool(),
        isStarred: _randBool(),
        sentAt: _randomDate(),
        removedAt: null, //for later use 
        from: 'ten@ten.com',
        to: 'peleg@mistermail.com'
    }, {
        id: 'e111',
        subject: 'Subject Eleven',
        body: 'Body Eleven',
        isRead: _randBool(),
        isStarred: _randBool(),
        sentAt: _randomDate(),
        removedAt: null, //for later use 
        from: 'eleven@eleven.com',
        to: 'peleg@mistermail.com'
    }
]

function getEmails() {
    return demoEmails
}

// Private functions
function _randBool() { 
    return Math.random() >= 0.5
 }

function _randomDate() {
    const startDate = new Date(2020, 0, 1)
    const endDate = new Date()
    return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))
}