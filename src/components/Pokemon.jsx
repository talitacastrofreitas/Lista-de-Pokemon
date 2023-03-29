function Pokemon ({name}){
    return (
        <h2>Nome do Pokemon: {name || 'Pikachu'} </h2>
    )
}

export default Pokemon