import { useRouteError } from "react-router-dom"

export default function Error() {
    const error = useRouteError()
    console.log(error)

    return (
        <div>
            <h1>{error?.status}</h1>
            <h2>{error?.statusText}</h2>
            <h3>{error?.data}</h3>
        </div>
    )
}
