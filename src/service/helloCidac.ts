import api from './api'
import { IHello } from '../models/Hello'

export class HelloCidacService {
  static async getHelloCidac(): Promise<IHello> {
    const response = await api.get('/hello-cidac')
    return response.data as IHello
  }
}
