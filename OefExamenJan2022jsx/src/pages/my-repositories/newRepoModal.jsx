import { useEffect, useRef, useState } from "react"
import { useCreateRepository } from "../../api/repositoriesAPI"

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
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const nameRef = useRef()
    const {mutate: createRepo} = useCreateRepository()

    useEffect(() => {
        if (name === '' && description === '') nameRef?.current?.focus()
    })

    const formSubmit = (evt) => {
        evt.preventDefault()
        createRepo({projectId, name, description})
        _closeHandler()
    }

    if (!show) {
        return <></>
    }

    const _closeHandler = () => {
       if (closeHandler) {
           closeHandler()
       }
       setName('')
       setDescription('')
    }

    return (
        <div className='modal'>
            <h3>New repo</h3>

            <form onSubmit={formSubmit}>
                <label>Name</label>
                <input type="text" ref={nameRef} value={name} onChange={(evt) => setName(evt.currentTarget.value)}/>

                <label>Description</label>
                <input type="text" value={description} onChange={(evt) => setDescription(evt.currentTarget.value)}/>

                <button type={'submit'}>Create repository</button>
            </form>
            <button onClick={_closeHandler}>Cancel</button>
        </div>
    )
}

export default NewRepoModal
