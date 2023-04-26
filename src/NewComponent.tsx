import './NewComponent.css';

type NewComponentType = {
    students: StudentType[]
}

type StudentType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentType) => {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <>
            <ul>
                {props.students.map((el) => {
                    return (
                        <li key={el.id}>Name {el.name} Age {el.age}</li>
                    )
                })}
            </ul>
            <h2>Table</h2>
            <table>
                <thead>
                <tr>
                    <td>manufacturer</td>
                    <td>model</td>
                </tr>
                </thead>
                <tbody>
                {topCars.map((el, index) => {
                    index += 1;
                    return (
                        <tr key={index}>
                            <td>{el.manufacturer}</td>
                            <td>{el.model}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}