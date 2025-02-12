


export type Category = {
  value: 'frontend' | 'backend' | 'innovación y gestión'; // Para el formulario y filtrado
  title: string; // Para mostrar en el H2
  color: string; // Clase Tailwind o valor HEX
};

export const categories: Category[] = [
  {
    value: 'frontend',
    title: 'Frontend',
    color: '#6BD1FF' 
  },
  {
    value: 'backend',
    title: 'Backend',
    color: '#00C86F'
  },
  {
    value: 'innovación y gestión',
    title: 'Innovación y Gestión',
    color: '#FFBA05'
  }
];