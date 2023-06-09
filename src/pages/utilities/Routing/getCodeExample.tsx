import arrayCode from "@/pages/content/array/code";
import linkedlistCode from "@/pages/content/linked-list/code";
import queueCode from "@/pages/content/queue/code";
import stackCode from "@/pages/content/stack/code";
import { useRouter } from "next/router";

export default function getCodeExample() {
    const router = useRouter();
    const path = router.query.path;

    switch (path) {
        case undefined:
            return linkedlistCode
        case "linked-list":
            return linkedlistCode
        case "array":
            return arrayCode
        case "stack":
            return stackCode
        case "queue":
            return queueCode
        default: linkedlistCode;
    }

    return linkedlistCode;
}