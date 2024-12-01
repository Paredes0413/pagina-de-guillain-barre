import React from 'react';
import { getGreeting } from '../utils/greetings';

interface GreetingProps {
  language?: string;
}

export const Greeting: React.FC<GreetingProps> = ({ language = 'es' }) => {
  return (
    <div className="text-4xl font-bold text-indigo-600">
      {getGreeting(language)}
    </div>
  );
};