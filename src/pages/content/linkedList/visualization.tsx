export const LinkedListVisualization = [
    {
        id: 0,
        description: `"Lists" are one type of data structure, and can store multiple values.`,
        nodes: [
            {
                index: 0,
                color: 'blue',
                text: 'Blue',
                arrow: true,
                pointed: false,

            },
            {
                index: 1,
                color: 'orange',
                text: 'Orange',
                arrow: true,
                pointed: false,
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                arrow: false,
                pointed: false,
            },
        ]
    },
    {
        id: 1,
        description: `They are unique in how they pair data with "arrows", the arrows indicating the next piece of data's memory location.`,
        comment: 'arrow',
        nodes: [
            {
                index: 0,
                color: 'blue',
                text: 'Blue',
                arrow: true,
                pointed: true,

            },
            {
                index: 1,
                color: 'orange',
                text: 'Orange',
                arrow: true,
                pointed: true,
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                arrow: false,
                pointed: true,
            },
        ]
    },
    {
        id: 2,
        description: `edit-me -In lists, data is stored in various disjointed locations in memory.`,
        comment: 'Memory',
        nodes: [
            {
                index: 0,
                color: 'blue',
                text: 'Blue',
                arrow: true,
                pointed: true,

            },
            {
                index: 1,
                color: 'orange',
                text: 'Orange',
                arrow: true,
                pointed: true,
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                arrow: false,
                pointed: true,
            },
        ]
    },
    {
        id: 3,
        description: `edit me`,
        comment: 'Memory',
        nodes: [
            {
                index: 0,
                color: 'blue',
                text: 'Blue',
                arrow: true,
                pointed: true,

            },
            {
                index: 1,
                color: 'orange',
                text: 'Orange',
                arrow: true,
                pointed: true,
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                arrow: false,
                pointed: true,
            },
        ]
    },
    {
        id: 4,
        description: `Because data is stored in different locations, each piece of data can only be accessed through the arrow that precedes it.`,
        comment: 'Sequential Access',
        nodes: [
            {
                index: 0,
                color: 'blue',
                text: 'Blue',
                arrow: true,
                pointed: false,
                innerBorder: true,
            },
            {
                index: 1,
                color: 'orange',
                text: 'Orange',
                arrow: true,
                pointed: false,
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                arrow: false,
                pointed: false,
            },
        ]
    },
    {
        id: 5,
        description: `Because data is stored in different locations, each piece of data can only be accessed through the arrow that precedes it.`,
        comment: 'Sequential Access',
        nodes: [
            {
                index: 0,
                color: 'blue',
                text: 'Blue',
                arrow: true,
                pointed: true,
                innerBorder: true,
            },
            {
                index: 1,
                color: 'orange',
                text: 'Orange',
                arrow: true,
                pointed: false,
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                arrow: false,
                pointed: false,
            },
        ]
    },
    {
        id: 6,
        description: `Because data is stored in different locations, each piece of data can only be accessed through the arrow that precedes it.`,
        comment: 'Sequential Access',
        nodes: [
            {
                index: 0,
                color: 'blue',
                text: 'Blue',
                arrow: true,
                pointed: true,
                innerBorder: true,
            },
            {
                index: 1,
                color: 'orange',
                text: 'Orange',
                arrow: true,
                pointed: false,
                innerBorder: true,
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                arrow: false,
                pointed: false,
            },
        ]
    },
    {
        id: 7,
        description: `Because data is stored in different locations, each piece of data can only be accessed through the arrow that precedes it.`,
        comment: 'Sequential Access',
        nodes: [
            {
                index: 0,
                color: 'blue',
                text: 'Blue',
                arrow: true,
                pointed: true,
                innerBorder: true,
            },
            {
                index: 1,
                color: 'orange',
                text: 'Orange',
                arrow: true,
                pointed: true,
                innerBorder: true,
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                arrow: false,
                pointed: false,
            },
        ]
    },
    {
        id: 8,
        description: `Because data is stored in different locations, each piece of data can only be accessed through the arrow that precedes it.`,
        comment: 'Sequential Access',
        nodes: [
            {
                index: 0,
                color: 'blue',
                text: 'Blue',
                arrow: true,
                pointed: true,
                innerBorder: true,
            },
            {
                index: 1,
                color: 'orange',
                text: 'Orange',
                arrow: true,
                pointed: true,
                innerBorder: true,
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                arrow: false,
                pointed: false,
                innerBorder: true,
            },
        ]
    },
    {
        id: 9,
        description: `Addition of data is performed simply by replacing the arrows on either side of the addition.`,
        nodes: [
            {
                index: 0,
                color: 'blue',
                text: 'Blue',
                arrow: true,
                pointed: false,
            },
            {
                index: 1,
                color: 'orange',
                text: 'Orange',
                arrow: true,
                pointed: false,
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                arrow: false,
                pointed: false,
            },
        ],
        addDataNode: {
            index: 0,
            color: 'green',
            text: 'Green',
            arrow: false,
            pointed: false,
            positionX: 18,
            positionY: 20,
        }
    },
    {
        id: 10,
        description: `Addition of data is performed simply by replacing the arrows on either side of the addition.`,
        nodes: [
            {
                index: 0,
                color: 'blue',
                text: 'Blue',
                arrow: true,
                pointed: false,
            },
            {
                index: 1,
                color: 'orange',
                text: 'Orange',
                arrow: true,
                pointed: false,
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                arrow: false,
                pointed: false,
            },
        ],
        addDataNode: {
            index: 0,
            color: 'green',
            text: 'Green',
            arrow: { x1: 40, y1: 31.5, x2: 0, y2: 0 },
            pointed: false,
            positionX: 18,
            positionY: 20,
        }
    },
    {
        id: 11,
        description: `Addition of data is performed simply by replacing the arrows on either side of the addition.`,
        nodes: [
            {
                index: 0,
                color: 'blue',
                text: 'Blue',
                arrow: { x1: 23, y1: 38.5, x2: 0, y2: 0 },
                pointed: false,
            },
            {
                index: 1,
                color: 'orange',
                text: 'Orange',
                arrow: true,
                pointed: false,
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                arrow: false,
                pointed: false,
            },
        ],
        addDataNode: {
            index: 0,
            color: 'green',
            text: 'Green',
            arrow: { x1: 40, y1: 31.5, x2: 0, y2: 0 },
            pointed: false,
            positionX: 18,
            positionY: 20,
        }
    },
    {
        id: 12,
        description: `This concludes the explanation of lists.`,
        nodes: [
            {
                index: 0,
                color: 'blue',
                text: 'Blue',
                arrow: { x1: 23, y1: 38.5, x2: 0, y2: 0 },
                pointed: false,
            },
            {
                index: 1,
                color: 'orange',
                text: 'Orange',
                arrow: true,
                pointed: false,
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                arrow: false,
                pointed: false,
            },
        ],
        addDataNode: {
            index: 0,
            color: 'green',
            text: 'Green',
            arrow: { x1: 40, y1: 31.5, x2: 0, y2: 0 },
            pointed: false,
            positionX: 18,
            positionY: 20,
        }
    },
]