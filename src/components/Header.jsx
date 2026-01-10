/**
 * Renders the page header containing a hero image and the main heading with the word "Movies" styled.
 *
 * @returns {JSX.Element} A header element with an image (src "/hero.png", alt "Hero Banner") and an h1 where "Movies" is wrapped in a span with className "text-gradient".
 */
export default function Header() {
  return (
    <header>
      <img src="/hero.png" alt="Hero Banner" />
      <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>
    </header>
  )
}