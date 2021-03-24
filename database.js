let database = {
    
    "cindy@mail.com": {
        id: "1",
        firstName: "Cindy",
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
        reminders: []
    } 
}

module.exports = database;