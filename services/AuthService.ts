import { AuthResponse } from '@t';
import $api from '@http';
import { AxiosResponse } from 'axios';

export class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/api/auth/login', { email, password });
  }

  static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/api/auth/registration', { email, password });
  }

  static async logout(): Promise<void> {
    return $api.post('/api/auth/logout');
  }

  static async sendActivationMail(email: string): Promise<void> {
    return $api.post('/api/auth/activate/link', { email });
  }

  static async changePassword(link: string, password: string): Promise<void> {
    return $api.post('/api/auth/change/password', { link, password });
  }

  static async resetPassword(email: string): Promise<void> {
    return $api.post('/api/auth/reset/password', { email });
  }

  static async checkResetPasswordLink(link: string): Promise<void> {
    return $api.post('/api/auth/change/check', { link });
  }
}
