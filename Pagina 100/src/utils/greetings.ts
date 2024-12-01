export const getGreeting = (language: string = 'es'): string => {
  const greetings: Record<string, string> = {
    es: '¡Hola!',
    en: 'Hello!',
    fr: 'Bonjour!',
    de: 'Hallo!'
  };
  
  return greetings[language] || greetings.es;
};