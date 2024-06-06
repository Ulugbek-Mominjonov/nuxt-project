export default defineNuxtRouteMiddleware((to, from) => {
  // if (!useAuthStore().isLoggedIn) {
  //   return navigateTo('/');
  // }

  // example error 
  if (to.path === '/login') {
    throw createError({
      statusCode: 403,
      statusMessage: 'Nimadir xato !!!'
    })
  }
})