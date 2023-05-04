export const LinkedListVisualization = [
    {
        id: 0,
        description: `"Lists" are one type of data structure, and can store multiple values.`,
        nodes: [
            {
                index: 0,
                color: 'blue',
                text: 'Blue',
                pointer: true,
                pointed: false,

            },
            {
                index: 1,
                color: 'orange',
                text: 'Orange',
                pointer: true,
                pointed: false,
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                pointer: false,
                pointed: false,
            },
        ]
    },
    {
        id: 1,
        description: `They are unique in how they pair data with "pointers", the pointers indicating the next piece of data's memory location.`,
        comment: 'Pointer',
        nodes: [
            {
                index: 0,
                color: 'blue',
                text: 'Blue',
                pointer: true,
                pointed: true,

            },
            {
                index: 1,
                color: 'orange',
                text: 'Orange',
                pointer: true,
                pointed: true,
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                pointer: false,
                pointed: true,
            },
        ]
    },
]