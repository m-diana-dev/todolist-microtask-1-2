type NewComponentType = {
    students: StudentType[]
}

type StudentType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentType) => {
    return(
        <ul>
            {props.students.map((el) => {
                return(
                    <li key={el.id}>Name {el.name} Age {el.age}</li>
                )
            })}
        </ul>
    )
}