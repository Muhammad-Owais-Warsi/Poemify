import { PoemBackground } from "@/components/poemBackground"
import { FormProvider } from "@/context/formContext"


export default function Poem() {
    return(
        
           <FormProvider>
             <PoemBackground/>
           </FormProvider>
      
    )
}