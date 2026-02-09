import { Router } from "expo-router";

export function navegarError(router:Router,error:string,mensaje:string){

    router.push({

        pathname:"/error",
        params:{
            error:error,
            mensaje:mensaje
        }

    })

}