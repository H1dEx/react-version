const GET_LISTS = "GET-LISTS"

const getLists = lists => ({lists: data, type: GET_LISTS})
const data = [
    {
        title: 'Ez name',
        text: 'some description was added right here. Now i can can write something else, or not',
        is_important: true,
        is_finished: true,
        id: 1
    },
    {
        title: 'Ez name',
        text: 'some description was added right here. Now i can can write something else, or not',
        is_important: true,
        is_finished: false,
        id: 2
        
    },
    {
        title: 'Ez name',
        text: 'some description was added right here. Now i can can write something else, or not',
        is_important: false,
        is_finished: true,
        id: 3
        
    },
    {
        title: 'Ez name',
        text: 'some description was added right here. Now i can can write something else, or not',
        is_important: false,
        is_finished: true,
        id: 4
        
    }]

export {getLists, GET_LISTS}