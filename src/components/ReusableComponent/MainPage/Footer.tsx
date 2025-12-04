import { footerLinks } from '@/lib/data'

const Footer = () => {
  return (
    <footer>
      <hr />

      <div className='text-white p-10'>
        <p>
          If you have any enquiries, please fell free to contact us via our
          official email.
          <br />
          Or call 000800 040 1966.
        </p>
      </div>

      <div className='bottom-0'>
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
