import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import OpenAI from "openai";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    const OpenAIApiKey = process.env["OpenAIApiKey"];
    const OpenAIOrganization = process.env["OpenAIOrganizationId"];

    const openai = new OpenAI({
        apiKey: OpenAIApiKey,
        organization: OpenAIOrganization,
      });
      
    // You are a hotel marketing division assistant you are helping in creating a brochure for a hotel description taken from a HTTP body request

    const prompt = "Take content between === and === and generate a brochure for a hotel. "
        + "Brochure should be funny to interest people and have clear description of near area of hotel and attractions\n"
        + "Return content in JSON format using Template\n" 
        + "==="
        + "Hotel Name: " + req.body.HotelName + "\n"
        + "Description: " + req.body.Description + "\n"
        + "===\n";
        + "Template:\n"
        + "Content: Generated content\n"
    const completion = await openai.chat.completions.create({
        messages: [
            { role: "system", content: "You are a hotel marketing division assistant you are helping in creating a brochure for a hotel" },
            { role: "user", content: prompt }
        ],
        model: "gpt-3.5-turbo"
    });

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: completion.choices[0].message.content
    };

};

export default httpTrigger;