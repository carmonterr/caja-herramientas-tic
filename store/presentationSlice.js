import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tema: 'Inteligencia Artificial en la Educación',
  descripcion:
    'Uso de herramientas TIC e inteligencia artificial para mejorar el aprendizaje.',
  imagenesIA: [
    {
      id: 1,
      prompt:
        'Estudiante usando inteligencia artificial para aprender, estilo digital, ambiente educativo moderno',
      imagen: '/ia1.jpg',
    },
    {
      id: 2,
      prompt:
        'Aula futurista con inteligencia artificial apoyando a estudiantes, ilustración tecnológica',
      imagen: '/ia2.jpg',
    },
  ],
  herramientas: [
    {
      nombre: 'ChatGPT',
      descripcion: 'IA para apoyo educativo y generación de contenido.',
      icono: '🤖',
    },
    {
      nombre: 'Canva',
      descripcion: 'Diseño de presentaciones y recursos visuales.',
      icono: '🎨',
    },
    {
      nombre: 'Google Drive',
      descripcion: 'Almacenamiento y colaboración en la nube.',
      icono: '☁️',
    },
    {
      nombre: 'React / Next.js',
      descripcion: 'Desarrollo de aplicaciones SPA.',
      icono: '⚛️',
    },
  ],
};

const presentationSlice = createSlice({
  name: 'presentation',
  initialState,
  reducers: {},
});

export default presentationSlice.reducer;
