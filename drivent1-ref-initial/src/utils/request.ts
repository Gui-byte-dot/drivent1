import axios from 'axios';
import { requestError } from '@/errors';
import { ViaCEPAddress } from '@/protocols';

async function getAddress(cep: string): Promise<ViaCEPAddress> {
  const result = await request.get(`https://viacep.com.br/ws/${cep}/json/`);
  return result.data;
}

export {
  getAddress,
};
async function get(url: string) {
  try {
    const result = await axios.get(url);
    return result;
  } catch (error) {
    const { status, statusText } = error.response;

    return requestError(status, statusText);
  }
}

export const request = {
  get,
};
