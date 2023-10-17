import { ChangeEventHandler, useRef, useState } from 'react'

interface UseIsEditingOptions {
    defaultValue?: string
    debounceTime?: number
}

type UseIsEditingResult = [string, ChangeEventHandler<HTMLInputElement>, boolean]

const useIsEditing = ({defaultValue, debounceTime}: UseIsEditingOptions): UseIsEditingResult  => {
    const [value, setValue] = useState(defaultValue ?? '')
    const [isEditing, setIsEditing] = useState(false)
    const timeoutId = useRef<number | null>(null)

    const timeoutFinishedHandler = () => {
        setIsEditing(false)
        timeoutId.current = null
    }

    const updateValue: ChangeEventHandler<HTMLInputElement> = (evt) => {
        // Als er al een timeout ingesteld was,
        // moet deze geannuleerd worden.
        if (timeoutId.current) {
            clearTimeout(timeoutId.current)
        }

        setValue(evt.currentTarget.value)
        
        // Stel isEditing op true in, en zet het nadat er
        // debounceTime ms verstreken zijn terug op false.
        setIsEditing(true)
        timeoutId.current = setTimeout(timeoutFinishedHandler, debounceTime ?? 500)
    }

    return [
        value,
        updateValue,
        isEditing,
    ]
}

export default useIsEditing