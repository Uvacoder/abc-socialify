import React from 'react'
import { Typography } from 'antd'

const { Text, Link } = Typography

const Footer = () => {
  return (
    <footer>
      <Text style={{ margin: 'unset' }}>
        <span>{`Made with 💖 by `}</span>
        <Link
          href="https://abclinks.vercel.app"
          target="_blank"
          rel="noopener noreferrer">
          abc
        </Link>
        &nbsp;and&nbsp;
        <Link
          href="https://github.com/uvacoder/"
          target="_blank"
          rel="noopener noreferrer">
          uvacoder
        </Link>
      </Text>

      <style jsx>{`
        footer {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </footer>
  )
}

export default Footer
