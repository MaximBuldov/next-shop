import { ILogin } from "@/models";
import { saveToStorage } from "./auth.helper";
import { $auth, $wpApi } from "@/configs";

class AuthService {
  async login(data: ILogin) {
    try {
      const res = await $wpApi.post('/wp-json/jwt-auth/v1/token', data);
      saveToStorage(res.data);
      return res.data;
    } catch (e) {
      throw e;
    }
  }

  async validateToken() {
    try {
      const res = await $auth.post('/wp-json/jwt-auth/v1/token/validate');
      return res.data.data.status === 200;
    } catch (e) {
      throw false;
    }
  }
}

const authService = new AuthService();

export default authService;