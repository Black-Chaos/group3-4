export function UserListItem({ id, name, email, hasJob, handleDelete }) {
    return (
        <>
            <p>Name: { name}</p>
            <p>E-mail: { email}</p>
            <p>Has job: {hasJob ? 'Yes' : 'No'}</p>
            <button type="button" onClick={() => handleDelete(id)} >Delete</button>
        </>
    )
}