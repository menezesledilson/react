import PropTypes from 'prop-types'

function Item({marca, anolancamento}){
    return(
        <>
        <li>{marca} - {anolancamento}</li>
        </>
    )
}
Item.propTypes ={
    marca: PropTypes.string.isRequired,
    anolancamento:PropTypes.number,
}
Item.defaultProps = {
    marca: 'Faltou a marca', 
    anolancamento:0,
}

export default Item