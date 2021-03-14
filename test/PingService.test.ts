import * as mocha from 'mocha';
import * as chai from 'chai';
import 'reflect-metadata';
import { Container, Service } from 'typedi';
import Loader from "../src/loaders/ServiceRegistry"

const expect = chai.expect;
describe('Ping service', () => {

    it('should be return pong message correctly' , () => {
        const serviceInstance = Container.get(Loader);
        let msg =  serviceInstance.pingService.pongMessage();
      expect(msg).to.equal("OK123");
    });
  
  });