interface Intern {
    name:string
    age: number
    skills: string[]
}

interface Junior {
    name: string;
    age: number;
    date_of_promotion: Date
    domain: Domain
}

declare enum Domain {
    WEB= "Web",
    CONNECT = "Connect",
    BACKEND = "Backend",
}

export interface Company {
    interns: Intern[]
    juniors: Junior[]
    country: string
}