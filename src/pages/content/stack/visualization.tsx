export const stackVisualization = [
    {
        id: 0,
        description: `"Stack" are one type of data structure, and can store multiple values.`,
        nodes: [[
            {
                index: 0,
                color: 'blue',
                text: 'Blue',
            },
            {
                index: 1,
                color: 'orange',
                text: 'Orange',
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
            },
        ]]
    },
    {
        id: 1,
        description: `Each element can be accessed through its index (a number that denotes its order within the data).`,
        nodes: [[
            {
                index: 0,
                color: 'blue',
                text: 'Blue',
                label: 'a[0]',
            },
            {
                index: 1,
                color: 'orange',
                text: 'Orange',
                label: 'a[1]',
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                label: 'a[2]',
            },
        ]]
    },
    {
        id: 2,
        description: `Data is stored sequentially in memory in consecutive locations.`,
        comment: 'Memory',
        nodeSize: 3,
        orientation: 'column',
        nodes: [[
            {
                index: 0,
                color: 'blue',
                text: 'Blue',
                pointed: true,
            },
            {
                index: 1,
                color: 'orange',
                text: 'Orange',
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
        description: `Because the're stored in consecutive locations, memory addresses can be calculated using their indices, allowing for random access of data.`,
        comment: 'Random Access',
        nodeSize: 3,
        nodes: [[
            {
                index: 0,
                color: 'orange',
                text: 'Orange',
                label: 'a[0]',
            },
            {
                index: 1,
                color: 'blue',
                text: 'Blue',
                label: 'a[1]',
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                label: 'a[2]',
            }
        ],
        ]
    },
    {
        id: 4,
        description: `Because the're stored in consecutive locations, memory addresses can be calculated using their indices, allowing for random access of data.`,
        comment: 'Random Access',
        nodeSize: 3,
        nodes: [[
            {
                index: 0,
                color: 'orange',
                text: 'Orange',
                label: 'a[0]',
            },
            {
                index: 1,
                color: 'blue',
                text: 'Blue',
                label: 'a[1]',
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                label: 'a[2]',
                innerBorder: true,
            }
        ],
        ]
    },
    {
        id: 5,
        description: `Because the're stored in consecutive locations, memory addresses can be calculated using their indices, allowing for random access of data.`,
        comment: 'Random Access',
        nodeSize: 3,
        nodes: [[
            {
                index: 0,
                color: 'orange',
                text: 'Orange',
                label: 'a[0]',
                innerBorder: true,
            },
            {
                index: 1,
                color: 'blue',
                text: 'Blue',
                label: 'a[1]',
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                label: 'a[2]',
            }
        ],
        ]
    },
    {
        id: 6,
        description: `Because the're stored in consecutive locations, memory addresses can be calculated using their indices, allowing for random access of data.`,
        comment: 'Random Access',
        nodeSize: 3,
        nodes: [[
            {
                index: 0,
                color: 'orange',
                text: 'Orange',
                label: 'a[0]',
            },
            {
                index: 1,
                color: 'blue',
                text: 'Blue',
                label: 'a[1]',
                innerBorder: true,
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                label: 'a[2]',
            }
        ],
        ]
    },
    {
        id: 7,
        description: `Because the're stored in consecutive locations, memory addresses can be calculated using their indices, allowing for random access of data.`,
        comment: 'Random Access',
        nodeSize: 3,
        nodes: [[
            {
                index: 0,
                color: 'orange',
                text: 'Orange',
                label: 'a[0]',
            },
            {
                index: 1,
                color: 'blue',
                text: 'Blue',
                label: 'a[1]',
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                label: 'a[2]',
            }
        ],
        ]
    },
    {
        id: 8,
        description: `Another feature of arrays is that adding or deleting data in a specific location carries a high cost compared to lists.`,
        nodeSize: 3,
        nodes: [[
            {
                index: 0,
                color: 'orange',
                text: 'Orange',
                label: 'a[0]',
            },
            {
                index: 1,
                color: 'blue',
                text: 'Blue',
                label: 'a[1]',
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                label: 'a[2]',
            }
        ],
        ]
    },
    {
        id: 9,
        description: `Let's imagine adding "Green" to the 2nd location.`,
        nodes: [[
            {
                index: 0,
                color: 'orange',
                text: 'Orange',
                label: 'a[0]',
            },
            {
                index: 1,
                color: 'blue',
                text: 'Blue',
                label: 'a[1]',
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                label: 'a[2]',
            }
        ],
        [
            {
                index: 0,
                color: 'green',
                text: 'Green',
                arrow: false,
                positionX: 18,
                positionY: 20,
            }
        ]
        ]
    },
    {
        id: 10,
        description: `First we secure an additional space at the end of the array.`,
        nodeSize: 4,
        nodes: [[
            {
                index: 0,
                color: 'orange',
                text: 'Orange',
                label: 'a[0]',
            },
            {
                index: 1,
                color: 'blue',
                text: 'Blue',
                label: 'a[1]',
            },
            {
                index: 2,
                color: 'red',
                text: 'Red',
                label: 'a[2]',
            },
            {
                index: 3,
                color: 'grey',
                text: '<empty>',
                label: 'a[3]',
            }
        ],
        [
            {
                index: 0,
                color: 'green',
                text: 'Green',
                arrow: false,
                positionX: 18,
                positionY: 20,
            }
        ]
        ]
    },
    {
        id: 11,
        description: `In order to free up the space needed for the addition, data is shifted one element at a time.`,
        nodeSize: 4,
        nodes: [[
            {
                index: 0,
                color: 'orange',
                text: 'Orange',
                label: 'a[0]',
            },
            {
                index: 1,
                color: 'blue',
                text: 'Blue',
                label: 'a[1]',
            },
            {
                index: 2,
                color: 'grey',
                text: '<empty>',
                label: 'a[2]',
            },
            {
                index: 3,
                color: 'red',
                text: 'Red',
                label: 'a[3]',
            }
        ],
        [
            {
                index: 0,
                color: 'green',
                text: 'Green',
                arrow: false,
                positionX: 18,
                positionY: 20,
            }
        ]
        ]
    },
    {
        id: 12,
        description: `In order to free up the space needed for the addition, data is shifted one element at a time.`,
        nodeSize: 4,
        nodes: [[
            {
                index: 0,
                color: 'orange',
                text: 'Orange',
                label: 'a[0]',
            },
            {
                index: 1,
                color: 'grey',
                text: '<empty>',
                label: 'a[1]',
            },
            {
                index: 2,
                color: 'blue',
                text: 'Blue',
                label: 'a[2]',
            },
            {
                index: 3,
                color: 'red',
                text: 'Red',
                label: 'a[3]',
            }
        ],
        [
            {
                index: 0,
                color: 'green',
                text: 'Green',
                arrow: false,
                positionX: 18,
                positionY: 20,
            }
        ]
        ]
    },
    {
        id: 13,
        description: `"Green" is added to the empty space, completing the addition.`,
        nodeSize: 4,
        nodes: [[
            {
                index: 0,
                color: 'orange',
                text: 'Orange',
                label: 'a[0]',
            },
            {
                index: 1,
                color: 'green',
                text: 'Green',
                label: 'a[1]',
            },
            {
                index: 2,
                color: 'blue',
                text: 'Blue',
                label: 'a[2]',
            },
            {
                index: 3,
                color: 'red',
                text: 'Red',
                label: 'a[3]',
            }
        ]
        ]
    },
    {
        id: 14,
        description: `Conversely, when deleting the second element...`,
        nodeSize: 4,
        nodes: [[
            {
                index: 0,
                color: 'orange',
                text: 'Orange',
                label: 'a[0]',
            },
            {
                index: 1,
                color: 'green',
                text: 'Green',
                label: 'a[1]',
            },
            {
                index: 2,
                color: 'blue',
                text: 'Blue',
                label: 'a[2]',
            },
            {
                index: 3,
                color: 'red',
                text: 'Red',
                label: 'a[3]',
            }
        ]
        ]
    },
    {
        id: 15,
        description: `we first delete the element...`,
        nodeSize: 4,
        nodes: [
            [
                {
                    index: 0,
                    color: 'green',
                    text: 'Green',
                    label: 'a[0]',
                    positionX: 18,
                    positionY: -18,
                },
            ],
            [
                {
                    index: 0,
                    color: 'orange',
                    text: 'Orange',
                    label: 'a[0]',
                },
                {
                    index: 1,
                    color: 'grey',
                    text: '<empty>',
                    label: 'a[1]',
                },
                {
                    index: 2,
                    color: 'blue',
                    text: 'Blue',
                    label: 'a[2]',
                },
                {
                    index: 3,
                    color: 'red',
                    text: 'Red',
                    label: 'a[3]',
                }
            ]
        ]
    },
    {
        id: 16,
        description: `then fill in the empty space by shifting the data one element at a time.`,
        nodeSize: 4,
        nodes: [
            [
                {
                    index: 0,
                    color: 'green',
                    text: 'Green',
                    label: 'a[0]',
                    positionX: 18,
                    positionY: -18,
                },
            ],
            [
                {
                    index: 0,
                    color: 'orange',
                    text: 'Orange',
                    label: 'a[0]',
                },
                {
                    index: 1,
                    color: 'blue',
                    text: 'Blue',
                    label: 'a[1]',
                },
                {
                    index: 2,
                    color: 'grey',
                    text: '<empty>',
                    label: 'a[2]',
                },
                {
                    index: 3,
                    color: 'red',
                    text: 'Red',
                    label: 'a[3]',
                }
            ]
        ]
    },
    {
        id: 17,
        description: `then fill in the empty space by shifting the data one element at a time.`,
        nodeSize: 4,
        nodes: [
            [
                {
                    index: 0,
                    color: 'green',
                    text: 'Green',
                    label: 'a[0]',
                    positionX: 18,
                    positionY: -18,
                },
            ],
            [
                {
                    index: 0,
                    color: 'orange',
                    text: 'Orange',
                    label: 'a[0]',
                },
                {
                    index: 1,
                    color: 'blue',
                    text: 'Blue',
                    label: 'a[1]',
                },
                {
                    index: 2,
                    color: 'red',
                    text: 'Red',
                    label: 'a[2]',
                },
                {
                    index: 3,
                    color: 'grey',
                    text: '<empty>',
                    label: 'a[3]',
                }
            ]
        ]
    },
    {
        id: 18,
        description: `Finally, the extra space is deleted, completing the deletion.`,
        nodeSize: 4,
        nodes: [
            [
                {
                    index: 0,
                    color: 'green',
                    text: 'Green',
                    label: 'a[0]',
                    positionX: 18,
                    positionY: -18,
                },
            ],
            [
                {
                    index: 0,
                    color: 'orange',
                    text: 'Orange',
                    label: 'a[0]',
                },
                {
                    index: 1,
                    color: 'blue',
                    text: 'Blue',
                    label: 'a[1]',
                },
                {
                    index: 2,
                    color: 'red',
                    text: 'Red',
                    label: 'a[2]',
                },
            ]
        ]
    },
    {
        id: 19,
        description: `This concludes the explanation of arrays.`,
        nodeSize: 4,
        nodes: [
            [
                {
                    index: 0,
                    color: 'green',
                    text: 'Green',
                    label: 'a[0]',
                    positionX: 18,
                    positionY: -18,
                },
            ],
            [
                {
                    index: 0,
                    color: 'orange',
                    text: 'Orange',
                    label: 'a[0]',
                },
                {
                    index: 1,
                    color: 'blue',
                    text: 'Blue',
                    label: 'a[1]',
                },
                {
                    index: 2,
                    color: 'red',
                    text: 'Red',
                    label: 'a[2]',
                },
            ]
        ]
    },
]