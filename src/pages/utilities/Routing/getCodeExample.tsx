import arrayCode from "@/pages/content/array/code";
import linkedlistCode from "@/pages/content/linked-list/code";
import { useRouter } from "next/router";

export default function getCodeExample() {
    const router = useRouter();
    const path = router.query.path;

    console.log(path);
    switch (path) {
        case undefined:
            return linkedlistCode
        case "linked-list":
            return linkedlistCode
        case "array":
            return arrayCode
        case "stack":
            return stackVisualization
        case "queue":
            return queueVisualization
        default: linkedListVisualization;
    }
}