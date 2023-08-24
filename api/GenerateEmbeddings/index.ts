/* 
    1. Use openai nodejs SDK
    2. Take content from body of post request
    3. Send it to ada2 LLM model for embeddings generation
    4. Save tokens into Azure Cognitive Search Index
*/

import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { AzureKeyCredential, SearchClient } from "@azure/search-documents";
import OpenAI from "openai";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("HTTP trigger function processed a request.");

  const OpenAIApiKey = process.env["OpenAIApiKey"];
  const OpenAIOrganization = process.env["OpenAIOrganizationId"];

  // console.log(OpenAIApiKey);
  // console.log(OpenAIOrganization);

  const openai = new OpenAI({
    apiKey: OpenAIApiKey,
    organization: OpenAIOrganization,
  });

  // Call Azure Cognitive Search to save the embeddings
  const searchServiceName = process.env["AzureCognitiveSearchServiceName"];
  const apiKey = process.env["AzureCognitiveSearchApiKey"];
  const indexName = process.env["AzureCognitiveSearchIndexName"];

  let searchClient = new SearchClient(
    "https://" + searchServiceName + ".search.windows.net",
    indexName,
    new AzureKeyCredential(apiKey)
  );

  // Take everything what we have in index, create embeddings for Description field and save embeddings into DescriptionVector back to index
  const searchResults = await searchClient.search("*");
  for await (const result of searchResults.results) {
    // console.log(result.document);
    // console.log('Description: ' + result.document["Description"]);

    try {
      const embedding = await openai.embeddings.create({
        model: "text-embedding-ada-002",
        input: result.document["Description"],
      });
      // console.log(embedding);

      result.document["DescriptionVector"] = embedding.data[0].embedding;
      // console.log('DescriptionVector: ' + result.document["DescriptionVector"]);

      await searchClient.mergeOrUploadDocuments([result.document]);
    } catch (error) {
      console.error(error);
    }
  }

  context.res = {
    status: 202 /* Defaults to 200 */,
  };
};

export default httpTrigger;
