import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const results = [
        {
          hotel: "Hotel 1",
          price: 100,
        },
        {
          hotel: "Hotel 2",
          price: 200,
        },
        {
          hotel: "Hotel 3",
          price: 300,
        },
        {
          hotel: "Hotel 4",
          price: 400,
        },
        {
          hotel: "Hotel 5",
          price: 500,
        },
        {
          hotel: "Hotel 6",
          price: 600,
        }
      ];

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = results;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };

};

export default httpTrigger;