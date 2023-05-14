import Home from ".";
import { useRouter } from 'next/router';

function content() {
    const router = useRouter();

    return (
        <Home />
    )
}

export default content;