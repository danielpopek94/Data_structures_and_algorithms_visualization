import Home from ".";
import { useRouter } from 'next/router';

function content() {
    const router = useRouter();
    console.log(router);
    return (
        <Home />
    )
}

export default content;