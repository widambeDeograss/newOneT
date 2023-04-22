export const UserUrls = {
    userLogin:"http://128.199.15.73:7700/api/auth/login",
    userRegister: "http://128.199.15.73:7700/api/auth/register-user",
    AllUserCostomers: "http://128.199.15.73:7700/api/v1/list-users",
    userById: "http://128.199.15.73:7700/api/v1/user/",
}

export const  BooksUrls = {
    allBooks: "http://128.199.15.73:7700/api/v1/books",
    UserSubscribedBooks: "http://192.168.145.135:8000/userBooks/",
    addBooks: "http://128.199.15.73:7700/api/v1/books",
    BookSubscription: "http://128.199.15.73:7700/api/v1/book-subscriptions",
    AllSubscriptions: "http://128.199.15.73:7700/api/v1/list-book-subscriptions",
    SubscriptionById: "http://128.199.15.73:7700/api/v1/book-subscription/",
    SingleBook:"http://128.199.15.73:7700/api/v1/book/"
}

export const RoleUrls = {
    dashboardStatistics: "http://128.199.15.73:7700/api/v1/dashboard-statistics",
    changeStatus: "http://localhost:8010/api/change-status",
    reset: "http://localhost:8010/api/reset",
    get: "http://localhost:8010/api/",
    getAll: "http://localhost:8010/api/list"
}


export const ApplicationUrls = {
    createOrUpdate: "http://localhost:8010/api/application/create",
    changeStatus: "http://localhost:8010/api/application/change-status",
    reset: "http://localhost:8010/api/application/reset",
    get: "http://localhost:8010/api/application/",
    getAll: "http://localhost:8010/api/application/list",
    enroll: "http://localhost:8010/api/application/enroll",
}
