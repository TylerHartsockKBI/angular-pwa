import {JsonResponse} from './json-response';
import {Employee} from './employee';

export class LoginResponse {
  response: JsonResponse;
  employee: Employee;
}
