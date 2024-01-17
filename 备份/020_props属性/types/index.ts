// 定义一个接口，用来限制Person对象的属性
 export interface Person {
    id: string,
    name: string,
    age: number
}

export type Persons = Array<Person>
// type Persons = Person[]
