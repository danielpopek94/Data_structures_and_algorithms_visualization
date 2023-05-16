import { useRouter } from 'next/router';
import ContentPage from "./content";

function content() {
    const router = useRouter();

    return (
        <ContentPage />
    )
}

export default content;