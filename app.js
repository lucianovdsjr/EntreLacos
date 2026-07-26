// Initializing Lucide Icons
lucide.createIcons();

// Elements Selection
const menuBtn = document.getElementById('menu-btn');
const menuCloseBtn = document.getElementById('menu-close-btn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const navLinks = document.querySelectorAll('.nav-link');

// Topics Modal Elements
const topicModal = document.getElementById('topic-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalBodyContent = document.getElementById('modal-body-content');
const contentCards = document.querySelectorAll('.content-card');

// Video Modal Elements
const videoModal = document.getElementById('video-modal');
const videoModalCloseBtn = document.getElementById('video-modal-close-btn');
const youtubePlayer = document.getElementById('youtube-player');
const videoCards = document.querySelectorAll('.video-card');

// Chat Elements
const converseMain = document.getElementById('converse-main');
const chatContainer = document.getElementById('chat-container');
const btnStartChat = document.getElementById('btn-start-chat');
const btnCloseChat = document.getElementById('btn-close-chat');
const chatMessages = document.getElementById('chat-messages');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const btnHeroTalk = document.getElementById('btn-hero-talk');

/* --- 1. Sidebar Navigation Controls --- */
function toggleSidebar() {
    sidebar.classList.toggle('active');
    sidebarOverlay.classList.toggle('active');
}

menuBtn.addEventListener('click', toggleSidebar);
menuCloseBtn.addEventListener('click', toggleSidebar);
sidebarOverlay.addEventListener('click', toggleSidebar);

// Close menu when navigation links are clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        
        // Update active class
        navLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});

// Scroll spy logic to update active nav link
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 120) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});


/* --- 2. Topic Modals Content Database (Aprenda Section) --- */
const topicData = {
    ansiedade: {
        title: "Ansiedade",
        content: `
            <div class="modal-article">
                <h2>Compreendendo a Ansiedade</h2>
                <p>A ansiedade é uma reação natural do corpo ao estresse. É um sentimento de medo ou apreensão sobre o que está por vir. No entanto, quando se torna constante e interfere no seu cotidiano, pode ser sinal de um transtorno de ansiedade.</p>
                
                <h4>Sinais e Sintomas Comuns:</h4>
                <ul>
                    <li>Aceleração cardíaca (palpitações)</li>
                    <li>Respiração rápida ou sensação de falta de ar</li>
                    <li>Tensão muscular generalizada</li>
                    <li>Pensamentos catastróficos ou repetitivos</li>
                    <li>Irritabilidade e dificuldade para dormir</li>
                </ul>

                <h4>Estratégias para Acalmar a Mente:</h4>
                <p><strong>A técnica 4-7-8:</strong> Inspire pelo nariz por 4 segundos, segure o ar por 7 segundos e expire lentamente pela boca por 8 segundos. Repita quatro vezes.</p>
                <p><strong>Mantenha-se no presente:</strong> Use a regra dos 5 sentidos (encontre 5 coisas que pode ver, 4 que pode tocar, 3 que pode ouvir, 2 que pode cheirar e 1 que pode saborear).</p>
                
                <p><em>Lembre-se: buscar ajuda de um profissional de saúde mental é o passo mais importante para aprender a gerenciar a ansiedade a longo prazo.</em></p>
            </div>
        `
    },
    depressao: {
        title: "Depressão",
        content: `
            <div class="modal-article">
                <h2>Compreendendo a Depressão</h2>
                <p>A depressão é uma condição clínica séria e comum que afeta negativamente a forma como você se sente, pensa e age. Diferente da tristeza passageira, ela persiste por semanas ou meses e afeta sua capacidade de realizar atividades diárias.</p>
                
                <h4>Principais Sinais:</h4>
                <ul>
                    <li>Tristeza profunda ou vazio persistente</li>
                    <li>Perda de interesse em atividades antes prazerosas</li>
                    <li>Alterações significativas no peso ou apetite</li>
                    <li>Falta de energia e fadiga constante</li>
                    <li>Sentimentos de inutilidade ou culpa excessiva</li>
                </ul>

                <h4>Como Apoiar a si mesmo:</h4>
                <p><strong>Passos pequenos:</strong> Não se cobre muito. Divida tarefas grandes em metas muito pequenas ao longo do dia.</p>
                <p><strong>Conecte-se:</strong> Embora queira se isolar, tente conversar mesmo que brevemente com alguém que você confia.</p>
                
                <p><strong>Importante:</strong> A depressão tem tratamento efetivo através de psicoterapia, acompanhamento psiquiátrico e mudanças no estilo de vida. Você não precisa carregar esse peso sozinho.</p>
            </div>
        `
    },
    estresse: {
        title: "Estresse",
        content: `
            <div class="modal-article">
                <h2>Gerenciando o Estresse</h2>
                <p>O estresse é uma resposta física e mental a pressões cotidianas. Embora um pouco de estresse possa ser motivador, o estresse crônico sabota a saúde do cérebro e do corpo.</p>
                
                <h4>Efeitos no Organismo:</h4>
                <ul>
                    <li>Dores de cabeça constantes</li>
                    <li>Problemas digestivos ou dor no estômago</li>
                    <li>Mudanças frequentes de humor e cansaço mental</li>
                    <li>Baixa imunidade</li>
                </ul>

                <h4>Dicas Práticas de Controle:</h4>
                <p><strong>Atividade física regular:</strong> Caminhadas leves ajudam a queimar os hormônios do estresse (cortisol e adrenalina).</p>
                <p><strong>Estabeleça limites:</strong> Aprenda a dizer "não" para tarefas que sobrecarregam sua rotina e reserve momentos para o ócio criativo.</p>
                <p><strong>Pratique higiene do sono:</strong> Desligue telas 1 hora antes de dormir.</p>
            </div>
        `
    },
    autoestima: {
        title: "Autoestima",
        content: `
            <div class="modal-article">
                <h2>Desenvolvendo a Autoestima</h2>
                <p>A autoestima é a avaliação subjetiva que fazemos de nós mesmos. Ela impacta nossas escolhas, relacionamentos e como lidamos com os erros.</p>
                
                <h4>Como cultivar uma autoimagem saudável:</h4>
                <ul>
                    <li><strong>Autocompaixão:</strong> Fale consigo mesmo da mesma maneira gentil que falaria com um amigo querido em um momento difícil.</li>
                    <li><strong>Identifique pontos fortes:</strong> Reconheça suas conquistas diárias, mesmo as menores.</li>
                    <li><strong>Evite comparações:</strong> Redes sociais mostram apenas recortes perfeitos da vida alheia. Foque em seu próprio progresso.</li>
                    <li><strong>Acolha suas falhas:</strong> Errar é parte natural da condição humana, não um reflexo do seu valor pessoal.</li>
                </ul>
            </div>
        `
    },
    luto: {
        title: "Luto",
        content: `
            <div class="modal-article">
                <h2>Navegando pelo Luto</h2>
                <p>O luto é uma resposta natural e esperada à perda de alguém ou algo muito importante. Não é uma doença ou fraqueza, mas sim um processo necessário de reajuste emocional.</p>
                
                <h4>O que esperar desse processo:</h4>
                <ul>
                    <li>Não existe uma "forma certa" ou um tempo padrão para o luto passar. Cada pessoa vivencia no seu próprio ritmo.</li>
                    <li>Você pode sentir uma montanha-russa de emoções: choque, raiva, tristeza profunda, culpa e até momentos temporários de alívio.</li>
                </ul>

                <h4>Acolhendo a dor:</h4>
                <p>Não tente reprimir suas lágrimas ou fingir que está tudo bem. A dor expressada é uma dor que começa a cicatrizar. Fale sobre quem ou o que você perdeu quando se sentir confortável.</p>
                <p>Se sentir que a dor está insuportável e paralisante por muito tempo, considere o acolhimento profissional.</p>
            </div>
        `
    }
};

// Open Topic Modal
contentCards.forEach(card => {
    card.addEventListener('click', () => {
        const topic = card.getAttribute('data-topic');
        if (topicData[topic]) {
            modalBodyContent.innerHTML = topicData[topic].content;
            topicModal.classList.add('active');
        }
    });
});

// Close Topic Modal
modalCloseBtn.addEventListener('click', () => {
    topicModal.classList.remove('active');
    modalBodyContent.innerHTML = "";
});

topicModal.addEventListener('click', (e) => {
    if (e.target === topicModal) {
        topicModal.classList.remove('active');
        modalBodyContent.innerHTML = "";
    }
});


/* --- 3. Video Modal Control (Cuide de Você Section) --- */
videoCards.forEach(card => {
    card.addEventListener('click', () => {
        const videoId = card.getAttribute('data-video-id');
        youtubePlayer.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;
        videoModal.classList.add('active');
    });
});

function closeVideoModal() {
    videoModal.classList.remove('active');
    youtubePlayer.src = "";
}

videoModalCloseBtn.addEventListener('click', closeVideoModal);
videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        closeVideoModal();
    }
});


/* --- 4. Interactive Acolhimento Chat Simulation (Converse Section) --- */
const botResponses = [
    "Olá! Estou muito feliz que você tenha dado esse passo. O acolhimento aqui é totalmente anônimo e seguro. Como você está se sentindo hoje?",
    "Entendo. Sinta-se à vontade para compartilhar o que está no seu coração. Quero te escutar sem julgamentos.",
    "O que você está passando é válido. Muitas vezes nos sentimos cansados ou sobrecarregados, e pedir ajuda é um sinal de coragem. Como posso te apoiar melhor agora?",
    "Estou aqui te acompanhando. Saiba que as emoções são como ondas: elas vêm com força, mas também passam. Quer conversar mais sobre isso ou prefere fazer um exercício de respiração simples comigo?",
    "Se você quiser, posso sugerir uma meditação focada em respiração guiada ou apenas continuar aqui te ouvindo. O que fizer mais sentido para você."
];

let responseIndex = 0;

function appendMessage(text, sender) {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender}`;
    bubble.textContent = text;
    chatMessages.appendChild(bubble);
    
    // Auto Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function simulateBotTyping() {
    // Show a subtle visual feedback or typing effect if desired, or simple delayed response
    setTimeout(() => {
        let reply = "";
        if (responseIndex < botResponses.length) {
            reply = botResponses[responseIndex];
            responseIndex++;
        } else {
            reply = "Obrigado por compartilhar isso comigo. Lembre-se de cuidar de você hoje. Se precisar, nosso apoio estará sempre aqui para te escutar.";
        }
        appendMessage(reply, 'received');
    }, 1500);
}

// Start Chat Button Click
btnStartChat.addEventListener('click', () => {
    converseMain.classList.add('hidden');
    chatContainer.classList.remove('hidden');
    
    // Reset responses
    chatMessages.innerHTML = "";
    responseIndex = 0;
    
    // Initial welcome message
    setTimeout(() => {
        appendMessage("Olá! Sou o assistente de acolhimento do Entre Laços. Este é um espaço seguro e anônimo. Gostaria de me dizer o seu nome ou como prefere ser chamado(a)?", 'received');
    }, 500);
});

// Close/Leave Chat Button Click
btnCloseChat.addEventListener('click', () => {
    if (confirm("Deseja realmente encerrar a conversa de apoio anônimo?")) {
        chatContainer.classList.add('hidden');
        converseMain.classList.remove('hidden');
    }
});

// Chat Form Submit Message
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (text) {
        appendMessage(text, 'sent');
        chatInput.value = "";
        simulateBotTyping();
    }
});

// Link "preciso conversar" on hero
btnHeroTalk.addEventListener('click', (e) => {
    // Smooth scroll is handled by CSS, but let's open the chat automatically
    setTimeout(() => {
        btnStartChat.click();
    }, 400);
});
