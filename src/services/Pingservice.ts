import { Service } from 'typedi';

@Service()
 export default class PingService {

    constructor() {

    }

    pongMessage() {

        let msg = "OK123";
        return msg;
    }
}