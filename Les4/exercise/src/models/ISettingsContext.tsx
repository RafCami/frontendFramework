export interface ISettingsContext {
    darkTheme : boolean
    refetchInterval : number
    toggleDarkTheme : () => void
    setRefetchInterval : (newRefetchInterval : number) => void
}