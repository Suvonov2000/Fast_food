import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/router";
import useSignIn from "react-auth-kit/hooks/useSignIn"

export const useSignINFeature = ()=>{
    const signIn = useSignIn();
    const {push}=useRouter()

    const signIn = useMutation ({
        mutationFn: async(body)=>{
            const {data}=await axios.post("http://8080/api/auth/sign-in",body);

            return data
        },
        onSuccess: (data)=>{
           signIn({
            auth:{
                token:data.token,
                type:"Bearer",
            }
           })
           push("/")
        }
    });

    return {
        signIn
    }
}