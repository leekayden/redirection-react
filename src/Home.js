import React from 'react'

function Home() {
    return (
        <div className="Home">

            <div id="wrapper">

                <div id="main">
                    <div class="inner">

                        <header id="header">
                            <a href="" class="logo"><strong>Cloudserve</strong> by Kayden Lee</a>

                            <ul class="icons">
                                <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                                <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                                <li><a href="https://www.instagram.com/kaydenprogrammer/" class="icon brands fa-instagram"><span
                                    class="label">Instagram</span></a></li>
                                <li><a href="https://web.whatsapp.com/send?phone=+6581133596&text=Hi"
                                    class="icon brands fa-whatsapp"><span class="label">WhatsApp</span></a></li>
                                <li><a href="#" class="icon brands fa-discord"><span class="label">Discord</span></a></li>
                                <li><a href="https://linkedin.com/in/kaydenlee-" class="icon brands fa-linkedin"><span
                                    class="label">LinkedIn</span></a></li>
                            </ul>

                            <br />

                            <ul class="actions">
                                <li><a href="https://replace.vercel.app/login" class="button">Sign In</a></li>
                            </ul>



                        </header>

                        <section id="banner">
                            <div class="content">
                                <header>
                                    <h1>Cloudserve</h1>
                                    <p>A free suite of cloud services</p>
                                </header>
                                <p>Our redirection service is our niche product. It has a wide variety of features for everyone
                                    to use for free. We also have other cloud services that are all free! Isn't that great!?
                                    Click on the button below to learn more!</p>
                                <ul class="actions">
                                    <li><a href="https://replace.vercel.app/products/learn" class="button big">Learn More</a>
                                    </li>
                                </ul>
                            </div>
                            <span class="image object">
                                <img src="https://motiongraphicsphoebe.files.wordpress.com/2018/10/8ee212dac057d412972e0c8cc164deee.gif"
                                    alt="Redirection and CDN service provider" />
                            </span>
                        </section>

                        <section>
                            <header class="major">
                                <h2>Our Services</h2>
                            </header>
                            <div class="features">
                                <article>
                                    <span class="icon fa-gem"></span>
                                    <div class="content">
                                        <h3>High Quality Products and Services</h3>
                                        <p></p>
                                    </div>
                                </article>
                                <article>
                                    <span class="icon solid fa-paper-plane"></span>
                                    <div class="content">
                                        <h3>Quick CDN loading time</h3>
                                        <p></p>
                                    </div>
                                </article>
                                <article>
                                    <span class="icon solid fa-rocket"></span>
                                    <div class="content">
                                        <h3>Instant results and real-time analytics</h3>
                                        <p></p>
                                    </div>
                                </article>
                                <article>
                                    <span class="icon solid fa-signal"></span>
                                    <div class="content">
                                        <h3>Always online - Anytime, Anywhere</h3>
                                        <p></p>
                                    </div>
                                </article>
                            </div>
                        </section>

                        <section>
                            <header class="major">
                                <h2>Recent Posts</h2>
                            </header>
                            <div class="posts">
                                <article>
                                    <a href="https://payal-das.medium.com/linux-vs-windows-which-is-better-and-why-8fefae679ef9"
                                        class="image"><img src="https://miro.medium.com/max/1400/1*kSMVNLhPjCKMz_vZ5cDeFg.png"
                                            alt="Windows vs Linux (Image credit: https://payal-das.medium.com/linux-vs-windows-which-is-better-and-why-8fefae679ef9)" /></a>
                                    <h3>Windows vs Linux: The ultimate challenge</h3>
                                    <p>Find out which operating system, Windows or Linux, can get you set up and ready to go
                                        faster!</p>
                                    <p>Image credit: <a
                                        href="https://payal-das.medium.com/linux-vs-windows-which-is-better-and-why-8fefae679ef9"
                                        target="_blank">https://payal-das.medium.com/linux-vs-windows-which-is-better-and-why-8fefae679ef9</a>
                                    </p>
                                    <ul class="actions">
                                        <li><a href="https://replace.vercel.app/blog/windows-vs-linux-ultimate-challenge"
                                            class="button">View</a></li>
                                    </ul>
                                </article>

                                <article>
                                    <a href="" class="image"><img src="" alt="" /></a>
                                    <h3></h3>
                                    <p></p>
                                </article>
                                <br />
                                <ul class="actions">
                                    <li><a href="https://replace.vercel.app/blog" class="button">More</a></li>
                                </ul>

                            </div>
                        </section>

                        <section>
                            <h3>Contact Us</h3>

                            <form method="POST" action="https://replace.vercel.app/contact-us-form-responses">
                                <div class="row gtr-uniform">
                                    <div class="col-6 col-12-xsmall">
                                        <input type="text" name="demo-name" id="demo-name" value="" placeholder="Name"
                                            required />
                                    </div>
                                    <div class="col-6 col-12-xsmall">
                                        <input type="email" name="demo-email" id="demo-email" value="" placeholder="Email"
                                            required />
                                    </div>

                                    <div class="col-12">
                                        <select name="category" id="category" required>
                                            <option value="">Contact Sales</option>
                                            <option value="">Ask a question</option>
                                            <option value="">Request API</option>
                                            <option value="">Feedback</option>
                                            <option value="">Complain about something bad</option>
                                        </select>
                                    </div>

                                    <div class="col-4 col-12-small">
                                        <input type="radio" id="priority-low" name="priority" />
                                        <label for="priority-low">Low</label>
                                    </div>
                                    <div class="col-4 col-12-small">
                                        <input type="radio" id="priority-normal" name="priority" checked />
                                        <label for="priority-normal">Normal</label>
                                    </div>
                                    <div class="col-4 col-12-small">
                                        <input type="radio" id="priority-high" name="priority" />
                                        <label for="priority-high">High</label>
                                    </div>

                                    <div class="col-6 col-12-small">
                                        <input type="checkbox" id="human" name="human" required />
                                        <label for="human">I am a human</label>
                                    </div>

                                    <div class="col-12">
                                        <textarea name="demo-message" id="demo-message" placeholder="Enter your message"
                                            rows="6"></textarea>
                                    </div>
                                    <div class="col-12">
                                        <ul class="actions">
                                            <li><input type="submit" value="Send Message" class="primary" /></li>
                                            <li><input type="reset" value="Reset" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </section>

                    </div>
                </div>
            </div>

            <div id="sidebar">
                <div class="inner">

                    <section id="search" class="alt">
                        <form method="post" action="#">
                            <input type="text" name="query" id="query" placeholder="Search" />
                        </form>
                    </section>

                    <nav id="menu">
                        <header class="major">
                            <h2>Menu</h2>
                        </header>
                        <ul>
                            <li><a href="https://react-replace.vercel.app">Home</a></li>
                            <li><a href="https://github.com/leekayden/redirection" target="_blank">Github</a></li>
                            <li>
                                <span class="opener">Tools</span>
                                <ul>
                                    <li><a href="https://react-replace.vercel.app/tools/qr-generator">QR Code Generator</a></li>
                                    <li><a href="https://react-replace.vercel.app/tools/tts">Text To Speech Generator</a></li>
                                    <li><a href="https://react-replace.vercel.app/tools/screen-recorder">Screen Recorder</a></li>
                                    <li><a href="https://react-replace.vercel.app/tools/percentage-calculator">Percentage
                                        Calculator</a></li>
                                </ul>
                            </li>

                            <li>
                                <span class="opener">Hacking</span>
                                <ul>
                                    <li><a href="https://github.com/leekayden/blackeye" target="_blank">Blackeye</a></li>

                                </ul>
                            </li>



                            <li>
                                <span class="opener">Games</span>
                                <ul>
                                    <li><a href="https://react-replace.vercel.app/games/scissors-paper-stone">Rock, Paper,
                                        Scissors</a></li>
                                    <li><a href="https://react-replace.vercel.app/games/snowman">Snowman</a></li>
                                </ul>
                            </li>



                            <li><a href="https://react-replace.vercel.app/blog">Blog</a></li>


                            <li><a href="https://react-replace.vercel.app/sitemap">Sitemap</a></li>





                        </ul>
                    </nav>

                    <section>
                        <header class="major">
                            <h2>Recent Posts</h2>
                        </header>
                        <div class="mini-posts">
                        </div>
                        <ul class="actions">
                            <li><a href="https://react-replace.vercel.app/blog" class="button">More</a></li>
                        </ul>
                    </section>

                    <section>
                        <header class="major">
                            <h2>Recent Posts</h2>
                        </header>
                        <div class="mini-posts">
                            <article></article>
                        </div>
                        <ul class="actions">
                            <li><a href="https://react-replace.vercel.app/blog" class="button">More</a></li>
                        </ul>
                    </section>

                    <section>
                        <header class="major">
                            <h2>Get in touch</h2>
                        </header>
                        <p></p>
                        <ul class="contact">
                            <li class="icon solid fa-envelope"><a
                                href="mailto:kayden@programmer.net">kayden@programmer.net</a></li>
                            <li class="icon solid fa-phone"><a href="tel:+6581133596" target="_blank">+65 8113 3596</a></li>
                        </ul>
                    </section>

                    <footer id="footer">
                        <p class="copyright">&copy; Cloudserve 2019-2021 | All rights reserved.</p>
                    </footer>
                </div>
            </div>

            <div id="sidebar">
                <div class="inner">

                    <section id="search" class="alt">
                        <form method="post" action="#">
                            <input type="text" name="query" id="query" placeholder="Search" />
                        </form>
                    </section>

                    <nav id="menu">
                        <header class="major">
                            <h2>Menu</h2>
                        </header>
                        <ul>
                            <li><a href="https://react-replace.vercel.app">Home</a></li>
                            <li><a href="https://github.com/leekayden/redirection" target="_blank">Github</a></li>
                            <li>
                                <span class="opener">Tools</span>
                                <ul>
                                    <li><a href="https://react-replace.vercel.app/tools/qr-generator">QR Code Generator</a></li>
                                    <li><a href="https://react-replace.vercel.app/tools/tts">Text To Speech Generator</a></li>
                                    <li><a href="https://react-replace.vercel.app/tools/screen-recorder">Screen Recorder</a></li>
                                    <li><a href="https://react-replace.vercel.app/tools/percentage-calculator">Percentage
                                        Calculator</a></li>
                                </ul>
                            </li>

                            <li>
                                <span class="opener">Hacking</span>
                                <ul>
                                    <li><a href="https://github.com/leekayden/blackeye" target="_blank">Blackeye</a></li>

                                </ul>
                            </li>



                            <li>
                                <span class="opener">Games</span>
                                <ul>
                                    <li><a href="https://react-replace.vercel.app/games/scissors-paper-stone">Rock, Paper,
                                        Scissors</a></li>
                                    <li><a href="https://react-replace.vercel.app/games/snowman">Snowman</a></li>
                                </ul>
                            </li>



                            <li><a href="https://react-replace.vercel.app/blog">Blog</a></li>


                            <li><a href="https://react-replace.vercel.app/sitemap">Sitemap</a></li>





                        </ul>
                    </nav>

                    <section>
                        <header class="major">
                            <h2>Recent Posts</h2>
                        </header>
                        <div class="mini-posts">
                        </div>
                        <ul class="actions">
                            <li><a href="https://react-replace.vercel.app/blog" class="button">More</a></li>
                        </ul>
                    </section>

                    <section>
                        <header class="major">
                            <h2>Recent Posts</h2>
                        </header>
                        <div class="mini-posts">
                            <article></article>
                        </div>
                        <ul class="actions">
                            <li><a href="https://react-replace.vercel.app/blog" class="button">More</a></li>
                        </ul>
                    </section>

                    <section>
                        <header class="major">
                            <h2>Get in touch</h2>
                        </header>
                        <p></p>
                        <ul class="contact">
                            <li class="icon solid fa-envelope"><a
                                href="mailto:kayden@programmer.net">kayden@programmer.net</a></li>
                            <li class="icon solid fa-phone"><a href="tel:+6581133596" target="_blank">+65 8113 3596</a></li>
                        </ul>
                    </section>

                    <footer id="footer">
                        <p class="copyright">&copy; Cloudserve 2019-2021 | All rights reserved.</p>
                    </footer>
                    <a href="#sidebar" class="toggle">Toggle</a>
                </div>
            </div>

        </div>
    )
}

export default Home;