const { GoogleGenerativeAI } = require("@google/generative-ai");



export class API {
    genAI: any;
   


    constructor() {
        
        this.genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
        
    }
    async generate(prompt: string, image: string) {
        const model = this.genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest"});

        // Create inlineData object for the image
        const inlineData = {
            data: image,
            mimeType: "image/jpeg"
        };

        // Create an array containing the inlineData object
        

        // Spread the imageParts array within the generateContent method call
        const result = await model.generateContent([prompt,{inlineData}]);
        const response = await result.response;

        console.log(response.text);
        return response.text();
    }





}

const api = new API();
export default api;

