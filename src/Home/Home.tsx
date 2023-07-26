const Home = () => {
    return (
        <main className="home-container">
            <section className="home-intro-container">
                <h2 className="home-welcome">Welcome to</h2>
                <h1 className="home-title">Math Hero</h1>
                <h2 className="home-intro">The app to help children
                    <br></br>improve their math skills!
                </h2>
            </section>
            <section className="home-grade-selection">
                <h2>Select your elementary school grade:</h2>
                <div className="home-button-container">
                    <button className="grade-btn">Grade 1</button>
                    <button className="grade-btn">Grade 2</button>
                    <button className="grade-btn">Grade 3</button>
                    <button className="grade-btn">Grade 4</button>
                    <button className="grade-btn">Grade 5</button>
                    <button className="grade-btn">Grade 6</button>
                </div>
            </section>
        </main>
    );
}
 
export default Home;