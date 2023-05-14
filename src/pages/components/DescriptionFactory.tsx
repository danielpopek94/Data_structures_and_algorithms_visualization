import LinkedListDescription from "../content/linked-list/description";


function DescriptionFactory() {
    return (
        <div className='max-w-2xl '>
            <h2>Linked list</h2>
            <h4>Summary</h4>
            <LinkedListDescription />
        </div>
    )
}

export default DescriptionFactory;