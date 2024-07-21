import React from 'react'
import axios from 'axios'
class ApiService {
  constructor(){
    this.api = String(import.meta.env.VITE_BACKEND_API)
  }
  async addToDO(){
    try {
        const res = await axios.post(`${this.api}/todo/save`)
        console.log(res);
        return {data : res.data , status : true}

    } catch (error) {
        console.log(error);
        return {status : false}
    }
  }
  async updateToDo(id,text){
    try {
        const res = await axios.put(`${this.api}/todo/update/${id}`,text)
        console.log(res);
        return {data:res.data , status: true}
    } catch (error) {
        console.log(error);
        return { status : false}
    }
  }
  async deleteToDo(id){
    try {
        const res = await axios.delete(`${this.api}/todo/delete/${id}`)
        console.log(res);
        return { data : res.data , status :true}
    } catch (error) {
     console.log(error);
     return { status : false}   
    }
  }
  async getToDo(){
    try {
        const res = await axios.get(`${this.api}/todo`)
        console.log(res.data);
        return {data:res.data , status:true} 
    } catch (error) {
        console.log(error);
        return { status:false}
        
    }
  }
  async getToDoDetailById(id){
    try {
        
        const res = await axios.get(`${this.api}/todo/${id}`)
        console.log(res);
        return {data:res.data[0] , status:true}
    } catch (error) {
        console.log(error);
        return { status : false}
    }
  }
} 

const todoService = new ApiService()
export default todoService
