import Item from './Item'
function List(){
    return(
        <>
           <h1> Minha lista</h1> 
           <ul>
            <Item marca="Ferrari" anolancamento={1985}/>
            <Item marca ="Fiat" anolancamento={1970}/>
            <Item marca ="renault"/>
            <Item marca ="Chevrolet"anolancamento={1970}/>
           </ul>
        </>
    )
}


export default List