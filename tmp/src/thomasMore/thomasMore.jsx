const ThomasMore = () => {

    // ROEP JE FILTER COMPONENTEN IN DEZE DIV OP.
    const filters = (
        <div className="filter-selection">

        </div>
    )

    return (
        <>
            <h1>Programs at Thomas More</h1>

            <div className='filters'>
                {/* ZET HIER DE KNOP OM DE FILTERS TE VERBERGEN/TONEN. */}
                {filters}
            </div>
        </>
    )
}

export default ThomasMore
