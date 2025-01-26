// eslint-disable-next-line react/prop-types
export function Welcome({ name, age }) {
    return <div> 
        <h2> Welcome,{name} </h2>
        <p>You are {age + 1} years old </p>
        </div>
}