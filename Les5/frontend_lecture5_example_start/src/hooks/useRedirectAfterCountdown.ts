interface UseRedirectAfterCountdownParams {
    destination: string
    timeout?: number
    enabled: boolean
}

const useRedirectAfterCountdown = ({destination, timeout, enabled}: UseRedirectAfterCountdownParams): void => {
    // Use the default value when the user didn't specify a specific timeout.
    timeout = timeout ?? 2000
}

export default useRedirectAfterCountdown
