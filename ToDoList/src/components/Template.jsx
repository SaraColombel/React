import "./Template.css"

function Template({ children }) {
return (
    <>
    <header className="navbar">
        <img className="logoImg" src="https://picsum.photos/120/120" />
        <h1>Header</h1>
        <nav className="nav">
            <ul>
                <li>Accueil</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>

    <main className="main">
        {children}
    </main>

    <footer className="footer">
        <h1>Footer</h1>
        <ul>
            <li>Mentions légales</li>
            <li>Politique de confidientialité</li>
        </ul>
    </footer>
    </>
)
}

export default Template
