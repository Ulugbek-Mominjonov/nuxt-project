import { useStorage } from '@vueuse/core';
import type { DinamikObject } from '~/utils/types';

export const useAuthStore = defineStore("auth", () => {
  const user = useStorage('user', ref<DinamikObject>({}));
  const accessToken = useStorage('accessToken', ref<string>(''));
  const refreshToken = useStorage('refreshToken', ref<string>(''));
  const isLoggedIn = computed(() => accessToken.value !== '');
  const login = (userValue: any, accessTokenValue: string, refreshTokenValue: string) => {
    user.value = userValue;
    refreshToken.value = refreshTokenValue
    accessToken.value = accessTokenValue;
  }
  const logout = () => {
    user.value = {};
    accessToken.value = '';
    refreshToken.value = '';
  }

  const refreshAccessToken = (token: string) => {
    accessToken.value = token;
  }

  return {user, isLoggedIn, accessToken, logout, refreshToken, login, refreshAccessToken};
})