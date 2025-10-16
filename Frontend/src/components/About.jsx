import React from 'react';

const About = () => {
    return (
        <section className="min-h-screen bg-base-200">
            <div className="max-w-5xl mx-auto px-4 py-16 space-y-10">
                <header className="text-center space-y-2">
                    <h1 className="text-4xl font-extrabold">About BookStore</h1>
                    <p className="text-base-content/70 max-w-2xl mx-auto">
                        We help readers discover great books with curated lists and thoughtful recommendations.
                        From timeless classics to the latest releases, our mission is to make reading easier and more enjoyable.
                    </p>
                </header>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="card bg-base-100 shadow">
                        <div className="card-body">
                            <h2 className="card-title">Curated Selections</h2>
                            <p>Handpicked titles across genres so you spend less time searching and more time reading.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow">
                        <div className="card-body">
                            <h2 className="card-title">Community First</h2>
                            <p>We listen to readers and highlight what7s trending in the community.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow">
                        <div className="card-body">
                            <h2 className="card-title">Learn & Grow</h2>
                            <p>Discover courses, guides, and resources to deepen your love for books.</p>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow">
                    <div className="card-body">
                        <h3 className="card-title">Our Story</h3>
                        <p>
                            BookStore started as a simple list shared among friends. Today, it7s a growing destination for
                            readers everywherebringing together quality recommendations, easy discovery, and a welcoming community.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
