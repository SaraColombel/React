function Template({ children }) {
return (
    <>
    <header>
        <img src="https://picsum.photos/100/100" />
        <h1>HEADER</h1>
        <nav>
            <ul>
                <li>Accueil</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>m

    <main>
        {children}
    </main>

    <footer>
        <h1>FOOTER</h1>
        <ul>
            <li>Mentions légales</li>
            <li>Politique de confidientialité</li>
        </ul>
    </footer>
    </>
);
}

export default Template
