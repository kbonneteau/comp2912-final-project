let database = {
    
    "cindy@mail.com": {
        id: "1",
        firstName: "Cindy",
        userIcon: '',
        friends: ["2"],
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
        firstName: "Alex",
        userIcon: '',
        friends: ["1",],
        reminders: [
            {
                id: 5, 
                title: "Plan trip", 
                description: "Put together a trip plan: travel tickets & accomodation", 
                completed: false, 
                tags: ["family", "important"], 
                tasks: ["bananas", "apples", "grapes"],
            },
            {
                id: 6, 
                title: "Sleeping", 
                description: "Replenish energy after finals!", 
                completed: false, 
                tags: ["family", "important"], 
                tasks: ["bananas", "apples", "grapes"],
            }
        ]
    },
    "jack@mail.com": {
        id: "3",
        firstName: "Jack",
        userIcon: '',
        friends: [],
        reminders: [
            {
                id: 10, 
                title: "Sleep in", 
                description: "Sleep in this weekend", 
                completed: true, 
                tags: ["family", "important"], 
                tasks: ["bananas", "apples", "grapes"],
            },
        ]
    },
    "kate@mail.com": {
        id: "4",
        firstName: "Kate",
        userIcon: '',
        friends: [],
        reminders: [
            {
                id: 15, 
                title: "Workout", 
                description: "Yoga 30 minutes this morning", 
                completed: true, 
                tags: ["family", "important"], 
                tasks: ["bananas", "apples", "grapes"],
            },
        ]
    }
}

module.exports = database;