import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  const loc = locale ?? 'pt';
  try {
    const messages = (await import(`./messages/${loc}.json`)).default;
    return {locale: loc, messages};
  } catch {
    const messages = (await import(`./messages/pt.json`)).default;
    return {locale: 'pt', messages};
  }
});


