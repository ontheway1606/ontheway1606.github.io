document.addEventListener('DOMContentLoaded', () => {
    // Initialize AI generation functionality
    const generateBtn = document.getElementById('generate-btn');
    const outputContainer = document.getElementById('output-container');
    
    if (generateBtn) {
        generateBtn.addEventListener('click', async () => {
            const prompt = document.getElementById('ai-prompt').value;
            const type = document.getElementById('content-type').value;
            const style = document.getElementById('style').value;
            
            if (!prompt) {
                alert('Please enter a prompt');
                return;
            }
            
            // Show loading state
            outputContainer.innerHTML = `
                <div class="flex flex-col justify-center items-center py-12">
                    <div class="loading-spinner border-4 border-purple-500 border-t-transparent rounded-full w-12 h-12 mb-4"></div>
                    <p class="text-gray-400">Generating ${type} in ${style} style...</p>
                </div>
            `;
            
            // Simulate AI generation
            setTimeout(() => {
                generateContent(prompt, type, style);
            }, 2000);
        });
    }
});

function generateContent(prompt, type, style) {
    const outputContainer = document.getElementById('output-container');
    let outputHTML = '';
    
    switch(type) {
        case 'image':
            // Use a better image service with actual AI-like images
            const imageKeywords = prompt.toLowerCase().replace(/ /g, '-');
            const imageStyles = {
                'realistic': 'photorealistic',
                'fantasy': 'fantasy-art',
                'cyberpunk': 'cyberpunk',
                'anime': 'anime',
                'watercolor': 'watercolor-painting'
            };
            
            outputHTML = `
                <div class="output-card glass-effect rounded-xl p-4 mb-4">
                    <h3 class="text-xl font-semibold mb-2">Generated Image - ${style} Style</h3>
                    <div class="relative">
                        <img src="https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000)}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80&${imageKeywords}" 
                             alt="AI generated image: ${prompt}" 
                             class="rounded-lg w-full h-64 object-cover"
                             onerror="this.src='https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'">
                        <div class="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded text-sm">
                            ${style}
                        </div>
                    </div>
                    <div class="mt-4">
                        <p class="text-gray-300"><span class="font-medium">Prompt:</span> ${prompt}</p>
                        <p class="text-gray-400 text-sm mt-1">Style: ${style} | Type: Image</p>
                    </div>
                    <div class="mt-4 flex space-x-2">
                        <button class="bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg text-sm transition">
                            <i data-feather="download" class="w-4 h-4 inline mr-1"></i> Download
                        </button>
                        <button class="bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg text-sm transition">
                            <i data-feather="share-2" class="w-4 h-4 inline mr-1"></i> Share
                        </button>
                        <button class="bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg text-sm transition">
                            <i data-feather="refresh-cw" class="w-4 h-4 inline mr-1"></i> Regenerate
                        </button>
                    </div>
                </div>
            `;
            break;
            
        case 'video':
            outputHTML = `
                <div class="output-card glass-effect rounded-xl p-4 mb-4">
                    <h3 class="text-xl font-semibold mb-2">Generated Video Script - ${style} Style</h3>
                    <div class="bg-gray-800 rounded-lg p-4 font-mono text-sm">
                        <p class="whitespace-pre-line text-gray-200">${generateVideoScript(prompt, style)}</p>
                    </div>
                    <div class="mt-4">
                        <p class="text-gray-300"><span class="font-medium">Prompt:</span> ${prompt}</p>
                        <p class="text-gray-400 text-sm mt-1">Style: ${style} | Type: Video Script</p>
                    </div>
                </div>
            `;
            break;
            
        case 'script':
            outputHTML = `
                <div class="output-card glass-effect rounded-xl p-4 mb-4">
                    <h3 class="text-xl font-semibold mb-2">Generated Screenplay - ${style} Style</h3>
                    <div class="bg-gray-800 rounded-lg p-4 font-mono text-sm">
                        <p class="whitespace-pre-line text-gray-200">${generateScript(prompt, style)}</p>
                    </div>
                    <div class="mt-4">
                        <p class="text-gray-300"><span class="font-medium">Prompt:</span> ${prompt}</p>
                        <p class="text-gray-400 text-sm mt-1">Style: ${style} | Type: Screenplay</p>
                    </div>
                </div>
            `;
            break;
            
        case 'prompt':
            outputHTML = `
                <div class="output-card glass-effect rounded-xl p-4 mb-4">
                    <h3 class="text-xl font-semibold mb-2">Enhanced Prompt - ${style} Style</h3>
                    <div class="bg-gray-800 rounded-lg p-4">
                        <div class="mb-4">
                            <p class="text-gray-400 text-sm mb-1">Original Prompt:</p>
                            <p class="text-gray-300">${prompt}</p>
                        </div>
                        <div>
                            <p class="text-gray-400 text-sm mb-1">Enhanced Version:</p>
                            <p class="text-gray-200 font-medium">${enhancePrompt(prompt, style)}</p>
                        </div>
                    </div>
                    <div class="mt-4">
                        <p class="text-gray-400 text-sm">Style: ${style} | Enhanced with AI</p>
                    </div>
                </div>
            `;
            break;
    }
    
    outputContainer.innerHTML = outputHTML;
    
    // Re-initialize feather icons for new buttons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

// Helper functions for content generation
function generateVideoScript(prompt, style) {
    const styleAdjectives = {
        'realistic': 'gritty and authentic',
        'fantasy': 'magical and epic',
        'cyberpunk': 'neon-drenched and dystopian',
        'anime': 'dynamic and expressive',
        'watercolor': 'dreamlike and painterly'
    };
    
    return `VIDEO SCRIPT: "${prompt.toUpperCase()}"
Style: ${styleAdjectives[style] || style}

[SCENE 1 - ESTABLISHING SHOT]
FADE IN on a ${style} interpretation of: ${prompt}

[VOICEOVER - PROTAGONIST]
(V.O.)
They said ${prompt} was impossible. Too ${style} for this world.
But I've seen it in my dreams...

[SCENE 2 - ACTION SEQUENCE]
Rapid cuts showing different aspects of ${prompt}:
- Close-up details
- Wide establishing shots
- Character interactions
- Emotional moments

[MONTAGE]
Music swells as we see the ${style} vision come to life.
Every frame styled in ${style} aesthetic.

[FINAL SCENE]
The camera pulls back to reveal the full scope of ${prompt}.
FADE TO BLACK.

TITLE CARD: "${prompt}"
A ${style.toUpperCase()} PRODUCTION`;
}

function generateScript(prompt, style) {
    const styleDirections = {
        'realistic': 'The scene feels authentic and grounded',
        'fantasy': 'There is a magical aura in the air',
        'cyberpunk': 'Neon lights reflect in the rain',
        'anime': 'The scene has dramatic angles and expressions',
        'watercolor': 'Everything has a soft, painted quality'
    };
    
    return `SCREENPLAY: "${prompt.toUpperCase()}"
Style: ${style}

FADE IN:

INT. LOCATION - TIME

${styleDirections[style] || 'The scene is visually striking'}.

CHARACTER 1
(staring in awe)
Is this really ${prompt}? It's more ${style} than I imagined.

CHARACTER 2
(smiling knowingly)
Reality is just a suggestion. Especially when you're working with ${style} aesthetics.

CHARACTER 1
But how? The implications of ${prompt}...

CHARACTER 2
(cutting off)
The "how" doesn't matter. Only the ${style} beauty of it.

They both watch as ${prompt} unfolds before them, rendered in perfect ${style} detail.

FADE OUT.

END`;
}

function enhancePrompt(prompt, style) {
    const styleEnhancers = {
        'realistic': ['photorealistic', 'detailed', 'high resolution', 'natural lighting', 'sharp focus'],
        'fantasy': ['epic fantasy', 'magical', 'ethereal', 'mystical lighting', 'concept art'],
        'cyberpunk': ['neon noir', 'dystopian', 'futuristic', 'cyberpunk aesthetic', 'rainy night'],
        'anime': ['anime style', 'studio ghibli', 'dynamic composition', 'expressive', 'colorful'],
        'watercolor': ['watercolor painting', 'soft edges', 'artist's interpretation', 'dreamy', 'painterly']
    };
    
    const technicalEnhancers = [
        '8K resolution',
        'unreal engine 5',
        'ray tracing',
        'cinematic',
        'trending on artstation',
        'award winning',
        'masterpiece',
        'professional'
    ];
    
    const styleWords = styleEnhancers[style] || ['beautiful', 'detailed', 'artistic'];
    const selectedTech = [];
    
    // Pick 3 random technical enhancers
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * technicalEnhancers.length);
        if (!selectedTech.includes(technicalEnhancers[randomIndex])) {
            selectedTech.push(technicalEnhancers[randomIndex]);
        }
    }
    
    const allEnhancers = [...styleWords, ...selectedTech];
    
    // Shuffle and pick 5-7 enhancers
    const shuffled = allEnhancers.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5 + Math.floor(Math.random() * 3));
    
    return `${prompt}, ${selected.join(', ')}`;
}
