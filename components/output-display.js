if (!customElements.get('custom-output-display')) {
    class CustomOutputDisplay extends HTMLElement {
        connectedCallback() {
            this.attachShadow({ mode: 'open' });
            this.shadowRoot.innerHTML = `
                <style>
                    .output-header {
                        position: relative;
                    }
                    
                    .output-header::after {
                        content: '';
                        position: absolute;
                        bottom: -8px;
                        left: 0;
                        width: 60px;
                        height: 3px;
                        background: linear-gradient(to right, #a855f7, #ec4899);
                    }
                    
                    .action-btn {
                        transition: all 0.2s ease;
                    }
                    
                    .action-btn:hover {
                        transform: translateY(-2px);
                    }
                </style>
                <div>
                    <div class="flex justify-between items-center mb-6 output-header">
                        <h2 class="text-2xl font-bold">Your Creations</h2>
                        <div class="flex space-x-2">
                            <button class="action-btn bg-gray-800 p-2 rounded-lg hover:bg-gray-700">
                                <i data-feather="download"></i>
                            </button>
                            <button class="action-btn bg-gray-800 p-2 rounded-lg hover:bg-gray-700">
                                <i data-feather="share-2"></i>
                            </button>
                            <button class="action-btn bg-gray-800 p-2 rounded-lg hover:bg-gray-700">
                                <i data-feather="trash-2"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div id="output-container" class="grid grid-cols-1 gap-6">
                        <div class="text-center py-12 text-gray-500">
                            <i data-feather="zap" class="w-12 h-12 mx-auto mb-4 text-gray-600"></i>
                            <p>Your generated content will appear here</p>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    customElements.define('custom-output-display', CustomOutputDisplay);
}
