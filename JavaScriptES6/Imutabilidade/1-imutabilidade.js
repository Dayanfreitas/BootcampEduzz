const user = {
    name: "Dayan",
    lastName: "Orlando de Freitas"
}

function getUserWithFullName(user) {
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}


const userWithFullName = getUserWithFullName(user)
console.log('userWithFullName', userWithFullName)