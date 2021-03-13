import { Container, Service } from 'typedi';
import PingService from "../services/Pingservice"
@Service()
export default class ServiceRegistry {
  constructor(
    // Register service here by delcare public enviroment
    public pingService: PingService) {

  }
}