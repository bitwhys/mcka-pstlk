// Print functionality
        document.getElementById('print-btn').addEventListener('click', function() {
            window.print();
        });
        
        // Clear all fields
        document.getElementById('clear-btn').addEventListener('click', function() {
            const textareas = document.querySelectorAll('textarea');
            textareas.forEach(textarea => {
                textarea.value = '';
            });
        });
        
        // Save as text
        document.getElementById('save-btn').addEventListener('click', function() {
            const problemQuestion = document.getElementById('problem-question').value;
            const context = document.getElementById('context').value;
            const constraints = document.getElementById('constraints').value;
            const criteria = document.getElementById('criteria').value;
            const stakeholders = document.getElementById('stakeholders').value;
            const scope = document.getElementById('scope').value;
            const sources = document.getElementById('sources').value;
            
            let content = "THE PROBLEM STATEMENT WORKSHEET\n\n";
            content += "Problem question (The basic question to be resolved):\n" + problemQuestion + "\n\n";
            content += "Context:\n" + context + "\n\n";
            content += "Constraints within solution space:\n" + constraints + "\n\n";
            content += "Criteria for success:\n" + criteria + "\n\n";
            content += "Stakeholders:\n" + stakeholders + "\n\n";
            content += "Scope of solution space:\n" + scope + "\n\n";
            content += "Key sources of insight:\n" + sources + "\n\n";
            
            // Create a blob and download
            const blob = new Blob([content], { type: 'text/plain' });
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = 'problem_statement_worksheet.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
        
        // Auto-save to localStorage
        const textareas = document.querySelectorAll('textarea');
        textareas.forEach(textarea => {
            // Load saved content
            const savedContent = localStorage.getItem(textarea.id);
            if (savedContent) {
                textarea.value = savedContent;
            }
            
            // Save on input
            textarea.addEventListener('input', function() {
                localStorage.setItem(this.id, this.value);
            });
        });