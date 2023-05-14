export const linkedListVisualization = [
    {
        id: 0,
        description: `"Lists" are one type of data structure, and can store multiple values.`,
        nodes: [[
            {
                index: 0,
                color: 'blue',
                text: 'Blue',
                arrow: true,
                pointed: false,
                pointer: true,

            },
            {
                index: 1,
                color: 'orange',
                text: 'Orange',
                arrow: true,
                pointed: false,
                pointer: true,
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                arrow: false,
                pointed: false,
                pointer: true,
            },
        ]]
    },
    {
        id: 1,
        description: `They are unique in how they pair data with "pointers", the pointers indicating the next piece of data's memory location.`,
        comment: 'Pointer',
        nodes: [[
            {
                index: 0,
                color: 'blue',
                text: 'Blue',
                arrow: true,
                pointed: true,
                pointer: true,
            },
            {
                index: 1,
                color: 'orange',
                text: 'Orange',
                arrow: true,
                pointed: true,
                pointer: true,
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                arrow: false,
                pointed: true,
                pointer: true,
            },
        ]]
    },
    {
        id: 2,
        description: `In lists, data is stored in various disjointed locations in memory.`,
        comment: 'Memory',
        nodeSize: 3,
        orientation: 'column',
        nodes: [[
            {
                index: 0,
                color: 'orange',
                text: 'Orange',
                pointed: true,
            },
            {
                index: 1,
                color: 'blue',
                text: 'Blue',
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                arrow: false,
                pointed: true,
            }
        ]]
    },
    {
        id: 3,
        description: `In lists, data is stored in various disjointed locations in memory.`,
        comment: 'Memory',
        nodeSize: 3,
        orientation: 'column',
        nodes: [[
            {
                index: 0,
                color: 'orange',
                text: 'Orange',
                arrow: { x1: 59, y1: 38, x2: 59, y2: 10 },
                pointed: true,
            },
            {
                index: 1,
                color: 'blue',
                text: 'Blue',
                arrow: { x1: 48, y1: 11.5, x2: 48, y2: 21 },
                positionX: -10,
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                arrow: false,
                pointed: true,
            }
        ],
        ]
    },
    {
        id: 4,
        description: `Because data is stored in different locations, each piece of data can only be accessed through the pointer that precedes it.`,
        comment: 'Sequential Access',
        nodes: [[
            {
                index: 0,
                color: 'blue',
                text: 'Blue',
                arrow: true,
                pointed: false,
                pointer: true,
                innerBorder: true,
            },
            {
                index: 1,
                color: 'orange',
                text: 'Orange',
                arrow: true,
                pointed: false,
                pointer: true,
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                arrow: false,
                pointed: false,
                pointer: true,
            },
        ]]
    },
    {
        id: 5,
        description: `Because data is stored in different locations, each piece of data can only be accessed through the pointer that precedes it.`,
        comment: 'Sequential Access',
        nodes: [[
            {
                index: 0,
                color: 'blue',
                text: 'Blue',
                arrow: true,
                pointed: true,
                pointer: true,
                innerBorder: true,
            },
            {
                index: 1,
                color: 'orange',
                text: 'Orange',
                arrow: true,
                pointed: false,
                pointer: true,
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                arrow: false,
                pointed: false,
                pointer: true,
            },
        ]]
    },
    {
        id: 6,
        description: `Because data is stored in different locations, each piece of data can only be accessed through the pointer that precedes it.`,
        comment: 'Sequential Access',
        nodes: [[
            {
                index: 0,
                color: 'blue',
                text: 'Blue',
                arrow: true,
                pointed: true,
                pointer: true,
                innerBorder: true,
            },
            {
                index: 1,
                color: 'orange',
                text: 'Orange',
                arrow: true,
                pointed: false,
                pointer: true,
                innerBorder: true,
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                arrow: false,
                pointer: true,
                pointed: false,
            },
        ]]
    },
    {
        id: 7,
        description: `Because data is stored in different locations, each piece of data can only be accessed through the pointer that precedes it.`,
        comment: 'Sequential Access',
        nodes: [[
            {
                index: 0,
                color: 'blue',
                text: 'Blue',
                arrow: true,
                pointed: true,
                pointer: true,
                innerBorder: true,
            },
            {
                index: 1,
                color: 'orange',
                text: 'Orange',
                arrow: true,
                pointed: true,
                pointer: true,
                innerBorder: true,
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                arrow: false,
                pointed: false,
                pointer: true,
            },
        ]]
    },
    {
        id: 8,
        description: `Because data is stored in different locations, each piece of data can only be accessed through the pointer that precedes it.`,
        comment: 'Sequential Access',
        nodes: [[
            {
                index: 0,
                color: 'blue',
                text: 'Blue',
                arrow: true,
                pointed: true,
                pointer: true,
                innerBorder: true,
            },
            {
                index: 1,
                color: 'orange',
                text: 'Orange',
                arrow: true,
                pointed: true,
                pointer: true,
                innerBorder: true,
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                arrow: false,
                pointed: false,
                pointer: true,
                innerBorder: true,
            },
        ],
        ]
    },
    {
        id: 9,
        description: `Addition of data is performed simply by replacing the pointers on either side of the addition.`,
        nodes: [[
            {
                index: 0,
                color: 'blue',
                text: 'Blue',
                arrow: true,
                pointed: false,
                pointer: true,
            },
            {
                index: 1,
                color: 'orange',
                text: 'Orange',
                arrow: true,
                pointed: false,
                pointer: true,
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                arrow: false,
                pointed: false,
                pointer: true,
            },
        ],
        [
            {
                index: 0,
                color: 'green',
                text: 'Green',
                arrow: false,
                pointed: false,
                pointer: true,
                positionX: 18,
                positionY: 20,
            }
        ]
        ]
    },
    {
        id: 10,
        description: `Addition of data is performed simply by replacing the pointers on either side of the addition.`,
        nodes: [[
            {
                index: 0,
                color: 'blue',
                text: 'Blue',
                arrow: true,
                pointed: false,
                pointer: true,
            },
            {
                index: 1,
                color: 'orange',
                text: 'Orange',
                arrow: true,
                pointed: false,
                pointer: true,
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                arrow: false,
                pointed: false,
                pointer: true,
            },
        ],
        [
            {
                index: 0,
                color: 'green',
                text: 'Green',
                arrow: { x1: 40, y1: 31.5, x2: 0, y2: 0 },
                pointed: false,
                pointer: true,
                positionX: 18,
                positionY: 20,
            }
        ]]
    },
    {
        id: 11,
        description: `Addition of data is performed simply by replacing the pointers on either side of the addition.`,
        nodes: [[
            {
                index: 0,
                color: 'blue',
                text: 'Blue',
                arrow: { x1: 23, y1: 38.5, x2: 0, y2: 0 },
                pointed: false,
                pointer: true,
            },
            {
                index: 1,
                color: 'orange',
                text: 'Orange',
                arrow: true,
                pointed: false,
                pointer: true,
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                arrow: false,
                pointed: false,
                pointer: true,
            },
        ],
        [

            {
                index: 0,
                color: 'green',
                text: 'Green',
                arrow: { x1: 40, y1: 31.5, x2: 0, y2: 0 },
                pointed: false,
                pointer: true,
                positionX: 18,
                positionY: 20,
            }

        ]]
    },
    {
        id: 12,
        description: `This concludes the explanation of lists.`,
        nodes: [
            [
                {
                    index: 0,
                    color: 'blue',
                    text: 'Blue',
                    arrow: { x1: 23, y1: 38.5, x2: 0, y2: 0 },
                    pointed: false,
                    pointer: true,
                },
                {
                    index: 1,
                    color: 'orange',
                    text: 'Orange',
                    arrow: true,
                    pointed: false,
                    pointer: true,
                },
                {
                    index: 2,
                    color: 'red',
                    text: 'Red',
                    arrow: false,
                    pointed: false,
                    pointer: true,
                },
            ],
            [
                {
                    index: 0,
                    color: 'green',
                    text: 'Green',
                    arrow: { x1: 40, y1: 31.5, x2: 0, y2: 0 },
                    pointed: false,
                    pointer: true,
                    positionX: 18,
                    positionY: 20,
                }
            ]
        ]
    },
]