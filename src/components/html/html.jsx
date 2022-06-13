import ReactMarkdown from 'react-markdown'

export const HTML = ({ content, children = content }) => {
  return <ReactMarkdown>{children}</ReactMarkdown>
}
