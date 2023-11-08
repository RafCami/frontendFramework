const RepositoryDetail = () => {
    return (
        <>
            <h1><span>&lt;</span> </h1>

            {/* Beschrijving */}
            <p></p>

            <div className="branches">
                <div>
                    <h3>Branches</h3>

                    <div>
                        <div>
                            <input type={'checkbox'}/>
                            <label>Show all commits</label>
                        </div>

                        <div>
                            <input type={'checkbox'}/>
                            <label>Only show my commits</label>
                        </div>
                    </div>

                </div>
                <div>
                    {/* Rechter kolom */}
                </div>
            </div>

        </>
    )
}

export default RepositoryDetail
