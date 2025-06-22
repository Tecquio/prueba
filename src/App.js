import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { LogIn, User, ArrowLeft, Settings, LogOut, Award, DollarSign, ListChecks, BrainCircuit } from 'lucide-react';

// --- Paleta de Colores de Tailwind ---
const colors = {
    splash: {
        bg: 'bg-[#00B8A9]',
        primary: 'text-[#F3E9D2]'
    },
    login: {
        bg: 'bg-[#F3E9D2]',
        primary: 'bg-[#00B8A9]',
        primaryText: 'text-white',
        secondary: 'text-[#212121]',
        accent: 'bg-[#F94144]',
    },
    dashboard: {
        bg: 'bg-[#F3E9D2]',
        primary: 'bg-[#577590]',
        secondary: 'text-[#212121]',
        accent: 'bg-[#00B8A9]',
        accentText: 'text-white',
        cardBg: 'bg-white',
    },
    task: {
        bg: 'bg-[#F3E9D2]',
        primary: 'bg-[#577590]',
        primaryText: 'text-white',
        secondary: 'text-[#212121]',
        accent: 'bg-[#F94144]',
        accentText: 'text-white'
    },
    profile: {
        bg: 'bg-[#C9B6E4]',
        primary: 'bg-[#00B8A9]',
        primaryText: 'text-white',
        secondary: 'text-[#212121]',
    }
};

// --- Componente de Carga (Spinner) ---
const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-gray-900"></div>
    </div>
);


// --- Componente: SplashScreen ---
const SplashScreen = ({ onLoaded }) => {
    // ... (sin cambios)
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(oldProgress => {
                if (oldProgress === 100) {
                    clearInterval(timer);
                    return 100;
                }
                const newProgress = oldProgress + 10;
                if (newProgress >= 100) {
                   setTimeout(onLoaded, 500);
                }
                return Math.min(newProgress, 100);
            });
        }, 200);

        return () => {
            clearInterval(timer);
        };
    }, [onLoaded]);

    return (
        <div className={`flex flex-col items-center justify-center h-screen w-full ${colors.splash.bg} transition-colors duration-500`}>
            <div className="text-center">
                <BrainCircuit className={`${colors.splash.primary} mx-auto mb-4`} size={80} strokeWidth={1.5}/>
                <h1 className={`text-4xl font-bold ${colors.splash.primary}`}>AI Worker</h1>
                <p className={`${colors.splash.primary} mt-2`}>Potenciando la inteligencia artificial, una tarea a la vez.</p>
            </div>
            <div className="absolute bottom-20 w-4/5 max-w-sm bg-white/20 rounded-full h-2.5">
                <div className="bg-[#F3E9D2] h-2.5 rounded-full" style={{ width: `${progress}%`, transition: 'width 0.2s ease-in-out' }}></div>
            </div>
        </div>
    );
};


// --- Componente: LoginScreen ---
const LoginScreen = ({ onLogin }) => (
    <div className={`flex flex-col justify-center h-screen w-full p-8 ${colors.login.bg}`}>
        <div className="max-w-md w-full mx-auto">
            <header className="text-center mb-12">
                <h1 className={`text-3xl font-bold ${colors.login.secondary}`}>Bienvenido de Vuelta</h1>
                <p className={`${colors.login.secondary} opacity-70 mt-2`}>Inicia sesión para continuar con tus tareas.</p>
            </header>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
                <div>
                    <label htmlFor="email" className={`block text-sm font-medium ${colors.login.secondary}`}>Usuario o Email</label>
                    <input type="email" id="email" defaultValue="usuario@ejemplo.com" className={`mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00B8A9] transition`} />
                </div>
                <div>
                    <label htmlFor="password" className={`block text-sm font-medium ${colors.login.secondary}`}>Contraseña</label>
                    <input type="password" id="password" defaultValue="password" className={`mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00B8A9] transition`} />
                </div>
                <button type="submit" className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium ${colors.login.primaryText} ${colors.login.primary} hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00B8A9] transition-transform transform hover:scale-105`}>
                    Entrar
                </button>
            </form>
            <div className="text-center mt-8">
                <a href="#" className={`font-medium ${colors.login.secondary} hover:underline`}>
                    ¿No tienes cuenta? Regístrate
                </a>
            </div>
        </div>
    </div>
);

// --- Componente: DashboardScreen ---
const DashboardScreen = ({ onNavigate }) => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3001/tasks')
            .then(response => response.json())
            .then(data => {
                setTasks(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching tasks:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div className={`${colors.dashboard.bg} min-h-screen`}>
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-md z-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center">
                           <BrainCircuit className={colors.login.secondary} size={32} />
                            <span className={`ml-2 text-xl font-bold ${colors.dashboard.secondary}`}>Dashboard</span>
                        </div>
                        <button onClick={() => onNavigate('profile')} className="p-2 rounded-full hover:bg-gray-200 transition">
                            <User className={colors.dashboard.secondary} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Task List */}
            <main className="pt-28 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className={`text-2xl font-semibold mb-6 ${colors.dashboard.secondary}`}>Tareas Disponibles</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {tasks.map(task => (
                        <div key={task.id} className={`${colors.dashboard.cardBg} rounded-xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-1`}>
                            <div className="p-6">
                                <h3 className={`text-lg font-bold ${colors.dashboard.secondary}`}>{task.title}</h3>
                                <p className="text-sm text-gray-500 mt-1">Recompensa: ${task.reward}</p>
                            </div>
                            <div className="p-4 bg-gray-50">
                                 <button onClick={() => onNavigate('task')} className={`w-full py-2 px-4 rounded-lg font-semibold ${colors.dashboard.accent} ${colors.dashboard.accentText} hover:opacity-90 transition`}>
                                     Comenzar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            
            {/* Footer Navigation */}
            <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-[0_-2px_5px_rgba(0,0,0,0.1)]">
                 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-around h-16 items-center">
                        <button onClick={() => onNavigate('dashboard')} className={`flex flex-col items-center gap-1 ${colors.dashboard.secondary}`}>
                            <ListChecks className="text-[#577590]" />
                            <span className="text-xs font-medium text-[#577590]">Dashboard</span>
                        </button>
                         <button onClick={() => onNavigate('profile')} className={`flex flex-col items-center gap-1 ${colors.dashboard.secondary} opacity-70 hover:opacity-100 transition`}>
                            <User />
                            <span className="text-xs font-medium">Perfil</span>
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
}

// --- Componente: TaskScreen ---
const TaskScreen = ({ onNavigate }) => (
    // ... (sin cambios por ahora, pero listo para ser dinámico)
    <div className={`flex flex-col h-screen ${colors.task.bg}`}>
        <header className="flex-shrink-0">
             <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center h-20">
                    <button onClick={() => onNavigate('dashboard')} className="p-2 -ml-2 rounded-full hover:bg-black/10 transition">
                        <ArrowLeft className={colors.task.secondary} />
                    </button>
                    <h1 className={`text-xl font-bold ml-4 ${colors.task.secondary}`}>Clasificar Imagen</h1>
                </div>
            </div>
        </header>
        <main className="flex-grow flex flex-col p-4 md:p-8 overflow-y-auto">
            <div className="flex-grow flex items-center justify-center w-full min-h-[30vh] md:min-h-0 md:h-[60%] mb-6">
                 <img src="https://placehold.co/600x400/F3E9D2/212121?text=Imagen+de+Tarea" alt="Tarea a realizar" className="max-w-full max-h-full object-contain rounded-xl shadow-lg"/>
            </div>
            <div className="w-full max-w-lg mx-auto space-y-4">
                 <p className={`text-center mb-4 font-semibold ${colors.task.secondary}`}>¿Qué objeto aparece en la imagen?</p>
                 <button className={`w-full text-left p-4 rounded-lg font-semibold transition-transform transform hover:scale-105 ${colors.task.primary} ${colors.task.primaryText}`}>Opción A: Un Gato</button>
                 <button className={`w-full text-left p-4 rounded-lg font-semibold transition-transform transform hover:scale-105 ${colors.task.primary} ${colors.task.primaryText}`}>Opción B: Un Perro</button>
                 <button className={`w-full text-left p-4 rounded-lg font-semibold transition-transform transform hover:scale-105 ${colors.task.primary} ${colors.task.primaryText}`}>Opción C: Un Pájaro</button>
                 <button className={`w-full text-left p-4 rounded-lg font-semibold transition-transform transform hover:scale-105 ${colors.task.primary} ${colors.task.primaryText}`}>Opción D: Ninguno</button>
            </div>
        </main>
        <footer className="flex-shrink-0 p-4 sticky bottom-0 bg-gradient-to-t from-[#F3E9D2] to-transparent">
            <div className="max-w-lg mx-auto">
                <button onClick={() => onNavigate('dashboard')} className={`w-full py-4 px-4 rounded-xl shadow-lg font-bold text-lg ${colors.task.accent} ${colors.task.accentText} hover:opacity-90 transition-transform transform hover:scale-105`}>
                    Enviar Respuesta
                </button>
            </div>
        </footer>
    </div>
);


// --- Componente: ProfileScreen ---
const ProfileScreen = ({ onNavigate }) => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3001/profile')
            .then(response => response.json())
            .then(data => {
                setProfile(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching profile:", error);
                setLoading(false);
            });
    }, []);

    if (loading || !profile) {
        return <LoadingSpinner />;
    }

    const xpPercentage = (profile.xp / profile.xp_next_level) * 100;

    return (
        <div className={`${colors.profile.bg} min-h-screen`}>
            <header className="bg-white/30 backdrop-blur-sm">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center h-20">
                        <button onClick={() => onNavigate('dashboard')} className="p-2 -ml-2 rounded-full hover:bg-black/10 transition">
                            <ArrowLeft className={colors.profile.secondary} />
                        </button>
                        <h1 className={`text-xl font-bold ml-4 ${colors.profile.secondary}`}>Perfil y Ganancias</h1>
                    </div>
                </div>
            </header>
            <main className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8 pb-24">
                {/* Stats Section */}
                <div className="grid md:grid-cols-2 gap-6 text-center">
                    <div className="bg-white/50 p-6 rounded-xl shadow-md">
                        <DollarSign className={`mx-auto mb-2 ${colors.profile.secondary}`} size={32} />
                        <p className={`text-sm font-semibold ${colors.profile.secondary} opacity-80`}>Saldo Acumulado</p>
                        <p className={`text-4xl font-bold ${colors.profile.secondary}`}>${profile.balance_mxn.toFixed(2)}</p>
                    </div>
                    <div className="bg-white/50 p-6 rounded-xl shadow-md">
                        <ListChecks className={`mx-auto mb-2 ${colors.profile.secondary}`} size={32}/>
                        <p className={`text-sm font-semibold ${colors.profile.secondary} opacity-80`}>Tareas Completadas</p>
                        <p className={`text-4xl font-bold ${colors.profile.secondary}`}>{profile.tasks_completed}</p>
                    </div>
                </div>

                {/* Weekly Chart */}
                <div className="bg-white/50 p-6 rounded-xl shadow-md">
                    <h3 className={`text-lg font-bold mb-4 ${colors.profile.secondary}`}>Progreso Semanal</h3>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <BarChart data={profile.weekly_progress}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" tick={{ fill: '#212121' }} />
                                <YAxis tick={{ fill: '#212121' }} />
                                <Tooltip cursor={{fill: 'rgba(0, 184, 169, 0.2)'}} />
                                <Legend />
                                <Bar dataKey="Tareas" fill="#00B8A9" name="Tareas Completadas" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* User Level */}
                 <div className="bg-white/50 p-6 rounded-xl shadow-md">
                    <h3 className={`text-lg font-bold mb-4 ${colors.profile.secondary}`}>Nivel de Usuario</h3>
                    <div className="flex items-center gap-4">
                        <Award size={40} className="text-[#577590]" />
                        <div>
                            <p className={`font-bold text-xl ${colors.profile.secondary}`}>{profile.level}</p>
                            <p className={`${colors.profile.secondary} opacity-80 text-sm`}>Desbloquea tareas de mayor complejidad y recompensa.</p>
                        </div>
                    </div>
                     <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                        <div className={`${colors.profile.primary} h-2.5 rounded-full`} style={{width: `${xpPercentage}%`}}></div>
                    </div>
                    <p className={`${colors.profile.secondary} text-xs text-right mt-1`}>{profile.xp}/{profile.xp_next_level} XP para el siguiente nivel</p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                     <button className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold ${colors.profile.primary} ${colors.profile.primaryText} transition-transform transform hover:scale-105`}>
                        <Settings size={20} />
                        <span>Configuración de la Cuenta</span>
                     </button>
                     <button onClick={() => onNavigate('login')} className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold bg-red-200 text-red-800 transition-transform transform hover:scale-105`}>
                        <LogOut size={20} />
                        <span>Cerrar Sesión</span>
                     </button>
                </div>
            </main>
        </div>
    );
};


// --- Componente Principal: App ---
export default function App() {
    const [currentPage, setCurrentPage] = useState('splash');

    const handleNavigation = (page) => {
        setCurrentPage(page);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'splash':
                return <SplashScreen onLoaded={() => handleNavigation('login')} />;
            case 'login':
                return <LoginScreen onLogin={() => handleNavigation('dashboard')} />;
            case 'dashboard':
                return <DashboardScreen onNavigate={handleNavigation} />;
            case 'task':
                return <TaskScreen onNavigate={handleNavigation} />;
            case 'profile':
                return <ProfileScreen onNavigate={handleNavigation} />;
            default:
                return <LoginScreen onLogin={() => handleNavigation('dashboard')} />;
        }
    };

    return <div className="font-sans antialiased">{renderPage()}</div>;
}

