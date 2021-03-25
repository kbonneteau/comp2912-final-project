let database = {
    
    "cindy@mail.com": {
        id: "1",
        firstName: "Cindy",
        userIcon: '',
        reminders: [
            {
                id: 1, 
                title: "grocery", 
                description: "buy groceries", 
                completed: false, 
                tags: ["family", "important"], 
                tasks: ["bananas", "apples", "grapes"],
        }]
    },
    "alex@mail.com": {
        id: "2",
        firstName: "alex",
        userIcon: '',
        reminders: []
    } 
}

module.exports = database;