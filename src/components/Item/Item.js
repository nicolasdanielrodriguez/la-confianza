const Item = ({name, precio, stock}) => {
    return (
        <div>
            <h2>Productos</h2>
            <p>Nombre: {name}</p>
            <p>Precio: {precio}</p>
            <p>Stock: {stock}</p>

        </div>
    )
}

export default Item 