type fakeUserProps = {
    id: number;
    email: string;
    password: string;

}

const fakeUsers: fakeUserProps[] = [
        {
            id: 1,
            email: "marcelo.bracet1@gmail.com",
            password: "marcelo123"
        }, 
        {
            id: 2,
            email: "joaoviniciusvitral@hotmail.com",
            password: "joao123"
        }
]

export const api = {
    
    login: (email: string, password: string): boolean => {
        if(fakeUsers.find(user => user.email === email && user.password === password)){
            return true
        }
        
        return false
    },
    
    register: (email: string, password: string): boolean => {
        if (fakeUsers.find(user => user.email === email)) {
            console.error("Email already exists")
            return false
        }
        
        alert("User registered")
        fakeUsers.push({id: fakeUsers.length + 1, email, password})
        return true
    }
    
    
}