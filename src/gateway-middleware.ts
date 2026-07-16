import JWT from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from './error-handler';


const tokens: string[] = ['auth', 'seller', 'gig', 'search', 'order', 'buyer', 'message', 'review']; 

export function verifyGatewayRequest(req: Request, res: Response, next: NextFunction): void {
    const token: string = req.headers.gatewaytoken as string;
    if(!token){
        throw new NotAuthorizedError('Missing gateway token', 'verifyGatewayRequest(): Request not coming from api-gateway');
    }

    try {
        const payload: {id: string; iat: number } = JWT.verify(token, '' as string) as {id: string; iat: number};
        if(!tokens.includes(payload.id)){
            throw new NotAuthorizedError('Missing gateway token', 'verifyGatewayRequest(): Request payload is invalid');
        }
    } catch (error){
        throw new NotAuthorizedError('Missing gateway token', 'verifyGatewayRequest(): Request not coming from api-gateway');
    }

}