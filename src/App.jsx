import { useState } from 'react';
import { Sparkles, Utensils, Key, Heart } from 'lucide-react';
import ImageAnalyzer from './components/ImageAnalyzer';
import DietPlanner from './components/DietPlanner';

function App() {
    const [apiKey, setApiKey] = useState('');
    const [isKeySet, setIsKeySet] = useState(false);
    const [activeTab, setActiveTab] = useState('calories'); // 'calories' or 'diet'

    const handleKeySubmit = (e) => {
        e.preventDefault();
        if (apiKey.trim().length > 0) {
            setIsKeySet(true);
        }
    };

    return (
        <div className="App">
            {/* Header */}
            <header style={{ marginBottom: '2rem' }}>
                <h1 className="title-gradient" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
                    AI Fitness Buddy 🧘‍♀️
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#666' }}>
                    Your personal AI trainer & nutritionist! Created with ❤️ by You & FullstackBhabhi details
                </p>
            </header>

            {/* Main Content */}
            <main>
                {!isKeySet ? (
                    <div className="glass-panel animate-fade-in" style={{ maxWidth: '500px', margin: '0 auto' }}>
                        <h2 style={{ marginBottom: '1rem', color: 'var(--primary-dark)' }}>Let's get started! 🚀</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            To use my AI powers, I need a Gemini API Key. Don't worry, it's free!
                        </p>
                        <form onSubmit={handleKeySubmit}>
                            <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                                <Key size={20} style={{ position: 'absolute', left: '12px', top: '14px', color: '#999' }} />
                                <input
                                    type="password"
                                    placeholder="Paste your Gemini API Key here..."
                                    value={apiKey}
                                    onChange={(e) => setApiKey(e.target.value)}
                                    style={{ paddingLeft: '40px' }}
                                />
                            </div>
                            <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                                Start My Journey
                            </button>
                        </form>
                        <p style={{ fontSize: '0.8rem', marginTop: '1rem', color: '#888' }}>
                            Get your key from <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" style={{ color: 'var(--primary-dark)' }}>Google AI Studio</a>
                        </p>
                    </div>
                ) : (
                    <div>
                        {/* Tabs */}
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <button
                                onClick={() => setActiveTab('calories')}
                                style={{
                                    padding: '1rem 2rem',
                                    borderRadius: '12px',
                                    border: 'none',
                                    background: activeTab === 'calories' ? 'linear-gradient(45deg, var(--primary), var(--primary-dark))' : 'white',
                                    color: activeTab === 'calories' ? 'white' : 'var(--text)',
                                    fontWeight: 600,
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    boxShadow: activeTab === 'calories' ? '0 5px 15px rgba(255, 105, 180, 0.4)' : 'none',
                                    transition: 'all 0.3s'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Sparkles size={20} /> Calorie Counter
                                </div>
                            </button>

                            <button
                                onClick={() => setActiveTab('diet')}
                                style={{
                                    padding: '1rem 2rem',
                                    borderRadius: '12px',
                                    border: 'none',
                                    background: activeTab === 'diet' ? 'linear-gradient(45deg, var(--accent), #5f9ea0)' : 'white',
                                    color: activeTab === 'diet' ? 'white' : 'var(--text)',
                                    fontWeight: 600,
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    boxShadow: activeTab === 'diet' ? '0 5px 15px rgba(135, 206, 235, 0.4)' : 'none',
                                    transition: 'all 0.3s'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Utensils size={20} /> Gym Diet Plans
                                </div>
                            </button>
                        </div>

                        {/* Content Area */}
                        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                            {activeTab === 'calories' ? (
                                <ImageAnalyzer apiKey={apiKey} />
                            ) : (
                                <DietPlanner apiKey={apiKey} />
                            )}
                        </div>
                    </div>
                )}
            </main>

            <footer style={{ marginTop: '4rem', padding: '2rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: '#888' }}>
                    Made with <Heart size={16} fill="var(--primary)" color="var(--primary)" /> by FullstackBhabhi's Student
                </p>
            </footer>
        </div>
    );
}

export default App;
