import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

const Component = ({ children, readme }) => {
  console.log(readme);
  const [markdown, setMarkdown] = React.useState('');

  React.useEffect(() => {
    fetch(readme)
      .then((response) => response.text())
      .then((text) => {
        setMarkdown(marked(text));
      });
  });

  return (
    <>
      <div className='docs-readme'>
        {readme && (
          <div className='markdown-body'>
            <div dangerouslySetInnerHTML={{ __html: markdown }} />
          </div>
        )}
      </div>
      <div className='docs-example'>
        <h3 className='docs-example-title'>Example</h3>
        {children}
      </div>
    </>
  );
};

const { node, string } = PropTypes;

Component.propTypes = {
  children: node.isRequired,
  readme: string
};

export default Component;
