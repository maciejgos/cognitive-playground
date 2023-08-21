import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { AzureKeyCredential, SearchClient } from "@azure/search-documents";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    // Get Azure Cognitive Search API key from environment variable
    const apiKey = process.env["AzureCognitiveSearchApiKey"];
    const searchServiceName = process.env["AzureCognitiveSearchServiceName"];
    const indexName = process.env["AzureCognitiveSearchIndexName"];

    // Print all environment variables
    // console.log("AzureCognitiveSearchApiKey: ", apiKey);
    // console.log("AzureCognitiveSearchServiceName: ", searchServiceName);
    // console.log("AzureCognitiveSearchIndexName: ", indexName);

    // Get input text from query string
    const inputText = (req.query.searchInput || (req.body && req.body.searchInput));
    // console.log("inputText: ", inputText);

    // Get * search results from Azure Cognitive Search
    const searchClient = new SearchClient("https://" + searchServiceName + ".search.windows.net", indexName, new AzureKeyCredential(apiKey));
    let output = [];

    if(inputText) {
        const searchResults = await searchClient.search(inputText);
        for await (const result of searchResults.results) {
            output.push(result.document);
        }
    } else {
        const searchResults = await searchClient.search("*");
        for await (const result of searchResults.results) {
            output.push(result.document);
        }
    }

    // const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = output || "No results found";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };

};

export default httpTrigger;