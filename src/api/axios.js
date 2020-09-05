import * as axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: true
});

export const postsAPI = {
    async getItems() {
        const response = await instance.get('posts')
        console.log(response.data)
        return response.data
    },
    async deleteItem(id) {
        const response = await instance.delete(`posts/${id}`)
        return response.data
    },
    async updateImportant(item) {
        const newItem = JSON.stringify({...item, important: !item.important});
        const response = await instance.patch(`posts/${item.id}`, newItem)
        return response.data;
        
    },
    async updateFinished(item) {
        const newItem = JSON.stringify({...item, finished: !item.finished});
        const response = await instance.patch(`posts/${item.id}`, newItem)
        return response.data;
    }
    
}
