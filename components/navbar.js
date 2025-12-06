if (!customElements.get('custom-navbar')) {
    class CustomNavbar extends HTMLElement {
        connectedCallback() {
            this.attachShadow({ mode: 'open' });
            this.shadowRoot.innerHTML = `
                <style>
                    nav {
                        background: rgba(15, 23, 42, 0.8);
                        backdrop-filter: blur(10px);
                        -webkit-backdrop-filter: blur(10px);
                    }
                    
                    .nav-link {
                        transition: all 0.2s ease;
                        position: relative;
                    }
                    
                    .nav-link:hover {
                        color: #a855f7;
                    }
                    
                    .nav-link::after {
                        content: '';
                        position: absolute;
                        bottom: -2px;
                        left: 0;
                        width: 0;
                        height: 2px;
                        background: #a855f7;
                        transition: width 0.3s ease;
                    }
                    
                    .nav-link:hover::after {
                        width: 100%;
                    }
                </style>
                <nav class="border-b border-gray-800 py-4">
                    <div class="container mx-auto px-4 flex justify-between items-center">
                        <a href="/" class="flex items-center space-x-2">
                            <i data-feather="zap" class="text-purple-500"></i>
                            <span class="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">OmniGenie</span>
                        </a>
                        
                        <div class="hidden md:flex space-x-8">
                            <a href="#" class="nav-link">Home</a>
                            <a href="#" class="nav-link">Generate</a>
                            <a href="#" class="nav-link">Gallery</a>
                            <a href="#" class="nav-link">API</a>
                            <a href="#" class="nav-link">About</a>
                        </div>
                        
                        <div class="flex items-center space-x-4">
                            <button class="p-2 rounded-full hover:bg-gray-800 transition">
                                <i data-feather="moon"></i>
                            </button>
                            <button class="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg font-medium hover:opacity-90 transition">
                                Get Pro
                            </button>
                        </div>
                    </div>
                </nav>
            `;
        }
    }

    customElements.define('custom-navbar', CustomNavbar);
}
