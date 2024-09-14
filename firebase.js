// Importa as funções necessárias do Firebase SDK
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA2eeud0AlNEH0xfUfwTvDn9G8FOPPsV8s",
  authDomain: "unityfirebase-ee7a3.firebaseapp.com",
  projectId: "unityfirebase-ee7a3",
  storageBucket: "unityfirebase-ee7a3.appspot.com",
  messagingSenderId: "794767829130",
  appId: "1:794767829130:web:5a7c46798c6e2d8dbd2573"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Exporta o banco de dados para uso em outros módulos
export { database };
