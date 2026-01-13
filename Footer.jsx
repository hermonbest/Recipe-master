export default function Footer() {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#f8f8f8',
            color: '#666',
            fontSize: '0.875rem',
            marginTop: 'auto',
            borderTop: '1px solid #e0e0e0'
        }}>
            <p>Recipe Master - Powered by AI | Built with React & Vite</p>
            <div style={{ marginTop: '10px', fontSize: '0.8rem', maxWidth: '800px', margin: '10px auto' }}>
                <p>Enhancements:</p>
                <ul style={{ listStyleType: 'disc', textAlign: 'left', display: 'inline-block' }}>
                    <li>Add CSS animation for the loading spinner</li>
                    <li>Disable 'Get a recipe' button during loading</li>
                    <li>Add functionality to remove ingredients</li>
                    <li>Implement error message display for failed recipe generation</li>
                    <li>Add responsive design improvements</li>
                    <li>Enhance recipe display with better formatting and images</li>
                    <li>Add smooth transitions and hover effects</li>
                    <li>Create a footer component with app info</li>
                </ul>
            </div>
        </footer>
    )
}