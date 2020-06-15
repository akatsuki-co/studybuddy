import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Content from '../components/content/Content'
import { Switch, Route } from 'react-router-dom'

const Python = () => {
  const tableOfContents = {
    language: 'python',
    sidebar: [
      {
        menu: 'Basics',
        subMenu: [
          'Hello World',
          'Data Types',
          'Lists',
          'Dictionaries',
          'Comprehensions',
        ],
      },
      {
        menu: 'Data Structures',
        subMenu: [
          'Collections',
          'Linked Lists',
          'Stacks and Queues',
          'Hash Tables',
          'Sets',
          'Trees',
          'Heaps',
          'Tries',
          'Graphs',
        ],
      },
      {
        menu: 'Algorithms',
        subMenu: ['Sorting', 'Searching'],
      },
    ],
  }

  return (
    <section className='py-3'>
      <Container>
        <Row>
          <Sidebar data={tableOfContents}></Sidebar>
          <Switch>
            <Route
              path='/python/:topic'
              render={(props) => <Content {...props} language='python' />}
            />
            <Route
              path='/'
              render={(props) => (
                <Content
                  {...props}
<<<<<<< HEAD:client/src/pages/Python.jsx
                  language="python"
                  defaultTopic="helloWorld"
=======
                  language='python'
                  default_topic='hello_world'
>>>>>>> master:src/pages/Python.jsx
                />
              )}
            />
          </Switch>
        </Row>
      </Container>
    </section>
  )
}

export default Python
