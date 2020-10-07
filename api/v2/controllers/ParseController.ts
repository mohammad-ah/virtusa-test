import * as express from 'express'
import {IParsedData} from '../../../lib/IParsedData';
import {EStatusCodes} from '../../../lib/EStatusCodes';

export class ParseController {
    private static instance: ParseController;

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() { }

    /**
     * The static method that controls the access to the singleton instance.
     *
     */
    public static getInstance(): ParseController {
        if (!ParseController.instance) {
            ParseController.instance = new ParseController();
        }

        return ParseController.instance;
    }

    async praseData (req: express.Request, res: express.Response): Promise<void | any> {
        try {
            // read body data property
            let bodyReqData: string = req.body.data;

            // extract features
            let [firstName, lastName, clientId] = bodyReqData.split(/[0]+/);
            clientId = clientId.replace(/(\d{3})(\d+)/, '$1-$2');

            // create interface object
            let data: IParsedData = {firstName, lastName, clientId};

            // return the response
            res.status(EStatusCodes.OK).send({statusCode: EStatusCodes.OK, data});
        } catch (err) {
            res.status(EStatusCodes.NOT_FOUND).send(err.message);
        }
    }
}
