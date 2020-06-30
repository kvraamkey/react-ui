import React from 'react'

import * as library from '@kvraamkey/react-ui';
import '@kvraamkey/react-ui/dist/index.css'

const { Button } = library;

const App = () => {
  return (
    <section className="docs">
      <section className='docs-nav'>
        <div className="docs-nav-header">
          <span>React UI</span>
          <input type="search" placeholder="Search Component" />
        </div>
        <div className="docs-nav-list">
          {Object.keys(library).map(lib => <span key={lib}>{lib}</span>)}
        </div>
      </section>
      <section className='docs-content'>
        <div className="example">
          <Button.List>
            <Button name="Default" className="custom" />
            <Button name="Primary" variant={"primary"} />
            <Button name="Secondary" variant={"secondary"} />
            <Button name="Success" variant={"success"} />
            <Button name="Info" variant={"info"} />
            <Button name="Warning" variant={"warning"} />
            <Button name="Danger" variant={"danger"} disabled />
            <Button name="Dark" variant={"dark"} />
            <Button name="link button" link />
          </Button.List>

          <Button.List>
            <Button name="Default" className="custome" outline />
            <Button name="Primary" variant={"primary"} outline />
            <Button name="Secondary" variant={"secondary"} outline />
            <Button name="Success" variant={"success"} outline />
            <Button name="Info" variant={"info"} outline />
            <Button name="Warning" variant={"warning"} outline />
            <Button name="Danger" variant={"danger"} outline />
            <Button name="Dark" variant={"dark"} outline />
            <Button name="link button" link />
          </Button.List>

        </div>
      </section>
    </section>
  )
}

export default App
