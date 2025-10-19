import { useMutation } from "@tanstack/react-query"
import axios from "axios"

export const useSignINFeature = ()=>{
    const signIn = useMutation ({
        mutationFn: async(body)=>{
            const {data}=await axios.post("http://8080/api/auth/sign-in",body);

            return data
        },
        onSuccess: ()=>{}
    });

    return {
        signIn
    }
}