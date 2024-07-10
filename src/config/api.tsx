import {
	FunctionDeclarationSchemaType,
	GoogleGenerativeAI,
} from "@google/generative-ai";

class API {
    genAI: any;

    constructor() {
        this.genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);
    }

    async generate(prompt: string, images: string[]) {
        const model = this.genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            generationConfig: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: FunctionDeclarationSchemaType.ARRAY,
                    items: {
                        type: FunctionDeclarationSchemaType.OBJECT,
                        properties: {
                            title: {
                                type: FunctionDeclarationSchemaType.STRING,
                            },
                            poem: {
                                type: FunctionDeclarationSchemaType.STRING,
                            },
                        },
                    },
                },
            },
        });

        const inlineDataArray = images.map(image => ({
            data: image,
            mimeType: "image/jpeg"
        }));

        
        const requestPayload = [
            { text: prompt },
            ...inlineDataArray.map((inlineData) => ({ inlineData })),
        ];

        const result = await model.generateContent(requestPayload);
        const response = await result.response;

        // Assuming the response contains the generated poem text directly
        return response.text();
    }
}

const api = new API();
export default api;
