import Spotlight from "@/icons/Spotlight"
import { footerLinks } from "@/lib/data"

const Footer = () => {
    return (
        <footer>
            <hr />

            <div className="info">
                <p>More ways to contact: Contact us via email. Or call 000800 040 1966.</p>
            </div>


            <div className="links">
                <p>Copyright © 2025 Enzo Inc. All rights reserved.</p>

                <ul>
                    {footerLinks.map((item) => (
                        <li key={item.title}>
                            <a href={item.link}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
export default Footer