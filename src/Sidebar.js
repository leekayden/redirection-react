import React from 'react'

function Sidebar() {
    return (
        <div className="Sidebar">
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
    </div>
    )
}

export default Sidebar;