/**
 * Een modaal venster dat gebruikt kan worden om een nieuw repository aan te maken.
 *
 * @param projectId {string} Het id van het project waarin het nieuwe repository aangemaakt moet worden.
 * @param show {boolean} Bepaald of het modaal venster al dan niet getoond wordt.
 * @param closeHandler {() => void} Een functie die opgeroepen wordt als het modaal venster gesloten wordt, zowel als
 * het venster gesloten wordt door het formulier in te dienen als wanneer het venster gesloten wordt door op de cancel
 * knop te drukken.
 */
const NewRepoModal = ({projectId, show, closeHandler}) => {

    const formSubmit = (evt) => {
        evt.preventDefault()
        _closeHandler()
    }

    if (!show) {
        return <></>
    }

    const _closeHandler = () => {
       if (closeHandler) {
           closeHandler()
       }
    }

    return (
        <div className='modal'>
            <h3>New repo</h3>

            <form onSubmit={formSubmit}>
                <label>Name</label>
                <input type="text"/>

                <label>Description</label>
                <input type="text"/>

                <button type={'submit'}>Create repository</button>
            </form>
            <button onClick={_closeHandler}>Cancel</button>
        </div>
    )
}

export default NewRepoModal
