class CustomAiControls extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .generation-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    transition: all 0.3s ease;
                }
                
                .generation-card:hover {
                    background: rgba(255, 255, 255, 0.05);
                    border-color: rgba(168, 85, 247, 0.3);
                }
                
                textarea {
                    background: rgba(255, 255, 255, 0.05);
                    resize: none;
                }
                
                textarea:focus {
                    outline: none;
                    border-color: rgba(168, 85, 247, 0.5);
                }
                
                select {
                    background: rgba(255, 255, 255, 0.05);
                }
                
                select:focus {
                    outline: none;
                    border-color: rgba(168, 85, 247, 0.5);
                }
            </style>
            <div class="generation-card rounded-xl p-6 mb-8">
                <h2 class="text-2xl font-bold mb-6">Create Anything</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label for="content-type" class="block text-sm font-medium mb-2">Content Type</label>
                        <select id="content-type" class="w-full px-4 py-3 rounded-lg border border-gray-700 focus:border-purple-500 transition">
                            <option value="image">Image</option>
                            <option value="video">Video Script</option>
                            <option value="script">Screenplay</option>
                            <option value="prompt">Enhanced Prompt</option>
                        </select>
                    </div>
                    
                    <div>
                        <label for="style" class="block text-sm font-medium mb-2">Style</label>
                        <select id="style" class="w-full px-4 py-3 rounded-lg border border-gray-700 focus:border-purple-500 transition">
                            <option value="realistic">Realistic</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="cyberpunk">Cyberpunk</option>
                            <option value="anime">Anime</option>
                            <option value="watercolor">Watercolor</option>
                        </select>
                    </div>
                </div>
                
                <div class="mb-6">
                    <label for="ai-prompt" class="block text-sm font-medium mb-2">Your Unlimited Prompt</label>
                    <textarea id="ai-prompt" rows="4" class="w-full px-4 py-3 rounded-lg border border-gray-700 focus:border-purple-500 transition" placeholder="Describe what you want to create..."></textarea>
                </div>
                
                <div class="flex justify-end">
                    <button id="generate-btn" class="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-lg font-medium hover:opacity-90 transition flex items-center space-x-2">
                        <span>Generate</span>
                        <i data-feather="arrow-right"></i>
                    </button>
                </div>
            </div>
        `;
    }
}

customElements.define('custom-ai-controls', CustomAiControls);
