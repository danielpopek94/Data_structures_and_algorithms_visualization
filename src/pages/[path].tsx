import { useRouter } from "next/router";

function content() {
    const router = useRouter();
    const path = router.query.path;

    return (
        <div>{path}</div>
    )
}

export default content;