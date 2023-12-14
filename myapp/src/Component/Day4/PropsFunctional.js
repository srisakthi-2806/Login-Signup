/*function PropsFunctional(props)
{
    return (
        <div>
            <h1>My name is {props.name}</h1>
        </div>
    )
}
export default PropsFunctional;*/

function PropsFunctional({college,place})
{
    return(
        <div>
            <h2>I am studying at {college} located at {place}</h2>
        </div>
    )
}
export default PropsFunctional;