document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const outputContainer = document.getElementById('output-container');
    
    if (generateBtn) {
        generateBtn.addEventListener('click', async () => {
            const prompt = document.getElementById('ai-prompt').value;
            const type = document.getElementById('content-type').value;
            
            if (!prompt) {
                alert('Please enter a prompt');
                return;
            }
            
            outputContainer.innerHTML = `
                <div class="flex justify-center items-center py-12">
                    <div class="loading-spinner border-4 border-purple-500 border-t-transparent rounded-full w-12 h-12"></div>
                </div>
            `;
            
            setTimeout(() => {
                generateContent(prompt, type);
            }, 2000);
        });
    }
});

function generateContent(prompt, type) {
    const outputContainer = document.getElementById('output-container');
    let outputHTML = '';
    
    switch(type) {
        case 'image':
            outputHTML = `
                <div class="output-card glass-effect rounded-xl p-4 mb-4">
                    <h3 class="text-xl font-semibold mb-2">Generated Image</h3>
                    <img src="https://picsum.photos/600/400?random=${Math.floor(Math.random() * 1000)}" 
                         alt="AI generated image" 
                         class="rounded-lg w-full h-auto">
                    <p class="mt-2 text-gray-400">Prompt: ${prompt}</p>
                </div>
            `;
            break;
            
        case 'video':
            outputHTML = `
                <div class="output-card glass-effect rounded-xl p-4 mb-4">
                    <h3 class="text-xl font-semibold mb-2">Generated Video Script</h3>
                    <div class="bg-gray-800 rounded-lg p-4">
                        <p class="whitespace-pre-line">${generateVideoScript(prompt)}</p>
                    </div>
                    <p class="mt-2 text-gray-400">Prompt: ${prompt}</p>
                </div>
            `;
            break;
            
        case 'script':
            outputHTML = `
                <div class="output-card glass-effect rounded-xl p-4 mb-4">
                    <h3 class="text-xl font-semibold mb-2">Generated Script</h3>
                    <div class="bg-gray-800 rounded-lg p-4">
                        <p class="whitespace-pre-line">${generateScript(prompt)}</p>
                    </div>
                    <p class="mt-2 text-gray-400">Prompt: ${prompt}</p>
                </div>
            `;
            break;
            
        case 'prompt':
            outputHTML = `
                <div class="output-card glass-effect rounded-xl p-4 mb-4">
                    <h3 class="text-xl font-semibold mb-2">Enhanced Prompt</h3>
                    <div class="bg-gray-800 rounded-lg p-4">
                        <p class="whitespace-pre-line">${enhancePrompt(prompt)}</p>
                    </div>
                    <p class="mt-2 text-gray-400">Original Prompt: ${prompt}</p>
                </div>
            `;
            break;
    }
    
    outputContainer.innerHTML = outputHTML;
}

function generateVideoScript(prompt) {
    return `Title: ${prompt}\n\n[Opening Scene]\nEstablishing shot of a futuristic city skyline at dusk. The camera slowly zooms in on our protagonist, standing on a rooftop.\n\n[Scene 1]\nProtagonist: (voiceover) "They told me it couldn't be done. That ${prompt} was impossible. But I knew better..."\n\n[Scene 2]\nCut to action sequence showing the process of ${prompt} in dramatic detail with intense music.\n\n[Closing Scene]\nProtagonist looks at the camera: "This is just the beginning." Fade to black.`;
}

function generateScript(prompt) {
    return `SCRIPT: ${prompt.toUpperCase()}\n\nINT. LOCATION - DAY\n\n(Scene opens with a dramatic reveal related to ${prompt}. The characters react in shock.)\n\nCHARACTER 1\nThis changes everything. ${prompt} was supposed to be just a theory!\n\nCHARACTER 2\n(smirking)\nTheories have a way of becoming reality when you're not looking.\n\n(They both stare at the ${prompt} device as it hums with power. Fade out.)`;
}

function enhancePrompt(prompt) {
    const enhancements = [
        "hyper-detailed",
        "8K resolution",
        "cinematic lighting",
        "unreal engine 5",
        "ray tracing",
        "photorealistic",
        "trending on artstation",
        "award winning",
        "concept art",
        "digital painting"
    ];
    
    const randomEnhancements = [];
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * enhancements.length);
        if (!randomEnhancements.includes(enhancements[randomIndex])) {
            randomEnhancements.push(enhancements[randomIndex]);
        }
    }
    
    return `${prompt}, ${randomEnhancements.join(", ")}`;
}