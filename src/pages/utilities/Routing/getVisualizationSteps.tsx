import { useRouter } from "next/router";
import { linkedListVisualization } from '@/pages/content/linked-list/visualization';
import { arrayVisualization } from "@/pages/content/array/visualization";
import { stackVisualization } from "@/pages/content/stack/visualization";
import { queueVisualization } from "@/pages/content/queue/visualization";

export default function getVisualizationSteps() {
    const router = useRouter();
    const path = router.query.path;

    switch (path) {
        case undefined:
            return linkedListVisualization
        case "linked-list":
            return linkedListVisualization
        case "array":
            return arrayVisualization
        case "stack":
            return stackVisualization
        case "queue":
            return queueVisualization
        default: linkedListVisualization;
    }

    return linkedListVisualization;
}