import { BASEURL } from "./BaseURL";
import axiosConfig from "./AxiosConfig";

export const addCourse = async(reqBody) =>{
   return await axiosConfig('post',`${BASEURL}/courses`,reqBody)
}

export const getCourses = async() =>{
    return await axiosConfig('get',`${BASEURL}/courses`,"")
}

export const updateCourse = async(id,reqBody)=>{
    return await axiosConfig('put',`${BASEURL}/courses/${id}`,reqBody)
}

export const deleteCourse = async(id)=>{
    return await axiosConfig('delete',`${BASEURL}/courses/${id}`,"")
}