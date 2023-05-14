import ContentTabs from '../components/ContentTabs'

export default function contentPage() {
    return (
        <>
            <header>
                <a href="/"><img
                    src="/next.svg"
                    alt="main_logo"
                    className='w-20 p-2'
                /></a>
            </header>
            <main className={`flex flex-row`}>
                <nav className='w-1/6 px-2'>
                    <ul>
                        <a href="/linked-list">
                            <li className='linked-list'>Linked list</li>
                        </a>
                        <a href="/array">
                            <li className='array'>Array</li>
                        </a>
                        <a href="/stack">
                            <li className='stack'>Stack</li>
                        </a>
                        <a href="/queue">
                            <li className='queue'>Queue</li>
                        </a>
                    </ul>
                </nav>
                <div className='content w-5/6'>
                    <ContentTabs />
                </div>
            </main>
        </>
    )
}
