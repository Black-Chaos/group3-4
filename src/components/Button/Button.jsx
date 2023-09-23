export function Button({text, clickHandle}) {
    return <button type="button" onClick={clickHandle}>{text}</button>
}